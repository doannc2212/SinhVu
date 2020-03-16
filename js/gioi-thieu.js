window.onscroll = function() {
  textHideScroll();
};

function textHideScroll() {
  var eff = document.getElementsByClassName('scrollEffect');
  var t = document.documentElement.scrollTop;
  if (document.body.scrollTop > 424 || t > 424) {
    //        eff[0].style.display = "none";
    eff[0].innerHTML = "Sinh Vũ là công ty thiết kế có 16 năm kinh nghiệm<br> nghiên cứu thiết kế logo và các hệ thống nhận diện thương hiệu.";
    eff[0].style.fontSize = "38px";
  } else {
    eff[0].innerHTML = "Một tập thể đam mê sáng tạo";
    eff[0].style.fontSize = "80px";
    eff[0].style.display = "block";
  }
  if (document.body.scrollTop > 289 || t > 289) {
    //        eff[1].style.display = "none";

  } else {
    //        eff[1].style.display = "block";
  }
}
