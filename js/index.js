var loadTimer;
function showloader() {
  $(".logo").animate({ opacity: 1 }, 100);
  $("#object3").animate({ strokeDashoffset: 0 }, 2500, function () {
    $(".loader-inner").removeClass("loader-vis");
    clearTimeout(loadTimer);
    loadTimer = setTimeout(function () {
      $(".loader-holder").addClass("no-vis-load");
      init();
    }, 200);
  });
  $(".loader-holder").delay(3000).fadeOut(10);
}

function showloader2(nav) {
  $(".loader-holder").css("display", "block");

  setTimeout(function () {
    $(".loader-holder").removeClass("no-vis-load");
  }, 500);
  setTimeout(function () {
    window.location = nav;
  }, 1000);
}

function showloader3() {
  init();
  $(".loader-holder").addClass("no-vis-load");
  setTimeout(function () {
    $(".loader-holder").delay(500).fadeOut(10);
  }, 1000);
}

$(document).ready(function () {
  if (!sessionStorage["done"]) {
    sessionStorage["done"] = "yes";
    showloader();
  } else {
    showloader3();
  }
});
$(window).on("load", function () {
  var toClip = document.getElementById("bg");
  var intro = $(".content--intro");
  var shape = $("svg.shape");
  var path = $(".shape path");
  var enter = $(".enter");

  shape.css("transformOrigin", "50% 0%");
  intro.css("transform", "translateY(-100vh)");

  function randomIntFromInterval(min, max) {
    // min and max included
    randomspeed = Math.floor(Math.random() * (max - min + 1) + min);
  }
  var myclass2;
  var ccx2;
  var ccy2;
  var randomspeed;
  var m;
  setTimeout(function () {
    for (m = 0; m < $(".myself circle").length - 1; m++) {
      if ($(".animdots").hasClass("works")) {
        ccx2 = work[m].cx;
        ccy2 = work[m].cy;
      }
      if ($(".animdots").hasClass("about")) {
        ccx2 = ben[m].cx;
        ccy2 = ben[m].cy;
      }

      if ($(".animdots").hasClass("contact")) {
        ccx2 = contact[m].cx;
        ccy2 = contact[m].cy;
      }
      randomIntFromInterval(1000, 2000);

      anime({
        targets: $(".myself circle")[m],
        duration: randomspeed,
        easing: "easeInOutSine",
        cx: ccx2,
        cy: ccy2,
        complete: function () {},
      });
    }
  }, 1500);

  var menubutton = true;

  $(".hamburger").click(function (e) {
    console.log(menubutton);

    if (menubutton) {
      menubutton = false;
      setTimeout(function () {
        menubutton = true;
      }, 500);

      if (!$(this).hasClass("is-active")) {
        intro.css("display", "block");

        anime({
          targets: ".content--intro",
          duration: 800,
          easing: "easeInOutSine",
          translateY: "0",
        });

        anime({
          targets: "svg.shape",
          scaleY: [
            { value: [0.8, 1.8], duration: 550, easing: "easeInQuad" },
            { value: 1, duration: 550, easing: "easeOutQuad" },
          ],
        });
        TweenMax.set(".shape-wrap", { "margin-top": "0" });
        anime({
          targets: ".shape path",
          duration: 500,
          easing: "easeOutQuad",
          d: path.attr("pathdata:id"),
          complete: function () {},
        });
      } else {
        anime({
          targets: ".content--intro",
          duration: 500,
          easing: "easeInOutSine",
          translateY: "-100vh",
        });

        anime({
          targets: "svg.shape",
          scaleY: [
            { value: [0.8, 1.8], duration: 850, easing: "easeInQuad" },
            { value: 1, duration: 850, easing: "easeOutQuad" },
          ],
        });
        TweenMax.set(".shape-wrap", { "margin-top": "-20px" });
        anime({
          targets: ".shape path",
          duration: 900,
          easing: "easeOutQuad",
          d: path.attr("pathdata:id2"),
          complete: function () {
            intro.css("display", "none");
          },
        });
      }

      $(this).toggleClass("is-active");
      $(".hamburger-cont").toggleClass("closebtn");
      $("body").toggleClass("menuopen");
    }
  });

  function randomIntFromInterval3(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  $(".menusvg circle").each(function (index) {
    var transx = randomIntFromInterval3(500, 1000);
    $(this).attr("data-x", transx);
    $(this).css("transform", "translateX(" + transx + "px)");
  });
  var menulinks = $(".contentlink");

  var homeAnimation = anime({
    targets: ".home_svg circle",
    translateX: 0,
    duration: function () {
      return anime.random(200, 500);
    },
    delay: function () {
      return anime.random(0, 200);
    },
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: false,
    autoplay: false,
  });

  var aboutAnimation = anime({
    targets: ".ben_svg circle",
    translateX: 0,
    duration: function () {
      return anime.random(200, 500);
    },
    delay: function () {
      return anime.random(0, 200);
    },
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: false,
    autoplay: false,
  });

  var worksAnimation = anime({
    targets: ".works_svg circle",
    translateX: 0,
    duration: function () {
      return anime.random(200, 500);
    },
    delay: function () {
      return anime.random(0, 200);
    },
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: false,
    autoplay: false,
  });

  var contactAnimation = anime({
    targets: ".contact_svg circle",
    translateX: 0,
    duration: function () {
      return anime.random(200, 500);
    },
    delay: function () {
      return anime.random(0, 200);
    },
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: false,
    autoplay: false,
  });

  menulinks.mouseenter(function () {
    var idlink = $(this).attr("id");
    enterButton(idlink);
  });
  menulinks.mouseleave(function () {
    var idlink = $(this).attr("id");
    leaveButton(idlink);
  });

  function enterButton(classlink) {
    if (classlink == "homelink") {
      if (homeAnimation.reversed) homeAnimation.reverse();
      console.log(homeAnimation.reversed);
      homeAnimation.play();
    }
    if (classlink == "aboutlink") {
      if (aboutAnimation.reversed) aboutAnimation.reverse();
      console.log(classlink);
      aboutAnimation.play();
    }
    if (classlink == "workslink") {
      if (worksAnimation.reversed) worksAnimation.reverse();
      console.log(classlink);
      worksAnimation.play();
    }
    if (classlink == "contactlink") {
      if (contactAnimation.reversed) contactAnimation.reverse();
      console.log(classlink);
      contactAnimation.play();
    }
  }

  function leaveButton(classlink) {
    if (classlink == "homelink") {
      if (!homeAnimation.reversed) homeAnimation.reverse();
      console.log(homeAnimation.reversed);
      homeAnimation.play();
    }
    if (classlink == "aboutlink") {
      if (!aboutAnimation.reversed) aboutAnimation.reverse();
      console.log(classlink);
      aboutAnimation.play();
    }
    if (classlink == "workslink") {
      if (!worksAnimation.reversed) worksAnimation.reverse();
      console.log(classlink);
      worksAnimation.play();
    }
    if (classlink == "contactlink") {
      if (!contactAnimation.reversed) contactAnimation.reverse();
      console.log(classlink);
      contactAnimation.play();
    }
  }

  $(".navlist li .contentlink").on("touchstart", function (e) {
    if ($(this).parent().hasClass("index_link")) {
      var nav = $(".navigation");
      nav.removeClass();
      nav.addClass("navigation content--intro home");
      console.log("home");
    }

    if ($(this).parent().hasClass("about_link")) {
      var nav = $(".navigation");
      nav.removeClass();
      nav.addClass("navigation content--intro about");

      console.log("about");
    }
  });

  $(".navlist li .contentlink").mouseenter(function () {
    if ($(this).parent().hasClass("index_link")) {
      var nav = $(".navigation");
      nav.removeClass();
      nav.addClass("navigation content--intro home");
    }

    if ($(this).parent().hasClass("about_link")) {
      var nav = $(".navigation");
      nav.removeClass();
      nav.addClass("navigation content--intro about");
    }
    if ($(this).parent().hasClass("works_link")) {
      var nav = $(".navigation");
      nav.removeClass();
      nav.addClass("navigation content--intro works");
    }

    if ($(this).parent().hasClass("contact_link")) {
      var nav = $(".navigation");
      nav.removeClass();
      nav.addClass("navigation content--intro contact");
    }
  });

  $(".navlist li .contentlink").mouseleave(function () {
    if ($(this).parent().hasClass("index_link")) {
      var nav = $(".navigation");
      nav.removeClass("home");
    }
    if ($(this).parent().hasClass("about_link")) {
      var nav = $(".navigation");
      nav.removeClass("about");
    }
    if ($(this).parent().hasClass("works_link")) {
      var nav = $(".navigation");
      nav.removeClass("works");
    }

    if ($(this).parent().hasClass("blog_link")) {
      var nav = $(".navigation");
      nav.removeClass("blog");
    }

    if ($(this).parent().hasClass("contact_link")) {
      var nav = $(".navigation");
      nav.removeClass("contact");
    }
  });
});

function init() {
  function setRects() {
    window.clientHeight = document.body.getBoundingClientRect().height;
    window.clientWidth = document.body.getBoundingClientRect().width;
    $(".fullpager").each(function (index) {
      $(this).width(window.clientWidth);
      $(this).height(window.clientHeight);
    });
    $(".imageslider").each(function (index) {
      $(this).width(window.clientWidth);
      $(this).height(window.clientHeight);
    });
    $(".bgfix").each(function (index) {
      $(this).height(window.clientHeight);
    });
  }

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  var mouseX;
  var mouseY;

  $(document).on("touchstart", function (e) {
    window.onclick = preventDefault;
    window.onmousemove = preventDefault;
    mouseX = e.originalEvent.touches[0].clientX * -1;
    mouseY = e.originalEvent.touches[0].clientY * -1;
    setPolygon();
    console.log(mouseX, mouseY);
  });

  $(document).on("touchmove", function (e) {
    window.onmousemove = preventDefault;

    mouseX = e.originalEvent.changedTouches[0].clientX;
    mouseY = e.originalEvent.changedTouches[0].clientY;
    setPolygon();

    console.log(mouseX, mouseY);
  });

  $(document).on("mousemove", function (event) {
    mouseX =
      window.clientWidth - (event ? event.clientX : window.clientWidth / 2);
    mouseY =
      window.clientHeight - (event ? event.clientY : window.clientHeight / 2);
    setPolygon();
    console.log(mouseX, mouseY);
  });

  function setPolygon() {
    var dx = 0.5 - mouseX / window.clientWidth;
    var dy = 0.5 - mouseY / window.clientHeight;
    $(".maskback").width(window.clientWidth);

    $(".parallax").each(function (index, el) {
      if ($(this).children().hasClass("magnet")) {
        return;
      }
      var $el = $(el);
      var offX = dx * $el.data("offset");
      var offY = dy * $el.data("offset");

      TweenMax.to($el, 0.2, {
        x: offX * -1,
        y: offY * -1,
      });
    });

    var mousePercentX = 100 - mouseX / (window.clientWidth / 100);
    if (mousePercentX < 35) {
      mousePercentX = 35;
      $("body").removeClass("art");
      $("body").addClass("science");
      $("body").addClass("sciencetext");
      $("body").removeClass("arttext");
    } else if (mousePercentX > 40) {
      $("body").removeClass("science");
    }
    if (mousePercentX > 65) {
      mousePercentX = 65;

      $("body").addClass("art");
      $("body").addClass("arttext");
      $("body").removeClass("sciencetext");
    } else if (mousePercentX < 60) {
      $("body").removeClass("art");
    }

    if ((mousePercentX > 36) & (mousePercentX < 64)) {
      $("body").removeClass("sciencetext");
      $("body").removeClass("arttext");
    }

    var mousePercentY = 100 - mouseY / (window.clientHeight / 100);
    var mask1 = $(".mask1");
    var mask2 = $(".mask2");

    TweenMax.set(".mask", { transformOrigin: "100% 50%" });
    var tl = new TimelineMax();
    var tl2 = new TimelineMax();

    tl.to(mask1, 0.2, {
      width: 100 - mousePercentX + "%",
      ease: Power0.easeOut,
    });
    tl2.to(mask2, 0.2, { width: mousePercentX + "%", ease: Power0.easeOut });
  }
  setRects();
  setPolygon();

  window.onresize = setRects;

  $(".poly").each(function (index) {
    if ($(window).width() >= 600) {
      var totallengthpoly = document.querySelector(".poly").getTotalLength();

      $(".poly").css({
        "stroke-dasharray": totallengthpoly,
        "stroke-dashoffset": totallengthpoly,
      });
    }
    setTimeout(function () {
      $(".poly").animate({ strokeDashoffset: 0 }, 500, function () {
        $(".triangle circle").addClass("animate");

        $(".title h1").addClass("animate");
      });
    }, 500);
  });

  var currentX = 0,
    currentY = 0,
    animationSpeed = 8,
    count = 0,
    windowW = $(this).width(),
    windowH = $(this).height(),
    hovered = false,
    pulsed = false,
    activeButton = 0,
    loaded = true;

  var x = 0,
    y = 0,
    dot = $(".dot"),
    path = dot.find("path");

  $(window).on("mousemove", function (e) {
    loaded = true;
    if (!hovered) {
      x = e.pageX;
      y = e.pageY;
    }
  });

  var $animation_elements = $(".view");
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height + 200;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("in-view");
      } else {
        $element.removeClass("in-view");
      }
    });
  }

  $window.on("scroll resize", check_if_in_view);
  $window.trigger("scroll", check_if_in_view);
  $window.on("scroll resize", circleparalax);

  function circleparalax() {
    $(".circles").each(function (index) {
      var scrolled = $(window).scrollTop();

      var speed = $(this).parent(".paralax").attr("data-speed");
      var element_top_position = $(this).offset().top;
      var islem = ((element_top_position - scrolled) * speed) / 100;

      console.log(scrolled, speed, islem, $(this));

      TweenMax.to($(this), 0.5, { y: islem });
    });
  }

  $(".works").each(function (index) {
    anime({
      targets: ".sliderpager",
      delay: 0,
      duration: 0,
      easing: "easeInOutSine",
      translateY: 0 + "px",
    });

    $("body").css("position", "fixed");

    var keys = Object.keys(worksprop);
    var last = keys[keys.length - 1];

    $(".titleanim.active").text(Object.values(worksprop)[0].name);
    $(".bgactive .bgfix").css(
      "background-image",
      "url(" + Object.values(worksprop)[0].backgroundimagerul + ")"
    );

    $(".bgafter .bgfix").css(
      "background-image",
      "url(" + Object.values(worksprop)[1].backgroundimagerul + ")"
    );

    $("#detail").click(function () {
      if ($(window).width() >= 600) {
        var myclass2;
        var ccx2;
        var ccy2;
        var randomspeed;
        var r;

        function randomIntFromInterval2(min, max) {
          // min and max included
          return Math.floor(Math.random() * (max - min + 1) + min);
        }

        for (r = 0; r < $(".circlees").length; r++) {
          ccx2 = randomIntFromInterval2(-3000, 3000);
          ccy2 = randomIntFromInterval2(-400, 1000);
          randomspeed = randomIntFromInterval2(1000, 2000);
          myclass2 = $(".circlees")[r];

          anime({
            targets: $(".circlees")[r],
            duration: randomspeed,
            easing: "easeInOutSine",
            cx: ccx2,
            cy: ccy2,
            complete: function () {},
          });
          $(".img").addClass("acik");
        }
      }

      var htmldetail = "";
      var links;
      var titles;
      var fontpath;
      var colorconcepts;
      var coklu = false;

      $("#content").unbind(
        "touchstart touchmove scroll mousedown wheel DOMMouseScroll mousewheel"
      );

      var key = Object.keys(worksprop)[page - 1];
      var arrmock = [];
      var arrmobile = [];
      var arrlogo = [];

      if (
        Object.values(Object.values(worksprop)[page - 1].category).length > 1
      ) {
        coklu = true;
        console.log(coklu);
      } else {
        coklu = false;
        console.log(coklu);
      }
      if (worksprop[key].mobile != null) {
        var j;
        for (
          j = 0;
          j < Object.values(Object.values(worksprop)[page - 1].mobile).length;
          j++
        ) {
          arrmock.push(
            Object.values(Object.values(worksprop)[page - 1].mobile)[j].link
          );
        }
      }

      var i;
      for (
        i = 0;
        i < Object.values(Object.values(worksprop)[page - 1].detail).length;
        i++
      ) {
        links = Object.values(
          Object.values(Object.values(worksprop)[page - 1].detail)[i].link
        );

        titles = Object.values(
          Object.values(Object.values(worksprop)[page - 1].detail)[i].title
        );
        if (coklu) {
          if (
            Object.values(Object.values(worksprop)[page - 1].detail)[i].type ==
            "mobile"
          ) {
            arrmobile.push(
              Object.values(
                Object.values(Object.values(worksprop)[page - 1].detail)[i].link
              )
            );
          }
          if (
            Object.values(Object.values(worksprop)[page - 1].detail)[i].type ==
            "web"
          ) {
            if (i == 0) {
              htmldetail +=
                '<div class="workspart "><div class="container"><h3 class="titleee">' +
                titles +
                '</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' +
                titles +
                '</text></svg><div class="imgholder trans"><img src="' +
                links +
                '"></div></div></div>';
            } else {
              if (i & 1) {
                htmldetail +=
                  '<div class="workspart cift right"><div class="container"><h3 class="titleee">' +
                  titles +
                  '</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' +
                  titles +
                  '</text></svg><div class="imgholder trans"><img src="' +
                  links +
                  '"></div></div></div>';
              } else {
                htmldetail +=
                  '<div class="workspart cift left"><div class="container"><h3 class="titleee">' +
                  titles +
                  '</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' +
                  titles +
                  '</text></svg><div class="imgholder trans"><img src="' +
                  links +
                  '"></div></div></div>';
              }
              0;
            }
          }
        } else {
          if (i == 0) {
            htmldetail +=
              '<div class="workspart "><div class="container"><h3 class="titleee">' +
              titles +
              '</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' +
              titles +
              '</text></svg><div class="imgholder trans"><img src="' +
              links +
              '"></div></div></div>';
          } else {
            if (i & 1) {
              htmldetail +=
                '<div class="workspart cift right"><div class="container"><h3 class="titleee">' +
                titles +
                '</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' +
                titles +
                '</text></svg><div class="imgholder trans"><img src="' +
                links +
                '"></div></div></div>';
            } else {
              htmldetail +=
                '<div class="workspart cift left"><div class="container"><h3 class="titleee">' +
                titles +
                '</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' +
                titles +
                '</text></svg><div class="imgholder trans"><img src="' +
                links +
                '"></div></div></div>';
            }
          }
        }
      }
      if (worksprop[key].mobile != null) {
        htmldetail +=
          '<div class="workspart nopad"><img src="' + arrmock[0] + '"></div>';
      }
      if (coklu) {
        htmldetail +=
          '<div class="workspart mobile"><div class="container"><h3 class="titleee">MOBILE</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">MOBILE</text></svg><div class="centerence">';
        var m;
        for (m = 0; m < arrmobile.length; m++) {
          htmldetail +=
            '<div class="imgholder trans"><img src="' +
            arrmobile[m] +
            '"></div>';
        }
      }
      htmldetail += "</div></div></div></div>";
      fontpath = Object.values(Object.values(worksprop)[page - 1].font);
      htmldetail +=
        '<div class="workspart fonts" style="background-color:' +
        Object.values(Object.values(worksprop))[page - 1].color +
        '"><div class="container"><h3 class="titleee">FONTS</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">FONTS</text></svg><div class="imgholder trans"><img src="' +
        fontpath +
        '"></div></div></div>';

      htmldetail +=
        '<div class="workspart"><div class="container"><h3 class="titleee">COLOR CONCEPT</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">COLOR CONCEPT</text></svg><div class="imgholder trans"><ul class="colorlist">';

      var k;
      for (
        k = 0;
        k <
        Object.values(Object.values(worksprop)[page - 1].colorconsept).length;
        k++
      ) {
        colorconcepts = Object.values(
          Object.values(worksprop)[page - 1].colorconsept
        )[k];
        htmldetail +=
          '<li><span class="box" style="background-color:' +
          colorconcepts +
          '"></span><span class="colorhex" style="color:' +
          colorconcepts +
          '">' +
          colorconcepts +
          "</span></li>";
      }
      htmldetail += "</ul></div></div></div>";
      console.log(htmldetail);

      if (worksprop[key].icon != null) {
        var icon = Object.values(Object.values(worksprop)[page - 1].icon);
        htmldetail +=
          '<div class="workspart nopad iconic"><div class="container"><h3 class="titleee">ICON</h3><svg class="animtext"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">ICON</text></svg><div class="imgholder trans"><img src="' +
          icon[0] +
          '"></div></div></div>';
      }
      $(".cbp-l-project-container").append(htmldetail);

      $(".buttoncover").css("opacity", "0");
      $("#mask g").css("opacity", "0");
      $(".leftinfo").toggleClass("anims");
      setTimeout(function () {
        $(".section.two .full-page").css("overflow", "auto");
        $(".top").css("top", "-100px");
        $(".section.two .full-page").css("display", "block");

        $(".section.two .full-page").scroll(function () {
          $(".animtext").each(function (index) {
            var textoo = $(this);
            var distance = $(this).offset().top - $(window).height() / 2;

            $(this).css("transform", "translateX(" + distance + "px)");
          });
        });

        if ($(window).width() >= 600) {
          $(".leftinfo").css("position", "absolute");
          anime({
            targets: ".leftinfo",
            delay: 0,
            duration: 0.5,
            easing: "easeInOutSine",
            translateX: "-50%",
            translateY: "-50%",
            left: "50%",
            top: "50%",
            position: "absolute",
            complete: function (anim) {
              $(".leftinfo").addClass("sonradan");
            },
          });
        }

        setTimeout(function () {
          $(".imageslider").css("position", "static");
          $(".closeback").css("top", "20px");

          $(".mouse").removeClass("black");
          $(".mouse").removeClass("geldi");
          $(".detailspage").css("display", "block");
          setTimeout(function () {}, 500);
        }, 500);
      }, 500);
    });
    $(".closeback").click(function () {
      var ts;
      $("#content").bind("touchstart", function (e) {
        if (started == true) {
          return;
        }
        ts = e.originalEvent.touches[0].clientY;
      });

      $("#content").bind("touchmove", function (e) {
        if (started == true) {
          return;
        }
        var te = e.originalEvent.changedTouches[0].clientY;
        if (ts > te) {
          upside++;
          if (upside >= 1) {
            changepageup();
          }
        } else {
          downside++;
          if (downside >= 1) {
            changepagedown();
          }
        }
      });

      $(".section.two .fullpager").animate(
        {
          scrollTop: $(".section.two .fullpager").offset().top,
        },
        300
      );
      setTimeout(function () {
        $("#content").bind("scroll mousedown wheel DOMMouseScroll mousewheel");

        $("#content").on(
          "scroll mousedown wheel DOMMouseScroll mousewheel",
          function (event) {
            var inittext = [];

            if (started == true) {
              return;
            }
            var $this = $(this),
              scrollTop = this.scrollTop,
              scrollHeight = this.scrollHeight,
              height = $this.innerHeight(),
              delta = -1 * event.originalEvent.deltaY,
              up = delta > 0;

            if (!up && -delta > scrollHeight - height - scrollTop) {
              upside++;

              if (upside >= 1) {
                changepageup();
                animcircles(page);
              }
            } else if (up && delta > scrollTop) {
              downside++;

              if (downside >= 1) {
                changepagedown();
                animcircles(page);
              }
            }
          }
        );

        $(".imageslider").css("position", "relative");
        $(".closeback").css("top", "-120px");

        if ($(window).width() >= 600) {
          anime({
            targets: ".leftinfo",
            delay: 0,
            duration: 0.5,
            easing: "easeInOutSine",
            translateX: "0%",
            translateY: "0%",
            left: "0%",
            top: "0%",
            position: "absolute",
            complete: function (anim) {
              $(".leftinfo").removeClass("sonradan");

              $(".mouse").removeClass("geldi");
              $(".mouse").addClass("black");
            },
          });
        }
        $(".mouse").toggleClass("geldi");
        $(".detailspage").css("display", "none");

        $(".section.two .full-page").scroll(function () {
          $(".animtext").each(function (index) {
            var textoo = $(this);
            var distance = $(this).offset().top - $(window).height() / 2;

            $(this).css("transform", "translateX(" + distance + "px)");
          });
        });

        if ($(window).width() >= 600) {
          animcircles(page);
        }
        setTimeout(function () {
          $(".img").removeClass("acik");
          $(".leftinfo").toggleClass("anims");
          $(".leftinfo").removeClass("sonradan");

          setTimeout(function () {
            $(".buttoncover").css("opacity", "1");

            $(".section.two .full-page").css("overflow", "hidden");
            $(".top").css("top", "0px");
            $(".section.two .full-page").css("display", "flex");
            $("#mask g").css("opacity", "1");
            $(".cbp-l-project-container").empty();
          }, 500);
        }, 500);
      }, 500);
    });

    var k;
    var circlehtml = "";
    var currentPoint;

    circlehtml +=
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"   viewBox="-50 -180 1255 1000" id="svganim" preserveAspectRatio="xMidYMid meet" style="overflow:visible">';

    for (k = 0; k < 500; k++) {
      circlehtml +=
        '<circle class="circlees" cx="' +
        bulut[k].cx +
        '" cy="' +
        bulut[k].cy +
        '" r="4"/>';
    }

    circlehtml += "</svg>";
    $(".img").append(circlehtml);

    var portoinit = false;
    function makeNewPosition() {
      // Get viewport dimensions (remove the dimension of the div)
      var h = $(".imageslider").height() - 50;
      var w = $(".imageslider").width() - 50;

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

      return [nh, nw];
    }
    var svg = $("#svganim");
    function animateDiv(
      myclass,
      ccx,
      ccy,
      vievboxesx,
      vievboxesy,
      viewBoxeswidth,
      viewBoxesheight
    ) {
      var viewBoxesxx = vievboxesx;
      var viewBoxesyy = vievboxesy;
      var viewBoxeswidthh = viewBoxeswidth;
      var viewBoxesheightt = viewBoxesheight;

      var newq = makeNewPosition();

      TweenMax.to(svg, 1, {
        attr: {
          viewBox:
            viewBoxesxx +
            " " +
            viewBoxesyy +
            " " +
            viewBoxeswidthh +
            " " +
            viewBoxesheightt,
        },
      });

      anime({
        targets: myclass,
        duration: 1000,
        easing: "easeInOutSine",
        cx: ccx,
        cy: ccy,
        complete: function () {},
      });
    }

    var lastpager = false;
    function lastpage() {
      if (!portoinit) {
        $("body").toggleClass("mobilemid");
        porto();
        portoinit = true;
      }

      page += 1;
      anime({
        targets: ".sliderpager",
        delay: 0,
        duration: 500,
        easing: "easeInOutSine",
        translateY: -window.clientHeight * 2 + "px",
      });

      lastpager = true;
      console.log(lastpager);
      return;
    }

    $(window).resize(function () {
      if (page == Object.keys(worksprop).length + 1 && lastpager) {
        anime({
          targets: ".sliderpager",
          delay: 0,
          duration: 500,
          easing: "easeInOutSine",
          translateY: -window.clientHeight * 2 + "px",
        });
      }
      if (page > 0 && page < Object.keys(worksprop).length + 1) {
        anime({
          targets: ".sliderpager",
          delay: 0,
          duration: 500,
          easing: "easeInOutSine",
          translateY: -window.clientHeight + "px",
        });
      }
    });

    function lastpagedown() {
      $("body").toggleClass("mobilemid");

      var heightw = window.clientHeight * -1;
      anime({
        targets: ".sliderpager",
        delay: 0,
        duration: 500,
        easing: "easeInOutSine",
        translateY: window.clientHeight * -1 + "px",
        complete: function (anim) {
          changepagedowner();
        },
      });

      console.log("page =", page);
      lastpager = false;
    }

    function changepagedowner() {
      page -= 1;
    }

    function changepageup() {
      started = true;

      if (page == Object.keys(worksprop).length && !lastpager) {
        page == Object.keys(worksprop).length;
        lastpage();
        $("body").removeClass("mobilemid");
      } else if (page == 0) {
        console.log("burdaaaaaaa");
        page += 1;
        anime({
          targets: ".sliderpager",
          delay: 0,
          duration: 500,
          easing: "easeInOutSine",
          translateY: [0, -window.clientHeight + "px"],
        });

        $("body").toggleClass("mobilemid");
      } else if (page > 0 && page < Object.keys(worksprop).length) {
        page += 1;

        $("<img/>")
          .attr("src", Object.values(worksprop)[page - 1].backgroundimagerul)
          .on("load", function () {
            $(this).remove(); // prevent memory leaks as @benweet suggested

            console.log("page=" + page);

            $(".bgafter").parent().remove();

            $(".mask" + (page - 1) + "bg").after(
              '<div class="mask' +
                page +
                "bg\"><div class='bgafter bgstats'><div class='bgfix'></div></div></div>"
            );
            $(".bgfix").each(function (index) {
              $(this).height(window.clientHeight);
            });
            $(".bgafter .bgfix").css(
              "background-image",
              "url(" +
                Object.values(worksprop)[page - 1].backgroundimagerul +
                ")"
            );

            TweenMax.to(".titleanim", 0.5, {
              y: 100 + "%",
              ease: Quart.easeInOut,
              onComplete: changetext,
            });
            TweenMax.to(".workspecs li span", 0.5, {
              y: 100 + "%",
              ease: Quart.easeInOut,
            });

            TweenMax.to(".titlesmall", 0.5, {
              y: 100 + "%",
              ease: Quart.easeInOut,
            });
            TweenMax.set(".bgactive", { bottom: "auto", top: "0" });

            TweenMax.set(".bgfix", { bottom: "auto", top: "0" });
            TweenMax.to(".bgactive", 0.7, {
              height: 0 + "%",
              ease: Quart.easeInOut,
            });

            TweenMax.to(".bgactive .bgfix", 1, {
              opacity: "0",
              y: "-90%",
              ease: Quart.easeInOut,
            });
            /*TweenMax.to(".rectmask",  1, {fill:Object.values(worksprop)[page-1].color,ease:Quart.easeInOut})*/
          });

        function changetext() {
          /*$(".imageslider .img img").attr("src", Object.values(worksprop)[page-1].screenshotsurl);*/

          $(".bgactive").parent().remove();
          $(".bgstats").toggleClass("bgafter");
          $(".mask" + page + "bg .bgstats").addClass("bgactive");
          $(".mask" + page + "bg").after(
            '<div class="mask' +
              (page + 1) +
              "bg\"><div class='bgafter bgstats'><div class='bgfix'></div></div>"
          );

          $(".titlesmall").text(Object.values(worksprop)[page - 1].aciklama);
          $(".titleanim").text(Object.values(worksprop)[page - 1].name);
          $(".services p").text(Object.values(worksprop)[page - 1].ido);
          $(".category p").text(Object.values(worksprop)[page - 1].category);
          TweenMax.fromTo(
            ".workspecs li span",
            0.5,
            { y: -100 + "%" },
            { y: 0 + "%", ease: Quart.easeInOut }
          );
          TweenMax.fromTo(
            ".titleanim",
            0.5,
            { y: -100 + "%" },
            { y: 0 + "%", ease: Quart.easeInOut }
          );
          TweenMax.fromTo(
            ".titlesmall",
            0.5,
            { y: -100 + "%" },
            { y: 0 + "%", ease: Quart.easeInOut }
          );
        }
      }

      setTimeout(function () {
        started = false;
      }, 1000);

      console.log(upside);
      console.log("alt");
      upside = 0;
    }

    function changepagedown() {
      started = true;

      if (lastpager) {
        $("body").toggleClass("mobilemid");

        if ($(".thirdcont .full-page").scrollTop() == 0) {
          lastpagedown();
        }
        $("body").toggleClass("mobilemid");
      }

      if (page == 1) {
        $("body").toggleClass("mobilemid");

        page -= 1;
        anime({
          targets: ".sliderpager",
          delay: 0,
          duration: 500,
          easing: "easeInOutSine",
          translateY: 0 + "px",
        });

        console.log(page);
      } else if (page > 1 && page <= Object.keys(worksprop).length) {
        $(".bgfix").each(function (index) {
          $(this).height(window.clientHeight);
        });
        page -= 1;
        console.log("page=" + page);

        $(".bgafter").parent().remove();

        $(".mask" + (page + 1) + "bg").after(
          '<div class="mask' +
            page +
            "bg\"><div class='bgafter bgstats'><div class='bgfix'></div></div></div>"
        );
        $(".bgfix").each(function (index) {
          $(this).height(window.clientHeight);
        });
        $(".bgafter .bgfix").css(
          "background-image",
          "url(" + Object.values(worksprop)[page - 1].backgroundimagerul + ")"
        );

        TweenMax.to(".titleanim", 0.5, {
          y: -100 + "%",
          ease: Quart.easeInOut,
          onComplete: changetext,
        });

        TweenMax.to(".workspecs li span", 0.5, {
          y: -100 + "%",
          ease: Quart.easeInOut,
        });

        TweenMax.to(".titlesmall", 0.5, {
          y: -100 + "%",
          ease: Quart.easeInOut,
        });

        TweenMax.set(".bgactive", { bottom: "0", top: "auto" });
        TweenMax.set(".bgfix", { bottom: "0", top: "auto" });
        TweenMax.to(".bgactive", 0.7, {
          height: 0 + "%",
          ease: Quart.easeInOut,
        });
        /*TweenMax.to(".rectmask",  1, {fill:Object.values(worksprop)[page-1].color,ease:Quart.easeInOut})*/
        TweenMax.to(".bgactive .bgfix", 1, {
          opacity: "0",
          y: "90%",
          ease: Quart.easeInOut,
        });

        function changetext() {
          /* $(".imageslider .img img").attr("src", Object.values(worksprop)[page-1].screenshotsurl);*/

          $(".bgactive").parent().remove();

          $(".bgstats").toggleClass("bgafter");
          $(".mask" + page + "bg .bgstats").addClass("bgactive");

          $(".mask" + page + "bg").after(
            '<div class="mask' +
              (page - 1) +
              "bg\"><div class='bgafter bgstats'><div class='bgfix'></div></div></div>"
          );

          $(".titleanim").text(Object.values(worksprop)[page - 1].name);
          $(".titlesmall").text(Object.values(worksprop)[page - 1].aciklama);
          $(".services p").text(Object.values(worksprop)[page - 1].ido);
          $(".category p").text(Object.values(worksprop)[page - 1].category);

          TweenMax.fromTo(
            ".titleanim",
            0.5,
            { y: 100 + "%" },
            { y: 0 + "%", ease: Quart.easeInOut }
          );
          TweenMax.fromTo(
            ".titlesmall",
            0.5,
            { y: 100 + "%" },
            { y: 0 + "%", ease: Quart.easeInOut }
          );
          TweenMax.fromTo(
            ".workspecs li span",
            0.5,
            { y: 100 + "%" },
            { y: 0 + "%", ease: Quart.easeInOut }
          );
        }
      }

      setTimeout(function () {
        started = false;
      }, 1000);

      console.log("üst");

      console.log(downside);
      downside = 0;
    }

    $("#content").on(
      "scroll mousedown wheel DOMMouseScroll mousewheel",
      function (event) {
        var inittext = [];

        if (started == true) {
          return;
        }
        var $this = $(this),
          scrollTop = this.scrollTop,
          scrollHeight = this.scrollHeight,
          height = $this.innerHeight(),
          delta = -1 * event.originalEvent.deltaY,
          up = delta > 0;

        if (!up && -delta > scrollHeight - height - scrollTop) {
          upside++;

          if (upside >= 1) {
            changepageup();

            if (page > 1 && !lastpager) {
              animcircles(page);
            }
          }
        } else if (up && delta > scrollTop) {
          downside++;

          if (downside >= 1) {
            changepagedown();
            animcircles(page);
          }
        }
      }
    );

    function animcircles(num) {
      var k;
      for (k = 0; k < 500; k++) {
        if (page == 1) {
          animateDiv(
            $(".circlees")[k],
            bulut[k].cx,
            bulut[k].cy,
            -50,
            -180,
            1255,
            1000
          );
        } else if (page == 2) {
          animateDiv(
            $(".circlees")[k],
            sepet[k].cx,
            sepet[k].cy,
            -100,
            -80,
            1255,
            1100
          );
        } else if (page == 3) {
          animateDiv(
            $(".circlees")[k],
            ufo[k].cx,
            ufo[k].cy,
            0,
            -80,
            1255,
            1000
          );
        } else if (page == 4) {
          animateDiv(
            $(".circlees")[k],
            kosu[k].cx,
            kosu[k].cy,
            0,
            -80,
            955,
            1200
          );
        } else if (page == 5) {
          animateDiv(
            $(".circlees")[k],
            ucak[k].cx,
            ucak[k].cy,
            0,
            -280,
            1655,
            1100
          );
        } else if (page == 6) {
          animateDiv(
            $(".circlees")[k],
            elma[k].cx,
            elma[k].cy,
            0,
            -50,
            1055,
            1200
          );
        }
      }
    }

    $(".thirdcont .full-page").scroll(function () {
      if ($(".thirdcont .full-page").scrollTop() <= 50) {
        $(".top").removeClass("topbg");
      }

      if ($(".thirdcont .full-page").scrollTop() >= 50) {
        $(".top").addClass("topbg");
      }
    });

    var ts;
    $("#content").bind("touchstart", function (e) {
      ts = e.originalEvent.touches[0].clientY;
    });

    $("#content").bind("touchmove", function (e) {
      var te = e.originalEvent.changedTouches[0].clientY;

      if (started == true) {
        return;
      }
      if (ts > te) {
        upside++;
        if (upside >= 1) {
          changepageup();
        }
      } else {
        downside++;
        if (downside >= 1) {
          changepagedown();
        }
      }
    });

    $(document).keydown(function (e) {
      var key = e.which;

      console.log(key);
      if (key == 38) {
        downside++;
        changepagedown();
      }
      if (key == 40) {
        upside++;

        changepageup();
      }
    });
  });

  function disableScroll() {
    if (window.addEventListener)
      // older FF
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  $(document).on("mousemove touch", function (e) {
    if ($("body").hasClass("home")) {
      magnetize(".dev_circle1", e);
      magnetize(".dev_circle2", e);
      magnetize(".dev_circle3", e);
      magnetize(".dev_circle4", e);
      magnetize(".dev_circle5", e);
      magnetize(".dev_circle6", e);
      magnetize(".dev_circle7", e);
      magnetize(".des_circle1", e);
      magnetize(".des_circle2", e);
      magnetize(".des_circle3", e);
      magnetize(".des_circle4", e);
      magnetize(".des_circle5", e);
      magnetize(".des_circle6", e);
    }

    magnetize(".hamburger-cont", e);
  });

  function magnetize(el, e) {
    var mX = e.pageX,
      mY = e.pageY;
    const item = $(el);

    const customDist = item.data("dist") * 20 || 120;
    const centerX = item.offset().left + item.width() / 2;
    const centerY = item.offset().top + item.height() / 2;

    var deltaX = Math.floor(centerX - mX) * -0.45;
    var deltaY = Math.floor(centerY - mY) * -0.45;

    var distance = calculateDistance(item, mX, mY);

    if (distance < customDist) {
      TweenMax.to(item, 0.5, { y: deltaY, x: deltaX, scale: 1.1 });
      item.addClass("magnet");
    } else {
      TweenMax.to(item, 0.6, { y: 0, x: 0, scale: 1 });
      item.removeClass("magnet");
    }
  }

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left + elem.width() / 2), 2) +
          Math.pow(mouseY - (elem.offset().top + elem.height() / 2), 2)
      )
    );
  }
  function move() {
    count++;
    if (!loaded) {
      x = windowW / 2 + Math.sin(count / 20) * (windowW / 4);
      y = windowH / 2;
    }
    var boxCenter = [
      dot.offset().left + dot.width() / 2,
      dot.offset().top + dot.height() / 2,
    ];

    var angle =
      Math.atan2(x - boxCenter[0], -(y - boxCenter[1])) * (180 / Math.PI);
    var speedX = Math.abs(x - currentX),
      speedY = Math.abs(y - currentY),
      speed = Math.sqrt(speedX * speedX + speedY * speedY) * -1;

    if (speed > -1) {
      speed = 0;
    }

    var scale = speed / 500 + 1;
    var tailPos = speed / 10 + 50;

    if (tailPos < 0) {
      tailPos = 0;
    } else if (tailPos > 40) {
      tailPos = 50;
    }

    if (scale < 0.2) {
      scale = 0.2;
    }

    currentX += (x - currentX) / animationSpeed;
    currentY += (y - currentY) / animationSpeed;

    if (hovered) {
      angle = 0;
      scale = 1;
      tailPos = 50;

      if (Math.abs(x - currentX) < 10 && Math.abs(y - currentY) < 10) {
        if (!pulsed) {
          activeButton.addClass("pulse");
          pulsed = true;
        }
      }
    }

    dot.css({
      transform:
        "translate(" +
        (currentX - 0) +
        "px, " +
        (currentY - 0) +
        "px) rotate(" +
        angle +
        "deg) scaleX(" +
        scale +
        ")",
    });

    path.attr({
      d:
        "M75,100 C88.8071187,100 100,88.8071187 100,75 C100,61.1928813 88.8071187,50 75,50 C61.1928813,50 50,61.1928813  " +
        tailPos +
        ",75 C50,88.8071187 61.1928813,100 75,100 Z",
    });

    window.requestAnimationFrame(move);
  }

  window.requestAnimationFrame(move);

  $(".button").on("mouseenter", function () {
    hovered = true;
    pulsed = false;
    activeButton = $(this);
    x = $(this).offset().left + $(this).width() / 2;
    y = $(this).offset().top + $(this).height() / 2;

    dot.addClass("button-hover");

    $(this).on("mouseleave", function () {
      hovered = false;
      dot.removeClass("button-hover");
      $(this).removeClass("pulse");
    });
  });

  /*$(document).ready(function() {
    $('body').mousemove(function(event) {
    		requestAnimationFrame( function() {
          cx = Math.ceil($('body').width() / 2.0);
          cy = Math.ceil($('body').height() / 2.0);
          dx = event.pageX - cx;
          dy = event.pageY - cy;

          tiltx = (dy / cy);
          tilty = - (dx / cx);
          radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
          degree = (radius * 20);
          TweenLite.set(".brain2", {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});
          TweenLite.set(".brain1", {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});
      });
    });
});*/

  $(".contentlink").each(function (index) {
    $(this).click(function (event) {
      event.stopPropagation();
      var navclass = $(this).parent().attr("class").split("_").shift();

      $(this).parent().removeClass("anim");
      $(this).children(".name").css("color", "#fff");
      var separete = 0;

      $(".anim").each(function (index) {
        separete = index * 100;
        var $element = $(this);
        var total = $(".anim").length;
        anime({
          targets: $element[0],
          delay: separete,
          duration: 1100,
          easing: "easeInOutSine",
          translateX: "-100%",
          opacity: "0",
          complete: function (anim) {
            if (index === total - 1) {
              showloader2(navclass);
            }
          },
        });
      });
    });
  });

  $(".parallax").each(function (index) {
    if ($(window).width() >= 600) {
      $(this).mouseenter(function () {
        $(".specs2 .num").text(0);
        var skillhoveritem = $(this).find("span").text().toLowerCase();

        if ($("body").hasClass("science")) {
          $(".specs2").css("display", "block");
          for (i = 0; i < Object.keys(skills).length; i++) {
            var obj = Object.values(skills)[i].name;

            if (obj == skillhoveritem) {
              $(".text1").text(obj.toString().toUpperCase());
              $(".specs2 .years h1 span").text(Object.values(skills)[i].year);

              TweenMax.to($(".specs2"), 0.5, {
                opacity: 1,
                onComplete: skillanim,
              });

              var numknow = Number(Object.values(skills)[i].know);

              function skillanim() {
                var tl3 = new TimelineLite();
                var tl4 = new TimelineLite();
                tl3.to(".text1", 0.5, {
                  strokeDashoffset: "0",
                  fillOpacity: "1",
                  onComplete: percenter,
                });
                TweenMax.to(".pt-line", 1, { strokeDashoffset: "0" });
                tl4.to(".skillsamount2", 0.5, { opacity: "1" });
                tl3.to(".years2", 0.5, { opacity: "1" });

                function percenter() {
                  TweenMax.fromTo(
                    ".percent2",
                    1,
                    { css: { left: "50px" } },
                    { css: { left: numknow + "%" } }
                  );
                  TweenMax.fromTo(
                    ".fillbar2",
                    1,
                    { css: { width: "0" } },
                    { css: { width: numknow + "%" } }
                  );
                  var counter = { score: 0 };
                  numknowstr = Number(numknow);

                  TweenMax.to(counter, 1, {
                    score: numknowstr,
                    roundProps: "score",
                    onUpdate: updateHandler,
                    ease: Linear.easeNone,
                  });

                  function updateHandler() {
                    console.log(counter.score);
                    $(".specs2 .num").text(counter.score);
                  }
                }
              }

              break;
            }
          }
        } else {
          $(".specs1").css("display", "block");

          $(".specs1 .num").text(0);

          for (i = 0; i < Object.keys(skills).length; i++) {
            var obj = Object.values(skills)[i].name;

            if (obj == skillhoveritem) {
              $(".text2").text(obj.toString().toUpperCase());
              $(".specs1 .years h1 span").text(Object.values(skills)[i].year);
              $(".specs1 .text2").css("color", Object.values(skills)[i].color);
              $(".specs1 .fillbar").css(
                "background-color",
                Object.values(skills)[i].color
              );
              $(".specs1 .percent").css(
                "color",
                Object.values(skills)[i].color
              );

              TweenMax.to($(".specs1"), 0.5, {
                opacity: 1,
                onComplete: skillanim,
              });

              var numknow = Number(Object.values(skills)[i].know);

              function skillanim() {
                var tl3 = new TimelineLite();
                var tl4 = new TimelineLite();
                tl3.to(".text", 0.5, { opacity: 1, onComplete: percenter });

                tl4.to(".skillsamount", 0.5, { opacity: "1" });
                tl3.to(".years", 0.5, { opacity: "1" });

                function percenter() {
                  TweenMax.fromTo(
                    ".percent",
                    1,
                    { css: { left: "50px" } },
                    { css: { left: numknow + "%" } }
                  );
                  TweenMax.fromTo(
                    ".fillbar",
                    1,
                    { css: { width: "0" } },
                    { css: { width: numknow + "%" } }
                  );
                  var counter = { score: 0 };
                  numknowstr = Number(numknow);

                  TweenMax.to(counter, 1, {
                    score: numknowstr,
                    roundProps: "score",
                    onUpdate: updateHandler,
                    ease: Linear.easeNone,
                  });

                  function updateHandler() {
                    console.log(counter.score);
                    $(".specs1 .num").text(counter.score);
                  }
                }
              }

              break;
            }
          }

          TweenMax.set(".parallax", { opacity: 0 });
          TweenMax.to($(this), 0.5, { opacity: 1 });
        }
      });

      $(this).mouseleave(function () {
        TweenMax.set(".parallax", { opacity: 1 });
        $(".num").text(0);
        if ($("body").hasClass("science")) {
          TweenMax.to($(".specs2"), 0.5, {
            opacity: 0,
            onComplete: skillanimreverse,
          });
        }
        if ($("body").hasClass("art")) {
          TweenMax.to($(".specs1"), 0.5, {
            opacity: 0,
            onComplete: skillanimreverse,
          });
        }

        TweenMax.set(".pt-line", { strokeDashoffset: "700" });
        TweenMax.set(".text1", { strokeDashoffset: "300" });

        TweenMax.set(".skillsamount", { opacity: "0" });
        TweenMax.set(".years", { opacity: "0" });
        TweenMax.set(".percent", { left: "50px" });
        TweenMax.set(".fillbar", { width: "0" });

        function skillanimreverse() {
          $(".backspecs").css("display", "none");
        }
      });
    }
  });
  $(".input").blur(function () {
    if ($(this).val()) {
      $(this).parent(".label-line").addClass("active checked");
    } else {
      $(this).parent(".label-line").removeClass("active checked");
      //alert('no');
    }
  });

  $(".label-line").click(function () {
    $(this).addClass("active");
    if ($(".label-line").hasClass("checked")) {
    } else {
      $(".label-line").removeClass("checked");
    }
    /*$(this).children('.span').addClass('active');
			$(this).children('.label').addClass('active');*/
  });

  $(".form-right").click(function (e) {
    if ($("#name").val() && $("#mail").val() && $("#text").val()) {
      // rimuovo la classe 'error'
      $(".form-right").removeClass("error");
      // genero l'effetto tocco material
      var parent, ink, d, x, y;
      parent = $(this);
      //creo elemento .ink se non esiste
      if (parent.find(".ink").length == 0)
        parent.prepend("<span class='ink'></span>");

      ink = parent.find(".ink");
      //incase of quick double clicks stop the previous animation
      //ink.removeClass("animate");

      //setto dimensioni di .ink
      if (!ink.height() && !ink.width()) {
        //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({ height: d, width: d });
      }

      //get click coordinates
      //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
      x = e.pageX - parent.offset().left - ink.width() / 2;
      y = e.pageY - parent.offset().top - ink.height() / 2;

      //set the position and add class .animate
      ink.css({ top: y + "px", left: x + "px" }).addClass("animate");
      $(".message-sent").delay(500).fadeIn().addClass("active");
      $(".close-form").fadeOut();
      setTimeout(function () {
        $(".form-container").addClass("close");
      }, 2000);
      //$('.form-container').delay(3000).fadeOut();
      setTimeout(function () {
        $(".mesajlightbox").addClass("close-all");
        $(".mesajlightbox").fadeOut();
        $(".message-sent").fadeOut();
      }, 3000);
    } else {
      $(".form-right").addClass("error");
      $(".mesajlightbox").prepend(
        "<span class='alert'>Lütfen Tüm alanları doldurun!</span>"
      );
      $(".alert").fadeIn().delay(1500).fadeOut();
      setTimeout(function () {
        $(".form-right").removeClass("error");
      }, 3000);
    }
  });
}

