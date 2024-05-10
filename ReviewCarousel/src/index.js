const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    text: "As a web developer at X Company, I am proud to work alongside such talented individuals. Together, we collaborate to create innovative solutions that drive our company's success. The positive atmosphere and supportive team culture at X Company make every day a rewarding experience.",
  },
  {
    id: 2,
    name: "Pedro Perez",
    job: "QA",
    img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=sph",
    text: "In my role as a QA specialist at X Company, I am committed to ensuring the highest quality standards for our products. Through meticulous testing and attention to detail, I contribute to the reliability and excellence that define X Company's reputation in the industry.",
  },
  {
    id: 3,
    name: "Sara Ramirez",
    job: "Tech Lead",
    img: "https://i.guim.co.uk/img/media/dc9683b99ebc4fe01c8a90b748691886c0e61727/994_3274_3349_2010/master/3349.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6591876a0e58df7519e3720c3ca7567f",
    text: "As the tech lead at X Company, I am privileged to lead a team of talented individuals who consistently exceed expectations. Together, we tackle challenges with creativity and determination, driving forward the innovative projects that define X Company's success.",
  },
  {
    id: 4,
    name: "Leo Hamilton",
    job: "Backend Developer",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
    text: "In my role as a backend developer at X Company, I am dedicated to delivering robust and efficient solutions that meet our clients' needs. The collaborative environment at X Company fosters creativity and innovation, allowing me to thrive and contribute to our collective success.",
  },
];

const img = document.getElementById("personImg");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const randomButton = document.querySelector(".randomButton");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextButton.addEventListener("click", function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevButton.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomButton.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson();
});
