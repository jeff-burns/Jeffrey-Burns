window.onscroll = function() {
  myFunction();
  myFunction2();
  myFunction3();
  myFunction4();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
console.log(sticky)
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var header2 = document.getElementById("myHeader2");
var sticky2 = header2.offsetTop;

function myFunction2() {
  if (window.pageYOffset > sticky2) {
    header2.classList.add("sticky2");
  } else {
    header2.classList.remove("sticky2");
  }
}

var header3 = document.getElementById("myHeader3");
var sticky3 = header3.offsetTop;

function myFunction3() {
  if (window.pageYOffset > sticky3) {
    header3.classList.add("sticky3");
  } else {
    header3.classList.remove("sticky3");
  }
}

var header4 = document.getElementById("myHeader4");
var sticky4 = header4.offsetTop;

function myFunction4() {
  if (window.pageYOffset > sticky4) {
    header4.classList.add("sticky4");
  } else {
    header4.classList.remove("sticky4");
  }
}
  

