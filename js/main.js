let heading = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let desc = this.nextElementSibling;
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}
// sssssssssssssss
let slideImages = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg"];
let slideImages2 = ["imgs/4.jpg", "imgs/3.jpg", "imgs/1.jpg", "imgs/2.jpg"];
let slideImages3 = ["imgs/3.jpg", "imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg"];
let slideImages4 = ["imgs/2.jpg", "imgs/4.jpg", "imgs/4.jpg", "imgs/1.jpg"];
let a = 0;
let b = 0;
let c = 0;
let d = 0;

let slideShow = function () {
  document.slideshow.src = slideImages[a];
  if (a < slideImages.length - 1) {
    ++a;
  } else {
    a = 0;
  }
  setTimeout("slideShow()", 2000);
};
slideShow();

//ssssssssss
let slideShow2 = function () {
  document.slideshow2.src = slideImages2[b];
  if (b < slideImages2.length - 1) {
    ++b;
  } else {
    b = 0;
  }
  setTimeout("slideShow2()", 2000);
};
slideShow2();
// sssssssssssssss
let slideShow3 = function () {
  document.slideshow3.src = slideImages3[c];
  if (c < slideImages3.length - 1) {
    ++c;
  } else {
    c = 0;
  }
  setTimeout("slideShow3()", 2000);
};
slideShow3();
// sssssssssssssss
let slideShow4 = function () {
  document.slideshow4.src = slideImages4[d];
  if (d < slideImages4.length - 1) {
    ++d;
  } else {
    d = 0;
  }
  setTimeout("slideShow4()", 2000);
};
slideShow4();
