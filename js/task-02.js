const images = [
  {
    url: './images/1.jpg',
    alt: 'Image 1',
  },
  {
    url: './images/2.jpg',
    alt: 'Image 2',
  },
  {
    url: './images/3.jpg',
    alt: 'Image 3',
  },
  {
    url: './images/4.jpg',
    alt: 'Image 4',
  },
  {
    url: './images/5.jpg',
    alt: 'Image 5',
  },
  {
    url: './images/6.jpg',
    alt: 'Image 6',
  },
];

const galleryList = document.querySelector(".gallery");

const galleryItems = images.map(({ url, alt }) => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;

  li.appendChild(img);
  return li;
});

galleryList.append(...galleryItems);

