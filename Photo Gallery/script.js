const imgUrls = [
  'https://picsum.photos/id/13/367/267',
  'https://picsum.photos/id/14/367/267',
  'https://picsum.photos/id/15/367/267',
  'https://picsum.photos/id/16/367/267',
  'https://picsum.photos/id/17/367/267',
  'https://picsum.photos/id/18/367/267',
  'https://picsum.photos/id/19/367/267'
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
let photoIndex = 0;

imgUrls.forEach((image) => {
  const imgElem = document.createElement('img');
  imgElem.src = image;
  gallery.appendChild(imgElem);
})

gallery.addEventListener('click', (e) => {
  photoIndex = imgUrls.findIndex((imageUrl) => imageUrl === e.target.src);
  modal.style.display = 'flex';
  modal.querySelector("img").src = e.target.src;
})

modal.querySelectorAll("button")[0].addEventListener("click", (e) => {
  e.stopPropagation();
  photoIndex = (photoIndex === 0) ? (imgUrls.length - 1) : (photoIndex - 1);
  modal.querySelector("img").src = imgUrls[photoIndex];
})

modal.querySelectorAll("button")[1].addEventListener("click", (e) => {
  e.stopPropagation();
  photoIndex = (photoIndex === (imgUrls.length - 1)) ? 0 : (photoIndex + 1);
  modal.querySelector("img").src = imgUrls[photoIndex];
})

modal.querySelector("img").addEventListener("click", (e) => {
  e.stopPropagation();
})

modal.addEventListener("click", () => {
  modal.style.display = "none";
})

