$(function () {
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;
  let con04 = $("#con04").offset().top;
  console.log(con01, con02, con03, con04);

  /*SCROLL*/
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);
    if (scroll >= con02) {
      $("header").addClass("on");
    }
    if (scroll >= con01 && scroll < con02) {
      // console.log("con01입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
    } else if (scroll >= con02 && scroll < con03) {
      // console.log("con02입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("#con02").addClass("on");
    } else if (scroll >= con03 && scroll < con04) {
      // console.log("con03입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("#con03").addClass("on");
    } else {
      // console.log("con04입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
      $("#con04").addClass("on");
    }
  });

  /*HEADER*/
  $("header  .leftMenu li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section")
      .eq(i + 1)
      .offset().top;
    console.log(target);
    $("html, body").animate({ scrollTop: target });
  });

  /*SIDE MENU*/
  $("header .burger .open").on("click", function () {
    $("#menu").addClass("active");
    $(".open").hide();
    $(".close").show();
    $("#container").addClass("active");
    // $("#container").animate({ opacity: "50%" });
  });

  $("header .burger .close").on("click", function () {
    $("#menu").removeClass("active");
    $(".close").hide();
    $(".open").show();
    $("#container").removeClass("active");
    // $("#container").animate({ opacity: "100%" });
  });

  // $("#menu li").on("click", function () {
  //   let i = $(this).index();
  //   $("#navi li").removeClass("on");
  //   $("#navi li").eq(i).addClass("on");
  //   let target = $("section")
  //     .eq(i + 1)
  //     .offset().top;
  //   console.log(target);
  //   $("html, body").animate({ scrollTop: target });
  // });

  $("#menu").on("click", "li a", function (e) {
    e.preventDefault();
    // console.log("✅ 메뉴 클릭됨 (a 태그):", $(this).parent().index());
  });
  $("#menu").on("click", "li", function () {
    let i = $(this).index();

    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section")
      .eq(i + 1)
      .offset().top;
    console.log(target);
    $("html, body").animate({ scrollTop: target });
    $("#menu").removeClass("active");
    $(".close").hide();
    $(".open").show();
    $("#container").removeClass("active");
  });

  /*NAVI*/
  $("#navi li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    // console.log(target);
    $("html, body").animate({ scrollTop: target });
  });

  /*SWIPER*/
  $(function () {
    let total = $(".panel li").length;
    console.log(total);

    $(".navi li:nth-child(2) span:last-child").text(total);

    let i = 0;

    let stop;

    start();

    function fade() {
      $(".panel li").fadeOut();
      $(".panel li").eq(i).fadeIn();
      $(".navi li:nth-child(2) span:first-child").text(i + 1);

      let bar = 33.33333 * (i + 1);
      $(".bar div").animate({ width: `${bar}%` });
    }

    function start() {
      stop = setInterval(function () {
        if (i == total - 1) {
          i = 0;
        } else {
          i++;
        }
        fade();
      }, 5000);
    }

    $(".next").on("click", function () {
      clearInterval(stop);
      if (i == total - 1) {
        i = 0; /*i가 0이 되면 다시 처음으로 돌아감*/
      } else {
        i++; /*i가 0과 같아지기 전까지 1씩 증가*/
      }
      fade();

      start(); /*다시 움직이게 함수 호출*/
    });

    $(".prev").on("click", function () {
      clearInterval(stop);
      if (i == 0) {
        i = total - 1; /*i가 0이 되면 다시 처음으로 돌아감*/
      } else {
        i--; /*i가 0과 같아지기 전까지 1씩 증가*/
      }
      fade();
      start(); /*다시 움직이게 함수 호출*/
    });

    // $(".navi li").on("click", function () {
    //   clearInterval(stop);
    //   i = $(this).index();

    //   start(); /*다시 움직이게 함수 호출*/
    // });
  });
  /*변수이름을 괄호에 넣을 때는 따옴표 안 함*/
});
