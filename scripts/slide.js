export const videosFromBloggers = [
  {
    image: "./../../assets/images/mainContent/blogger/slide1.png",
    timer: "4:15",
    title: "A Brief History Of Creation",
    views: "80k views · 3 days ago",
    author: "Dollie Blair",
  },
  {
    image: "./../../assets/images/mainContent/blogger/slide2.png",
    timer: "8:00",
    title: "Selecting The Right Hotel",
    views: "123k views  ·  1 months ago",
    author: "Dollie Blair",
  },
  {
    image: "./../../assets/images/mainContent/blogger/slide3.png",
    timer: "5:32",
    title: "Asteroids",
    views: "43k views  ·  12 days ago",
    author: "Dollie Blair",
  },
  {
    image: "./../../assets/images/mainContent/blogger/slide4.png",
    timer: "6:40",
    title: "Telescopes 101",
    views: "11k views  ·  6 months ago",
    author: "Dollie Blair",
  }, {
    image: "./../../assets/images/mainContent/blogger/slide5.png",
    timer: "1:45",
    title: "Medical Care Is Just",
    views: "18k views  ·  2 days ago",
    author: "Dollie Blair",
  }, {
    image: "./../../assets/images/mainContent/blogger/slide6.png",
    timer: "2:12",
    title: "Moon Gazing",
    views: "167k views  ·  4 months ago",
    author: "Dollie Blair",
  }
]

export const videosFromChannels = [
  {
    image: "./../../assets/images/mainContent/food/food1.png",
    timer: "7:36",
    title: "Astronomy Or Astrology",
    views: "240k views  ·  4 months ago",
    author: "Food & Drink",
  },
  {
    image: "./../../assets/images/mainContent/food/food2.png",
    timer: "2:19",
    title: "Advertising Outdoors",
    views: "13k views  ·  15 days ago",
    author: "Food & Drink",
  },
  {
    image: "./../../assets/images/mainContent/food/food3.png",
    timer: "9:05",
    title: "Radio Astronomy",
    views: "1k views  ·  11 months ago",
    author: "Food & Drink",
  },
  {
    image: "./../../assets/images/mainContent/food/food4.png",
    timer: "3:40",
    title: "A Good Autoresponder",
    views: "45k views  ·  2 months ago",
    author: "Food & Drink",
  }, {
    image: "./../../assets/images/mainContent/food/food5.png",
    timer: "1:56",
    title: "Baby Monitor Technology",
    views: "86k views  ·  7 days ago",
    author: "Food & Drink",
  }, {
    image: "./../../assets/images/mainContent/food/food6.png",
    timer: "4:15",
    title: "Asteroids",
    views: "123kg views  ·  4 months ago",
    author: "Food & Drink",
  }
]

export const videosFromRecomended = [
  {
    image: "./../../assets/images/mainContent/recommended/person1.png",
    timer: "3:40",
    title: "Dude You Re Getting A Telescope",
    views: "34k views  ·  5 months ago",
    author: "Gussie French",
  },
  {
    image: "./../../assets/images/mainContent/recommended/person2.png",
    timer: "2:19",
    title: "Moon Gazing",
    views: "54k views  ·  11 months ago",
    author: "Edward Osborne",
  },
  {
    image: "./../../assets/images/mainContent/recommended/person3.png",
    timer: "9:05",
    title: "Moon Gazing",
    views: "125k views  ·  4 months ago",
    author: "Dollie Blair",
  },
]

export const channelsVideo = [
   {
    image: "./../../assets/images/mainContent/recommended/person1.png",
    timer: "3:40",
    title: "Dude You Re Getting A Telescope",
    views: "34k views  ·  5 months ago",
    author: "Gussie French",
  },
  {
    image: "./../../assets/images/mainContent/recommended/person2.png",
    timer: "2:19",
    title: "Moon Gazing",
    views: "54k views  ·  11 months ago",
    author: "Edward Osborne",
  },
  {
    image: "./../../assets/images/mainContent/recommended/person3.png",
    timer: "9:05",
    title: "Moon Gazing",
    views: "125k views  ·  4 months ago",
    author: "Dollie Blair",
  }, {
    image: "./../../assets/images/mainContent/recommended/person1.png",
    timer: "3:40",
    title: "Dude You Re Getting A Telescope",
    views: "34k views  ·  5 months ago",
    author: "Gussie French",
  },
  {
    image: "./../../assets/images/mainContent/recommended/person2.png",
    timer: "2:19",
    title: "Moon Gazing",
    views: "54k views  ·  11 months ago",
    author: "Edward Osborne",
  },
  {
    image: "./../../assets/images/mainContent/recommended/person3.png",
    timer: "9:05",
    title: "Moon Gazing",
    views: "125k views  ·  4 months ago",
    author: "Dollie Blair",
  },
]

function createCard(video, variant = "default") {
  const card = document.createElement('div');

  if (variant === "recomended") {
    card.classList.add('scroll__card-recomended');
  } else {
    card.classList.add('scroll__card');
  }

  const imageWrapper = document.createElement('div');

  if (variant === "recomended") {
    imageWrapper.classList.add('slide__image__recomended-wrapper');
  } else {
    imageWrapper.classList.add('slide__image-wrapper');
  }

  const img = document.createElement('img');
  img.classList.add('slide__image');
  img.src = video.image;
  img.alt = video.title;

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = video.timer;

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(timer);

  const title = document.createElement('h4');
  title.classList.add('video__name');
  title.textContent = video.title;

  const info = document.createElement('div');
  info.classList.add('video__info');

  const views = document.createElement('p');
  views.textContent = video.views;

  const author = document.createElement('p');
  author.textContent = video.author;

  info.appendChild(views);
  info.appendChild(author);

  card.appendChild(imageWrapper);
  card.appendChild(title);
  card.appendChild(info);

  return card;
}

function renderVideos(array, container) {
  array.forEach(video => {
    const card = createCard(video, container.id);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const bloggerContainer = document.getElementById('blogger');

  renderVideos(videosFromBloggers, bloggerContainer);

  const channelContainer = document.getElementById('channel');
  renderVideos(videosFromChannels, channelContainer);

  const recomendedContainer = document.getElementById('recomended');
  renderVideos(videosFromRecomended, recomendedContainer);
});
