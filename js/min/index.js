"use strict";$("document").ready(function(){$(".mypattern").slick({autoplay:!0,autoplaySpeed:2500,speed:800,dots:!0,arrows:!1,centerMode:!0,centerPadding:"10%"})});var itemHeights=[];function dairyArea(t){for(var a=0;a<tabLi.length;a++){tabLi[a].dataset.menu__tab;tabLi[a]==t?(tabLi[a].dataset.menu__tab="true",tabBody[a].dataset.menu__tab__body="true"):(tabLi[a].dataset.menu__tab="false",tabBody[a].dataset.menu__tab__body="false")}}$(window).load(function(){$(".grad-item").each(function(){var t=$(this).height();itemHeights.push(t),$(this).addClass("is-hide")}),$(".grad-item2").each(function(){var t=$(this).height();itemHeights.push(t),$(this).addClass("is-hide")})}),$(".grad-trigger").click(function(){var t=$(this).index(".grad-trigger"),a=itemHeights[t];$(this).fadeOut().addClass("is-show").next().animate({height:a},200).removeClass("is-hide")}),$(".grad-trigger2").click(function(){var t=$(this).index(".grad-trigger2"),a=1.02*itemHeights[t];$(this).fadeOut().addClass("is-show").next().animate({height:a},200).removeClass("is-hide")}),$("#haikei1").hide(),$("#haikei2").hide(),$("#ta-result1").hide(),$("#ta-result2").hide(),function(t){t("#card-draw1").click(function(){t.ajax({type:"GET",url:" /ajax.cgi?t=read_tarot&menu_id=101&"+def_p,dataType:"html",success:function(){console.log("menu_id=101リクエスト")}}),t(this).fadeOut("slow"),t("#js-cardList1 li:nth-child(4) img").css("position","relative").css("transition","500ms").css("transform","translateY(10px)").animate({bottom:"80px"}),t("#js-cardList1").delay(200).queue(function(){t("#js-cardList1 li").not(":nth-child(4)").css("opacity","0").dequeue()}),t("#js-cardList1 ul").delay(500).queue(function(){t(this).fadeOut("slow").dequeue(),t(".js-DairyContent").css("height","400px")}),t(".mt-daily__luck").delay(2e3).queue(function(){t("#haikei1").fadeIn("slow"),t(".js-DairyContent").css("height","100%"),t("#ta-result1").fadeIn("slow").dequeue()}),t(".js-DairyContent .mt-daily__luck .back").delay(2500).queue(function(){t(".js-DairyContent .mt-daily__luck .back img").fadeIn("slow"),t(".js-DairyContent .mt-daily__luck .back").css("transform","translateX(100px)").dequeue()}),t(".js-DairyContent .ft-daily__luck .back").delay(2500).queue(function(){t(".js-DairyContent .ft-daily__luck .back img").fadeIn("slow"),t(".js-DairyContent .ft-daily__luck .back").css("transform","translateX(100px)").dequeue()})}),t("#card-draw2").click(function(){t.ajax({type:"GET",url:" /ajax.cgi?t=read_tarot&menu_id=102&"+def_p+"&plus1="+_plus1,dataType:"html",success:function(){console.log("menu_id=102リクエスト")}}),t(this).fadeOut("slow"),t(".mt-daily__coorde #js-cardList2 li:nth-child(4) img").css("position","relative").css("transition","500ms").css("transform","translateY(10px)").animate({bottom:"80px"}),t(".mt-daily__coorde #js-cardList2").delay(200).queue(function(){t(".mt-daily__coorde #js-cardList2 li").not(":nth-child(4)").css("opacity","0").dequeue()}),t(".mt-daily__coorde #js-cardList2 ul").delay(500).queue(function(){t(this).fadeOut("slow").dequeue(),t(".js-DairyContent").css("height","400px")}),t(".mt-daily__coorde").delay(2e3).queue(function(){t("#haikei2").fadeIn("slow"),t(".js-DairyContent").css("height","100%"),t("#ta-result2").fadeIn("slow").dequeue()}),t(".js-DairyContent .mt-daily__coorde .back").delay(2500).queue(function(){t(".js-DairyContent .mt-daily__coorde .back img").fadeIn("slow"),t(".js-DairyContent .mt-daily__coorde .back").css("transform","translateX(100px)").dequeue()})})}(jQuery),$(function(){$(window).on("scroll",function(){1500<$(this).scrollTop()?$("#js-scrollTop").fadeIn("slow"):$(this).scrollTop()<500&&$("#js-scrollTop").fadeOut("slow")})}),$(function(){function t(){var t=$(window).width(),a=$(window).height(),e=$("#js-profModal__content").outerWidth(),i=$("#js-profModal__content").outerHeight();$("#js-profModal__content").css({left:(t-e)/2+"px",top:(a-i)/2+"px"})}$("#js-profModal__open").click(function(){if($("#js-profModal__hide").removeClass("hide"),$(this).blur(),$("#js-profModal__overlay")[0])return!1;$("body").append('<div id="js-profModal__overlay"></div>'),$("#js-profModal__overlay").fadeIn("slow"),t(),$("#js-profModal__content").fadeIn("slow"),$("#js-profModal__overlay,#js-profModal__close").unbind().click(function(){$("#js-profModal__hide").addClass("hide"),$("#js-profModal__content,#js-profModal__overlay").fadeOut("slow",function(){$("#js-profModal__overlay").remove()})})}),$(window).resize(t)});var tab=document.getElementsByClassName("js-DairyTab_menu"),tabLi=tab[0].children,tabBody=document.getElementsByClassName("js-DairyTab_menu_content")[0].children;tab[0].addEventListener("click",function(t){"false"==t.target.dataset.menu__tab&&dairyArea(t.target)},!1);for(var star_icon=document.getElementsByClassName("star_icon"),star_icon_length=star_icon.length,i=0;i<star_icon_length;i++)star_icon[i].addEventListener("click",function(t){"false"==t.target.dataset.menu__icon?t.target.dataset.menu__icon="true":t.target.dataset.menu__icon="false"});var star_ulli=document.getElementById("star_data").children,star_ulli_span=document.querySelectorAll("[data-menu__icon]"),finish=[];for(i=0;i<star_ulli_span.length;i++)if("true"==star_ulli_span[i].dataset.menu__icon)finish+=star_ulli[i];else{var non=star_ulli[i];console.log("test")}function rcm_tags(){}function init_fav_tags(){"[%fav_tags_csv%]".split(",")}function dairyTabArea(t){for(var a=0;a<dairyTabLi.length;a++){dairyTabLi[a].dataset.dairy__tab;dairyTabLi[a]==t?(dairyTabLi[a].dataset.dairy__tab="true",dairyTabBody[a].dataset.dairy__body="true"):(dairyTabLi[a].dataset.dairy__tab="false",dairyTabBody[a].dataset.dairy__body="false")}}$("#reset_checkbox").on("click",function(){$("input[name='all']").attr("checked",!1)});var dairyTab=document.getElementsByClassName("js-DairyTab"),dairyTabLi=dairyTab[0].children,dairyTabBody=document.getElementsByClassName("js-DairyContent")[0].children;dairyTab[0].addEventListener("click",function(t){"false"==t.target.dataset.dairy__tab&&dairyTabArea(t.target)},!1),$(document).ready(function(){var t=$("#star_data li").length,a=$("#star_data-hoge li").length,e=$("#star_data-hogehoge li").length;$("p.total").text("全部で "+t+"件表示"),$("#star_data li:gt(14)").hide(),$("#star_data-hoge li:gt(14)").hide(),$("#star_data-hogehoge li:gt(14)").hide();var i=15;$("#searchList .js-more").click(function(){i+=10,$("#star_data li:lt("+i+")").show(200),t<=i&&$("#searchList .js-more").fadeOut()}),$("#favMenu .js-more").click(function(){i+=10,$("#star_data-hoge li:lt("+i+")").show(200),a<=i&&$("#favMenu .js-more").fadeOut()}),$("#history .js-more").click(function(){i+=10,$("#star_data-hogehoge li:lt("+i+")").show(200),e<=i&&$("#history .js-more").fadeOut()}),t<=15&&$("#searchList .js-more").hide(),a<=15&&$("#favMenu .js-more").hide(),e<=15&&$("#history .js-more").hide()}),$(function(){$("#js-scrollHint, #js-cateCheck").on("click touchstart",function(){$("#js-scrollHint").hide()}),$(".close").on("click",function(){$("#js-scrollHint").show()})}),$(function(){$(window).scroll(function(){var t=$(".ft-discription__section.no_2").offset().top,a=$(window).scrollTop(),e=$(window).height();t-e-300<a?$(".ft-fixed__balloon").addClass("in"):a<t-e+10&&$(".ft-fixed__balloon").removeClass("in"),$(".ft-discription__section.no_3").offset().top-e+300<a&&$(".ft-fixed__balloon").removeClass("in")})});