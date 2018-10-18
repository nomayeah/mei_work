"use strict"

//カルーセル
$("document").ready(function(){
  $('.mypattern').slick({
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 800,
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: '10%'
  });
});

/*mtop日運「すべて表示」*/
var itemHeights = [];
$(window).load(function(){
  $('.grad-item').each(function(){
    var thisHeight = $(this).height();
    itemHeights.push(thisHeight);
    $(this).addClass('is-hide');
  });
  $('.grad-item2').each(function(){
    var thisHeight = $(this).height();
    itemHeights.push(thisHeight);
    $(this).addClass('is-hide');
  });
});

$('.grad-trigger').click(function(){
  var index = $(this).index('.grad-trigger');
  var addHeight = itemHeights[index];
  $(this).fadeOut().addClass('is-show').next().animate({height: addHeight},200).removeClass('is-hide');
});

$('.grad-trigger2').click(function(){
  var index = $(this).index('.grad-trigger2');
  var addHeight = itemHeights[index] * 1.02;
  $(this).fadeOut().addClass('is-show').next().animate({height: addHeight},200).removeClass('is-hide');
});

/*mtop日運カード*/

$('#haikei1').hide();
$('#haikei2').hide();
$('#ta-result1').hide();
$('#ta-result2').hide();

  (function($) {
    $('#card-draw1').click(function(){
      $.ajax({
          type : 'GET',
          url : ' /ajax.cgi?t=read_tarot&menu_id=101&' + def_p,
          dataType: 'html',
          success: function(){
              console.log("menu_id=101リクエスト");
          }
        });
          $(this).fadeOut('slow');
          $('#js-cardList1 li:nth-child(4) img')
            .css('position','relative').css('transition','500ms').css('transform','translateY(10px)').animate({'bottom': '80px'});
          $('#js-cardList1').delay(200).queue(function() {
              $('#js-cardList1 li').not(':nth-child(4)').css('opacity','0').dequeue();;
          });
          $('#js-cardList1 ul').delay(500).queue(function() {
            $(this).fadeOut('slow').dequeue();
            $('.js-DairyContent').css('height', '400px');
          });
          $('.mt-daily__luck').delay(2000).queue(function() {
            $('#haikei1').fadeIn('slow');
            $('.js-DairyContent').css('height', '100%');
            $('#ta-result1').fadeIn('slow').dequeue();
          });
          $('.js-DairyContent .mt-daily__luck .back').delay(2500).queue(function() {
              $('.js-DairyContent .mt-daily__luck .back img').fadeIn('slow');
              $('.js-DairyContent .mt-daily__luck .back').css('transform', 'translateX(100px)').dequeue();
          });
          $('.js-DairyContent .ft-daily__luck .back').delay(2500).queue(function() {
              $('.js-DairyContent .ft-daily__luck .back img').fadeIn('slow');
              $('.js-DairyContent .ft-daily__luck .back').css('transform', 'translateX(100px)').dequeue();
          });
            //$('.card').delay(1500).queue(function() {
              //$(this).addClass('move').dequeue();
            //});
         // });
      });
    $('#card-draw2').click(function(){
      $.ajax({
          type : 'GET',
          url : ' /ajax.cgi?t=read_tarot&menu_id=102&' + def_p + '&plus1=' + _plus1,
          dataType: 'html',
          success: function(){
              console.log("menu_id=102リクエスト");
          }
        });
          $(this).fadeOut('slow');
          $('.mt-daily__coorde #js-cardList2 li:nth-child(4) img')
            .css('position','relative').css('transition','500ms').css('transform','translateY(10px)').animate({'bottom': '80px'});
          $('.mt-daily__coorde #js-cardList2').delay(200).queue(function() {
              $('.mt-daily__coorde #js-cardList2 li').not(':nth-child(4)').css('opacity','0').dequeue();;
          });
          $('.mt-daily__coorde #js-cardList2 ul').delay(500).queue(function() {
            $(this).fadeOut('slow').dequeue();
            $('.js-DairyContent').css('height', '400px');
          });
          $('.mt-daily__coorde').delay(2000).queue(function() {
            $('#haikei2').fadeIn('slow');
            $('.js-DairyContent').css('height', '100%');
            $('#ta-result2').fadeIn('slow').dequeue();
          });
          $('.js-DairyContent .mt-daily__coorde .back').delay(2500).queue(function() {
              $('.js-DairyContent .mt-daily__coorde .back img').fadeIn('slow');
              $('.js-DairyContent .mt-daily__coorde .back').css('transform', 'translateX(100px)').dequeue();
          });
      });

  })(jQuery);

