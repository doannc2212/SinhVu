var bgArr = [{
    path: "img/slide-1.jpg",
    title: '',
    text: ''
  },
  {
    path: "img/slide-2.jpg",
    title: "Thiết kế Homedy",
    text: "PRO201 thiết kế hệ thống nhận diện thương hiệu Homedy, UI UX mobile app và thiết kế website"
  },
  {
    path: "img/Nature (1).jpg",
    title: "Pass PRO201",
    text: "HTML/CSS/JavaScript"
  }
];

var tiltArr = [{
    icon: "fas fa-globe-asia",
    title: "Thương Hiệu",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    icon: "fas fa-book",
    title: "Lịch Sử",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
  },
  {
    icon: "fas fa-check-square",
    title: "Uy Tín",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
  },
  {
    icon: "fas fa-dog",
    title: "Pass PRO201",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  },
];


var swiperSlider = [{
  imgPath: "img/asdsa.jpg",
  title: "Imuzik",
  text: "Một thế giới âm nhạc"
}, {
  imgPath: "img/chat-lieu-giay-ep-600x403.png",
  title: "iCheck",
  text: ""
}, {
  imgPath: "img/logo-happy-farm-768x559-600x403.jpg",
  title: "Happy Farm",
  text: ""
}, {
  imgPath: "img/card-pizza-callo-logo-design-by-sinhvu-1024x827-600x403.png",
  title: "Pizza Callo",
  text: ""
}, {
  imgPath: "img/1-1-600x403.jpg",
  title: "AWing",
  text: ""
}, {
  imgPath: "img/4-768x538-600x403.png",
  title: "LiuLab",
  text: ""
}, {
  imgPath: "img/Vinawaco_To-gap-600x403.jpg",
  title: "Tổng Công ty Xây dựng đường thủy",
  text: "VinaWaco"
}, {
  imgPath: "img/Services-1-600x403.jpg",
  title: "Alt Plus Việt Nam",
  text: ""
}, {
  imgPath: "img/song-khoe-24-4-600x403.jpg",
  title: "Sống Khỏe Viettel",
  text: ""
}, {
  imgPath: "img/Vstar3-600x403.jpg",
  title: "VStar",
  text: ""
}];

var cur = 0;
var blockCreateDot = false;
var blockCreateSwiperImg = false;

//navigate current index
function navigateCur(num) {
  changeSmThing(cur + num);
}

//This is Onload Function
function changeSmThing(num) {
  //change background
  cur = num;
  //Infinite Loop
  if (cur >= bgArr.length) cur = 0;
  if (cur < 0) cur = bgArr.length;
  //Onload main
  document.getElementById('bg-slider').src = bgArr[cur].path;
  changeTitleText();
  //Create Slide's dots
  if (!blockCreateDot) {
    if (bgArr.length != 1) createDot();
    blockCreateDot = true;
  }
  //Make dot active
  if (bgArr.length != 1) setActiveDot();
  //Set Parallax hover detail
  setTiltDetail();
  if (!blockCreateSwiperImg) {
    createSwiperImgSlider();
    blockCreateSwiperImg = true;
  }
}

//Change text in slide
function changeTitleText() {
  var td = document.getElementById('title-description');
  var t = document.getElementById('title');
  if (bgArr[cur].title) //Check if title is Empty
  {
    t.innerHTML = bgArr[cur].title;
    t.style.display = "block";
  } else t.style.display = "none";
  if (bgArr[cur].text) //Check if title-description is Empty
  {
    td.innerHTML = bgArr[cur].text;
    td.style.display = "block";
  } else td.style.display = "none";
}

//Create dot onload
function createDot() {
  var dot;
  for (var i = 0; i < bgArr.length; i++) {
    //Create 'a' tag
    dot = document.createElement("a");
    //add function onclick to 'a' tag
    dot.setAttribute("onClick", "changeSmThing(" + i + ")");
    //add class to 'a' tag
    dot.setAttribute("class", "dot mx-1");
    //put this 'a' tag into block 'dot-box'
    document.getElementById('dot-box').appendChild(dot);
  }
}

//Make dot active
function setActiveDot() {
  //Create array of dot
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" dot-active", '');
  //set 'dot-active'
  dots[cur].className += " dot-active";
}

//Set data to Parallax Hover
function setTiltDetail() {
  //Get Array
  var icons = document.getElementsByClassName('tilt-icon');
  var titles = document.getElementsByClassName('tilt-title');
  var texts = document.getElementsByClassName('tilt-text');
  for (var i = 0; i < icons.length; i++) {
    //Set data
    icons[i].className += " " + tiltArr[i].icon;
    titles[i].innerHTML = tiltArr[i].title;
    texts[i].innerHTML = tiltArr[i].text;
  }
}

//Change background Color
function changeBGColor(change) {
  document.getElementById(change).style.backgroundColor = getRandomColor();
}

//Create Swiper SlideShow
function createSwiperImgSlider() {
  var slide,
    wrapImg,
    imgSwiper,
    swiperLink,
    titleSwiper,
    textSwiper,
    a1, a2;
  for (var i = 0; i < swiperSlider.length; i++) {
    //create slide
    slide = document.createElement("div");
    slide.setAttribute("class", "swiper-slide");
    document.getElementById("swiper-box").appendChild(slide);
    //create wrapImg
    wrapImg = document.createElement("div");
    wrapImg.setAttribute("class", "fuild-container wrap-img-swiper");
    wrapImg.setAttribute("id", "wrapSwiperImg" + i);
    wrapImg.setAttribute("onmouseover", "changeBGColor(this.id)");
    slide.appendChild(wrapImg);
    //create img tag
    imgSwiper = document.createElement("img");
    imgSwiper.setAttribute("class", "img-swiper");
    wrapImg.appendChild(imgSwiper);
    //create img link
    swiperLink = document.createElement("div");
    swiperLink.setAttribute("class", "swiper-link text-center");
    wrapImg.appendChild(swiperLink);
    a1 = document.createElement("a");
    a1.href = "#";
    a1.innerHTML = "Phóng To";
    a2 = document.createElement("a");
    a2.href = "";
    a2.innerHTML = "Chi Tiết";
    swiperLink.appendChild(a1);
    swiperLink.appendChild(a2);
    //create Break Line
    slide.appendChild(document.createElement("br"));
    //create Title
    titleSwiper = document.createElement("h3");
    titleSwiper.setAttribute("class", "title-swiper");
    slide.appendChild(titleSwiper);
    //Create text
    textSwiper = document.createElement("span");
    textSwiper.setAttribute("class", "text-swiper");
    slide.appendChild(textSwiper);
  }
  var swiperImgs = document.getElementsByClassName('img-swiper');
  var swiperTitles = document.getElementsByClassName('title-swiper');
  var swiperTexts = document.getElementsByClassName('text-swiper');
  for (i = 0; i < swiperSlider.length; i++) {
    swiperImgs[i].src = swiperSlider[i].imgPath;
    if (swiperSlider[i]) swiperTitles[i].innerHTML = swiperSlider[i].title;
    else swiperTitles[i].style.display = "none";
    if (swiperSlider[i]) swiperTexts[i].innerHTML = swiperSlider[i].text;
    else swiperTexts[i].style.display = "none";
  }

  //Init Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 35,
    centeredSlides: false,
    loop: true
  });
}
