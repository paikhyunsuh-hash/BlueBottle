$(function () {
  /*CLICK*/
  // $("header li").on("click", function () {
  //   let i = $(this).index();
  //   console.log(i);
  //   let target = $("#container section").eq(i).offset().top;
  //   console.log(target);
  //   $("html").stop().animate({ scrollTop: target });
  //   $("#navi li").removeClass("on");
  //   $("#navi li").eq(i).addClass("on");
  // });
  // /*SCROLL*/
  // let page2 = $("section#con02").offset().top;
  // console.log(page2);
  // $(window).on("scroll", function () {
  //   let sc = $(this).scrollTop();
  //   console.log(sc);
  //   if (sc >= page2) {
  //     $("section#con02 li").addClass("active");
  //   }
  // });

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
    } else if (scroll >= con02 && scroll < con04) {
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
  $("header li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    // console.log(target);
    $("html, body").animate({ scrollTop: target });
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
});
