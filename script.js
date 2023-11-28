const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnimation() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".frame-element", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1.5,
      stagger: 0.2,
    })
    .from("#hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.57,
      delay: -1.5,
      ease: Expo.easeInOut,
    });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

// heading animation
function headingAnimation() {
  document.querySelectorAll(".frame h1").forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      document.querySelector("#cursor").style.width = `200px`;
      document.querySelector("#cursor").style.height = `200px`;
    });
    element.addEventListener("mouseout", function () {
      document.querySelector("#cursor").style.width = `20px`;
      document.querySelector("#cursor").style.height = `20px`;
    });
  });
}

function menuOpen() {
  document.querySelector("#menu").addEventListener("click", function () {
    document.querySelector("#menu-drop").style.right = "-10px";
  });
  document.querySelector("#menu").addEventListener("dblclick", function () {
    document.querySelector("#menu-drop").style.right = "-200px";
  });
}

function secondPageAnimation() {
  var element = document.querySelectorAll(".elem");

  element.forEach(function (val) {
    val.addEventListener("mouseenter", function (dets) {
      val.childNodes[1].style.opacity = 1;
      val.querySelector("h1").style.opacity = "0.5";
      val.querySelector("h1").style.paddingLeft = "90px";
      val.querySelector("h1").style.transition = "all ease-in-out 0.3s";
      val.querySelector("img").style.left = `${dets.clientX}px`;
      // var diff = dets.clientY - val.getBoundingClientRect().top;
      // val.querySelector("img").style.top = `${diff}px`;
    });
    val.addEventListener("mousemove", function (dets) {
      val.childNodes[1].style.opacity = 1;
      val.querySelector("h1").style.opacity = "0.5";
      val.querySelector("h1").style.paddingLeft = "90px";
      val.querySelector("h1").style.transition = "all ease-in-out 0.3s";
      val.querySelector("img").style.left = `${dets.clientX}px`;
      // var diff = dets.clientY - val.getBoundingClientRect().top;
      // val.querySelector("img").style.top = `${dets.clientY}px`;
    });

    val.addEventListener("mouseout", function () {
      val.childNodes[1].style.opacity = 0;
      val.querySelector("h1").style.opacity = "1";
      val.querySelector("h1").style.paddingLeft = "0px";
      val.querySelector("h1").style.transition = "all ease-in-out 0.3s";
    });
  });

  // document.querySelectorAll(".elem").forEach(function (elem) {
  //   elem.addEventListener("mousemove", function (dets) {
  //     elem.querySelector("h1").style.opacity = "0.2";
  //     elem.querySelector("h1").style.paddingLeft = "90px";
  //     elem.querySelector("h1").style.transition = "all ease-in-out 0.8s";

  //     var difference = dets.clientY - elem.getBoundingClientRect().top;

  //     gsap.to(elem.querySelector("img"), {
  //       opacity: 1,
  //       ease: Power1,
  //       top: difference,
  //       left: dets.clientX,
  //     });
  //   });
  //   elem.addEventListener("mouseout", function (dets) {
  //     elem.querySelector("h1").style.opacity = "1";
  //     elem.querySelector("h1").style.paddingLeft = "0px";
  //     elem.querySelector("h1").style.transition = "all ease-in-out 0.8s";
  //     gsap.to(elem.querySelector("img"), {
  //       opacity: 0,
  //       ease: Power1,
  //     });
  //   });
  // });
}

firstPageAnimation();
circleMouseFollower();
headingAnimation();
menuOpen();
secondPageAnimation();
