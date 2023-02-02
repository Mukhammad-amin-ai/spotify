var play = document.getElementById("active");
var pauce = document.getElementById("hidden");
var source = document.createElement("audio");
var data = [
  {
    src: "./Audio/MiyaGi_Andy_Panda_-_Minor_70277143.mp3",
  },
  {
    src: "./Audio/Miyagi_JEndshpil_-_Ne_teryaya_74896640.mp3",
  },
  {
    src: "./Audio/Timmies_Nineteen95_-_ugly_64762948.mp3",
  },
];
var count = 0;
var img = document.getElementById("img");
var imgCreate = document.createElement("img");
var imgData = [
  {
    src: "./Img/3c01241e47b1bd699aaccc54e4412d94.jpg",
  },
  {
    src: "./Img/16278.jpeg",
  },
  {
    src: "./Img/500x500.jpg",
  },
];
var nameed = document.getElementById("named");
var author = document.getElementById("author");

play.addEventListener("click", () => {
  pauce.classList.remove("hidden");
  play.classList.toggle("hidden");
  document.body.appendChild(source);
  source.src = data[count].src;
  source.play();
  img.appendChild(imgCreate);
  imgCreate.src = imgData[count].src;
    nameed.innerHTML="Minor"
    author.innerHTML="Miyagi&AndyPanda"
});

pauce.addEventListener("click", () => {
  play.classList.remove("hidden");
  pauce.classList.toggle("hidden");
  source.pause();
});

var prev = document.getElementById("prev");
var next = document.getElementById("nextBtn");

next.addEventListener("click", () => {
  if (count < data.length) {
    count++;
    source.src = data[count].src;
    source.play();
    img.appendChild(imgCreate);
    imgCreate.src = imgData[count].src;
    if (count == 1) {
      nameed.innerHTML = "Не Теряя";
      author.innerHTML = "Miyagi&AndyPanda";
    } else if (count == 2) {
      nameed.innerHTML = "Ugly";
      author.innerHTML = "Timmies";
    }
  } 
});

prev.addEventListener("click", () => {
  if (count < data.length) {
    count--;
    source.src = data[count].src;
    source.play();
    img.appendChild(imgCreate);
    imgCreate.src = imgData[count].src;
    if(count == 0){
      nameed.innerHTML="Minor"
      author.innerHTML="Miyagi&AndyPanda"
    }
    if (count == 1) {
      nameed.innerHTML = "Не Теряя";
      author.innerHTML = "Miyagi&AndyPanda";
    }

  }
});