/*mtop日運カードここまで*/

/*mtopTOPに戻るボタン*/
$(function(){
//   $('#js-more').on('click', function(){
//     $('#js-scrollTop').fadeIn('slow');
//   });
// });
// $(window).scroll(function (){
// var sS = $('.js-DairyTab_menu_content').offset().top;
// var sSscroll = $(window).scrollTop();
// var sSwindowHeight = $(window).height();
//   if (sSscroll < sS - sSwindowHeight + 500){
//     $('#js-scrollTop').fadeOut("slow");
//   }
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1500) {
      $('#js-scrollTop').fadeIn('slow');
    } else {
      if ($(this).scrollTop() < 500){
        $('#js-scrollTop').fadeOut("slow");
      }
    }
  });
});
/*mtopTOPに戻るボタン*/

//手作りモーダル
$(function(){
  $("#js-profModal__open").click(function(){
    $("#js-profModal__hide").removeClass('hide');
    $(this).blur();
    if($("#js-profModal__overlay")[0]) return false;
    $("body").append('<div id="js-profModal__overlay"></div>');
    $("#js-profModal__overlay").fadeIn("slow");

    centeringModalSyncer() ;
    $("#js-profModal__content").fadeIn("slow");

  	$("#js-profModal__overlay,#js-profModal__close").unbind().click(function(){
      $("#js-profModal__hide").addClass('hide');
      $("#js-profModal__content,#js-profModal__overlay").fadeOut("slow" , function(){
        $('#js-profModal__overlay').remove();
      });
    });
  });

$( window ).resize( centeringModalSyncer ) ;

  //センタリング
  function centeringModalSyncer() {

    var w = $( window ).width() ;
    var h = $( window ).height() ;

    //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var cw = $( "#js-profModal__content" ).outerWidth();
    var ch = $( "#js-profModal__content" ).outerHeight();

  //センタリングを実行
  $("#js-profModal__content").css({"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"});
  }
});


function dairyArea(e) {
  for(var i = 0; i < tabLi.length; i++ ) {
    var status = tabLi[i].dataset.menu__tab;

    if( tabLi[i] == e ) {
      tabLi[i].dataset.menu__tab = 'true';
      tabBody[i].dataset.menu__tab__body = 'true';
    } else {
      tabLi[i].dataset.menu__tab = 'false';
      tabBody[i].dataset.menu__tab__body = 'false';
    }
  }
}

var tab = document.getElementsByClassName('js-DairyTab_menu'),
      tabLi = tab[0].children,
      tabBody = document.getElementsByClassName('js-DairyTab_menu_content')[0].children;

tab[0].addEventListener('click', function(clickEvent) {
  if(clickEvent.target.dataset.menu__tab == 'false') {
    dairyArea(clickEvent.target);
  }
},false);

//ここまでタブ切り替え

var star_icon = document.getElementsByClassName("star_icon"),
    star_icon_length = star_icon.length;

  for(var i = 0 ; i < star_icon_length ; i++){

    star_icon[i].addEventListener('click', function(clickEvenIcon) {
        if(clickEvenIcon.target.dataset.menu__icon == 'false') {
          clickEvenIcon.target.dataset.menu__icon = 'true';
        }else{
          clickEvenIcon.target.dataset.menu__icon = 'false';
        }
    });
  }

//ここまで星の付け替え

var star_ulli = document.getElementById("star_data").children;
var star_ulli_span = document.querySelectorAll('[data-menu__icon]');
var finish = [];


for(var i = 0; i < star_ulli_span.length; i++){
    if(star_ulli_span[i].dataset.menu__icon == "true"){
        finish += star_ulli[i];
    }else{
        var non = star_ulli[i];
        console.log('test');
    }
};

