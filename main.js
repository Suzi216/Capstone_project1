//mobile user clickup
const ham = document.querySelector('.hamburger');
const navbar = document.querySelector('.navig');
const x = document.querySelector('.x');
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


//// Dynamic speaker
const speakers = [
  {
    image: "images/speaker1.jpg",
    title: 'Caroline Girvan',
    text: '36-year-old Caroline a personal trainer.',
    description:
    "An athlete that post everyday quality workout for free on youtube.",
  },
  {
    image: "images/speaker1.jpg",
    title: 'Caroline Girvan',
    text: '36-year-old Caroline a personal trainer.',
    description:
    "An athlete that post everyday quality workout for free on youtube.",
  },
  {
    image: "images/speaker2.jpg",
    title: 'Sydney Cumming',
    text: 'Fitness trainer Sydney Cummings.',
    description:
    "An athlete that post everyday quality workout for free on youtube.",
    },
  {
    image: "images/speaker2.jpg",
    title: 'Sydney Cumming',
    text: 'Fitness trainer Sydney Cummings.',
    description:
    "An athlete that post everyday quality workout for free on youtube.",
  },
];


const images = document.getElementsByClassName('speaker-img');
const titles = document.getElementsByClassName('title');
const about = document.getElementsByClassName('about');
const discription = document.getElementsByClassName('disc');

const array = document.getElementsByClassName('speakers');
function dynamic_feature(){
  for (let i = 0; i < array.length; i += 1){
      titles[i].innerText = speakers[i].title;
      images[i].src = `${speakers[i].image}`;
      about[i].innerText = `${speakers[i].text}`;
      discription[i].innerText=`${speakers[i].description}`;
}
}
dynamic_feature()
