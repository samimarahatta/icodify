$(document).ready(function () {
  //     $("nav ul li").children("ul").parent().addClass("caret")
  $(".team-wrap").slick({
    infinite: false,

    autoplay: false,
    arrows: true,
    speed: 300,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".project-slider").slick({
    infinite: false,

    autoplay: false,
    arrows: true,
    speed: 300,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  //    $(".nav-link-icon").click(function(){
  //     $(".left-menu").addClass("show-menu")
  //     $("body").addClass("no-scroll")
  //    });
  //    $(".close-btn").click(function(){
  //     $(".left-menu").removeClass("show-menu")
  //     $("body").removeClass("no-scroll")
  //    });
  //    $(".category input").focus(function(){
  //     $(".seacrh-list").addClass("show-search-list")
  //    });
  //    $(".category input").focusout(function(){
  //     $(".seacrh-list").removeClass("show-search-list")
  //    });
  //     $('.parent-menu li:has(.sub-menu)').addClass('icon');

  var _gaq = _gaq || [];
  _gaq.push(["_setAccount", "UA-36251023-1"]);
  _gaq.push(["_setDomainName", "jqueryscript.net"]);
  _gaq.push(["_trackPageview"]);

  (function () {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src =
      ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
      ".google-analytics.com/ga.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
  })();

  try {
    fetch(
      new Request(
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        { method: "HEAD", mode: "no-cors" }
      )
    )
      .then(function (response) {
        return true;
      })
      .catch(function (e) {
        var carbonScript = document.createElement("script");
        carbonScript.src =
          "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
      });
  } catch (error) {
    console.log(error);
  }

  var a = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 70) {
      //clearHeader, not clearheader - caps H
      $(".main-header").addClass("fixed");
    } else {
      $(".main-header").removeClass("fixed");
    }

    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });
});