//オススメタグにする機能
function rcm_tags(){var recommend_tags_csv = "2,3,5,7";}
//開始時に、ユーザーごとのお気に入り設定を呼んで #tagidN をONにする
function init_fav_tags(){
  var init_fav_tags_csv = "[%fav_tags_csv%]"; // 4,6,...
  var tags = init_fav_tags_csv.split(',');
  // $('#tag'+N).チェックボックスON
}

//全チェックボタンの挙動

$('#reset_checkbox').on('click', function(){
  $("input[name='all']").attr("checked",false);
});

//ここまで星タブで切り替え


function dairyTabArea(e) {
  for(var i = 0; i < dairyTabLi.length; i++ ) {
    var status = dairyTabLi[i].dataset.dairy__tab;

    if( dairyTabLi[i] == e ) {
      dairyTabLi[i].dataset.dairy__tab = 'true';
      dairyTabBody[i].dataset.dairy__body = 'true';
    } else {
      dairyTabLi[i].dataset.dairy__tab = 'false';
      dairyTabBody[i].dataset.dairy__body = 'false';
    }
  }
}

var dairyTab = document.getElementsByClassName('js-DairyTab'),
      dairyTabLi = dairyTab[0].children,
      dairyTabBody = document.getElementsByClassName('js-DairyContent')[0].children;

dairyTab[0].addEventListener('click', function(clickEvent) {
  if(clickEvent.target.dataset.dairy__tab == 'false') {
    dairyTabArea(clickEvent.target);
  }
},false);


//もっと見るボタン

$(document).ready(function(){
  //リストの総数を取得
  var n = $("#star_data li").length;
  var m = $("#star_data-hoge li").length;
  var l = $("#star_data-hogehoge li").length;
  $("p.total").text("全部で " + n + "件表示");
  //リスト15件目以降非表示
  $("#star_data li:gt(14)").hide();
  $("#star_data-hoge li:gt(14)").hide();
  $("#star_data-hogehoge li:gt(14)").hide();

  //非表示にしているリストの行数を入れておく（今回は15行目）
  var Num = 15;

  $("#searchList .js-more").click(function(){
    //クリックで10件表示
    Num +=10;
    //Num+10件目以前を表示
    $("#star_data li:lt("+Num+")").show(200);
    if(n <= Num ){
      $("#searchList .js-more").fadeOut();
    }
  });

  $("#favMenu .js-more").click(function(){
    //クリックで10件表示
    Num +=10;
    //Num+10件目以前を表示
    $("#star_data-hoge li:lt("+Num+")").show(200);
    if(m <= Num ){
      $("#favMenu .js-more").fadeOut();
    }
  });

  $("#history .js-more").click(function(){
    //クリックで10件表示
    Num +=10;
    //Num+10件目以前を表示
    $("#star_data-hogehoge li:lt("+Num+")").show(200);
    if(l <= Num ){
      $("#history .js-more").fadeOut();
    }
  });
  if( n <= 15){
    $("#searchList .js-more").hide();
  }
  if( m <= 15){
    $("#favMenu .js-more").hide();
  }
  if( l <= 15){
    $("#history .js-more").hide();
  }
});

//カテゴリ選択スライド誘導
$(function scrollHint(){
  $("#js-scrollHint, #js-cateCheck").on("click touchstart", function(){
    $("#js-scrollHint").hide();
  });
  $(".close").on("click", function(){
    $("#js-scrollHint").show();
  });
});

$(function(){
  $(window).scroll(function fadeBalloon(){
    var fadeBalloonPosition = $('.ft-discription__section.no_2').offset().top;
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scrollPosition > fadeBalloonPosition - windowHeight - 300){
      $('.ft-fixed__balloon').addClass("in");
    }else if (scrollPosition < fadeBalloonPosition - windowHeight + 10){
        $('.ft-fixed__balloon').removeClass("in");
    }

    var fadeBalloonPosition2 = $('.ft-discription__section.no_3').offset().top;
    if (scrollPosition > fadeBalloonPosition2 - windowHeight + 300){
      $('.ft-fixed__balloon').removeClass("in");
    }
  });
});