function porto() {
  (function ($, window, document, undefined) {
    "use strict";

    // init cubeportfolio
    $("#js-grid-juicy-projects").cubeportfolio({
      filters: "#js-filters-juicy-projects",
      loadMore: "#js-loadMore-juicy-projects",
      loadMoreAction: "click",
      layoutMode: "grid",
      defaultFilter: "*",
      animationType: "quicksand",
      gapHorizontal: 35,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [
        {
          width: 1500,
          cols: 3,
        },
        {
          width: 1100,
          cols: 3,
        },
        {
          width: 800,
          cols: 2,
        },
        {
          width: 480,
          cols: 2,
        },
        {
          width: 320,
          cols: 1,
        },
      ],
      caption: "overlayBottomReveal",
      displayType: "sequentially",
      displayTypeSpeed: 80,

      // lightbox
      lightboxDelegate: ".cbp-lightbox",
      lightboxGallery: true,
      lightboxTitleSrc: "data-title",
      lightboxCounter:
        '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

      // singlePage popup
      singlePageDelegate: ".cbp-singlePage",
      singlePageDeeplinking: true,
      singlePageStickyNavigation: true,
      singlePageCounter:
        '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
      singlePageCallback: function (url, element) {
        animtitle();

        // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        var t = this;

        $.ajax({
          url: url,
          type: "GET",
          dataType: "html",
          timeout: 30000,
        })
          .done(function (result) {
            t.updateSinglePage(result);
          })
          .fail(function () {
            t.updateSinglePage("AJAX Error! Please refresh the page!");
          });
      },
    });
  })(jQuery, window, document);
}

function animtitle() {
  $(".cbp-popup-wrap").scroll(function () {
    $(".animtext").each(function (index) {
      var textoo = $(this);
      var distance = $(this).offset().top - $(window).height() / 2;

      $(this).css("transform", "translateX(" + distance + "px)");
    });
  });
}

var lastScrollTop = 0;
var page = $(window);
var upside = 0;
var downside = 0;
var started = false;
var page = 0;
