import { useEffect, useState } from "react";
import axios from "axios";

const useDebounce = (search, delay) => {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounce(search);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [search, delay]);

  return debounce;
};

export default function UserSearch({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    axios
      .get(`https://dummyjson.com/users/search?q=${debouncedSearch}`, {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [debouncedSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && users?.length === 0 && <p>No users found</p>}

      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <div>{`${user.firstName} ${user.lastName}`}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
