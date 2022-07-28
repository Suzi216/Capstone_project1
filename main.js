// mobile user clickup
const ham = document.querySelector('.hamburger');
const navbar = document.querySelector('.navig');
const x = document.querySelector('.x');
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

/// / Dynamic speaker
const speakers = [
  {
    image: 'images/speaker1.jpg',
    title: 'Caroline Girvan',
    text: '36-year-old Caroline a personal trainer.',
    description:
    'An athlete that post everyday quality workout for free on youtube.',
  },
  {
    image: 'images/speaker1.jpg',
    title: 'Caroline Girvan',
    text: '36-year-old Caroline a personal trainer.',
    description:
    'An athlete that post everyday quality workout for free on youtube.',
  },
  {
    image: 'images/speaker2.jpg',
    title: 'Sydney Cumming',
    text: 'Fitness trainer Sydney Cummings.',
    description:
    'An athlete that post everyday quality workout for free on youtube.',
  },
  {
    image: 'images/speaker2.jpg',
    title: 'Sydney Cumming',
    text: 'Fitness trainer Sydney Cummings.',
    description:
    'An athlete that post everyday quality workout for free on youtube.',
  },
];

function feature() {
  const wrapper = document.getElementsByClassName('wrapper3');
  const h5 = document.createElement('h5');
  h5.className = 'text';
  h5.innerText = 'Featured Speakers';
  wrapper[0].appendChild(h5);

  const line = document.createElement('div');
  line.className = 'line';
  wrapper[0].appendChild(line);

  const wrap = document.createElement('div');
  wrap.className = 'speaker-wrap';

  wrapper[0].appendChild(wrap);

  for (let i = 0; i < speakers.length; i += 1) {
    const speaker = document.createElement('section');
    speaker.className = 'speakers';
    wrap.appendChild(speaker);

    const img = document.createElement('img');
    img.className = 'speaker-img';
    speaker.appendChild(img);
    img.src = `${speakers[i].image}`;

    const side = document.createElement('div');
    side.className = 'side-info';
    speaker.appendChild(side);

    const hd = document.createElement('h5');
    hd.className = 'title';
    side.appendChild(hd);
    hd.innerText = `${speakers[i].title}`;

    const about = document.createElement('span');
    about.className = 'about text-danger';
    side.appendChild(about);
    about.innerText = `${speakers[i].text}`;

    const line1 = document.createElement('div');
    line1.className = 'line-';
    side.appendChild(line1);

    const discription = document.createElement('p');
    discription.className = 'disc';
    side.appendChild(discription);
    discription.innerText = `${speakers[i].description}`;
  }
}
feature();
