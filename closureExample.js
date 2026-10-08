function createAccount(customerName, balance) {
  return {
    addBalance: function (amount) {
      balance += amount;
      return console.log(
        `Amount added: ${amount}. The balance is ${balance}`
      );
    },

    deductBalance: function (amount) {
      if (amount > balance) {
        return console.log(
          `Amount requested: ${amount}. The balance is ${balance}. The amount is greater than the balance!`
        );
      } else {
        balance -= amount;
        return console.log(
          `Amount deducted: ${amount}. The balance is ${balance}`
        );
      }
    },

    getBalance: function () {
      return console.log(`The balance is ${balance}`);
    },
  };
}

const customer = createAccount("Ishan", 500);

const balance1 = customer.addBalance(200);
const balance2 = customer.addBalance(450);
const balance3 = customer.deductBalance(300);
const balance4 = customer.getBalance();
