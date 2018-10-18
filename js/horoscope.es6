'use strict';


//カスプの描画
for(let i = 0; i < cuspArray.length; i++ ){
  let c = Number(cuspArray[i]);
  $('.rotate').append( '<div class="targetCusp" ' + 'style="' + 'transform:rotate(-' + c + 'deg);">' + '<p class="cusp' + [i+1] + '">'  + '</p>' + '</div>');
}

//ASC・DSC・IC・MCの描画
$('.rotate .horizon').append( '<div class="asc" style="' + 'transform:rotate(-' + Number(cuspArray[0]) + 'deg);">' + '<div class="blink"></div><img class="20" style="transform:rotate('+ Number(cuspArray[0]) + 'deg);" src="/image/horo/planet_' + 20 + '.sp.480.png"></div>').append( '<div class="dsc" style="' + 'transform:rotate(-' + Number(cuspArray[6]) + 'deg);">' + '<div class="blink"></div><img class="26" style="transform:rotate('+ Number(cuspArray[6]) + 'deg);" src="/image/horo/planet_' + 26 + '.sp.480.png"></div>').append( '<div class="ic" style="' + 'transform:rotate(-' + Number(cuspArray[3]) + 'deg);">' + '<div class="blink"></div><img class="23" style="transform:rotate('+ Number(cuspArray[3]) + 'deg);" src="/image/horo/planet_' + 23 + '.sp.480.png"></div>').append( '<div class="mc" style="' + 'transform:rotate(-' + Number(cuspArray[9]) + 'deg);">' + '<div class="blink"></div><img class="29" style="transform:rotate('+ Number(cuspArray[9]) + 'deg);" src="/image/horo/planet_' + 29 + '.sp.480.png"></div>');


//各惑星の角度・IDの取得
function planetDraw(natal, angels, tran, loop, index, horoLoop) {
  let horoAngles = $(angels).text(),
  horoArray = horoAngles.split(","),
  n = horoArray[index].substr(2);

  let aspNatal = $(natal).text(),
  aspTran = $(tran).text(),
  aspectPage =$(loop).text();

  if(horoArray[index].length == 10){
    n = horoArray[index].substr(3);
  }
  let number = Number(n);
  let h = horoArray[index].substr(0,2);
  if(horoArray[index].length == 10){
    h = horoArray[index].substr(0,2);
  } else{
    h = horoArray[index].substr(0,1);
  }
  let horoId = Number(h);



  //惑星の描画
  $(horoLoop + ' .rotate  .targetAngles').append( '<div class="planet' + [index+1] +'" ' + ' style="' + 'transform:rotate(-' + number + 'deg);">' + '<div class="blink"></div><img class="'+ horoId +'" style="transform:rotate('+ [45 + number] + 'deg);" src="/image/horo/planet_0' + horoId + '.sp.480.png"></div>');


  //アスペクトしてる惑星の表示
  $('[class^="planet"]:not(.planet1)').addClass('transit');
  $(horoLoop + ' .transit img').each( function(){
    let src = $(this).attr('class');
    if(src == aspTran ){
      $(horoLoop + ' .transit img.' + src).addClass('aspect');
      $(horoLoop + ' .transit:has(img.aspect)').addClass('aspect');
      let change = $(horoLoop + ' img.aspect').attr('src').replace('.sp' , 'asp.sp');
      $(horoLoop + ' img.aspect').attr('src', change);
    }
  });
}



function planetPosition(angle,angleId, horoLoop){
  $( horoLoop + ' .planet1 img').addClass('natal');
  if(angleId == 20 || angleId == 23 || angleId == 26 || angleId == 29){
    let angleImg = horoLoop + ' ' + angle + ' img',
    change = $(angleImg).attr('src').replace('.sp' , 'asp.sp');

    let n = $('p.natal_planet').text(),
    nArray = n.split(","),
    nInteger = Number(nArray),
    change2 = $(horoLoop + ' img.natal').attr('src').replace(angleId , nInteger);

    $(angleImg).attr('src', change).addClass('aspect');
    $(horoLoop + ' ' + angle).addClass('aspect');
    $(horoLoop + ' img.natal').attr('src', change2);
  }
}


function planetAsp(natal, horoLoop){
  let aspNatal = $(natal).text();

  if(aspNatal == 20){
    planetPosition('.asc', '20', horoLoop);
  } else if(aspNatal == 26){
    planetPosition('.dsc', '26', horoLoop);
  } else if(aspNatal == 23){
    planetPosition('.ic', '23', horoLoop);
  } else if(aspNatal == 29){
    planetPosition('.mc', '29', horoLoop);
  } else {
    let p = ['.planet1','.planet2','.planet3','.planet4','.planet5','.planet6'],
    pAll = '[class^="planet"]',
    change = $(horoLoop + ' .planet1 img').attr('src').replace('.sp' , 'asp.sp'),
    n = $('p.natal_planet').text(),
    nArray = n.split(","),
    //nInteger = Number(nArray),
    mInteger = Number(m);

    if( m == 701 ||  m == 702 || m == 703 || m == 704 || m == 705 || m == 707 || m==708 || m==709 || m==710 || m==711 || m == 712 || m == 10001 ||  m == 10002 || m == 10003 || m == 10004 || m == 10005 || m == 10007 || m == 10008 || m == 10009 || m == 10010 || m == 10011 || m == 10012){
      planetPosition('.'+aspNatal, aspNatal, horoLoop);
      $(horoLoop + ' ' + p[0]).addClass('aspect');
      $(horoLoop + ' ' + p[0] + ' img').attr('src', change).addClass('natal');
      $(horoLoop + ' [class^="planet"]:has(img.natal)').addClass('natal').removeClass('transit');
    } else if( m == 706 || m == 10006){
      planetPosition('.'+aspNatal, aspNatal, horoLoop);
      change = [$(horoLoop + ' .planet1 img').attr('src').replace('.sp' , 'asp.sp'), $(horoLoop + ' .planet2 img').attr('src').replace('.sp' , 'asp.sp')];
      $(horoLoop + ' ' + p[0]).addClass('aspect').dequeue();
      $(horoLoop + ' ' + p[0] + ' img').attr('src', change[0]).addClass('natal');
      $(horoLoop + ' ' + p[1]).addClass('natal').removeClass('transit');
      $(horoLoop + ' ' + p[1] + ' img').addClass('natal').dequeue();
      $(horoLoop + ' [class^="planet"].aspect:has(img.natal)').addClass('natal').removeClass('transit');
    } else if( m == 713 || m == 10013){
      planetPosition('.'+aspNatal, aspNatal, horoLoop);
      $(horoLoop + ' ' + pAll + ':not(.planet1,.planet7)').removeClass('transit').addClass('natal');
      $(horoLoop + ' ' + pAll + ':not(.planet7)').removeClass('transit');
      $(horoLoop + ' ' + p[0]).addClass('aspect');
      $(horoLoop + ' ' + p[0] + ' img').attr('src', change).addClass('natal');
      $(horoLoop + ' ' + pAll + ':not(.planet7) img').addClass('natal');
      $(horoLoop + ' ' + pAll + '.aspect:has(img.natal)').addClass('natal').removeClass('transit');
    }
  }

}

//関数呼び出し（ループ）
for(let j = 0; j < page; j++ ){

  let horoLoop = '.horo'+[j+1];
  let natal = 'p.natal'+ [j +1];
  let angles = 'p.angles'+　[j +1];
  let tran = 'p.tran'+　[j +1];
  let loop = 'p.loop'+　[j +1];

  //ホロスコープに描画する惑星の位置・数
  for(let i = 0; i < targetAngles.length; i++ ){
    let index = i;
    planetDraw(natal, angles, tran, loop, index, horoLoop);
  }
  planetAsp(natal,horoLoop);
}

$(function(){

  function horoHelpOpen() {
    $('.re-horoHelp__body').removeClass('hide').addClass('js-active');
  }

  function horoHelpClose() {
    $('.re-horoHelp__body').removeClass('js-active');
    $('.re-horoHelp__body').delay(500).queue(function() {
      $('.re-horoHelp__body').addClass('hide');
    });
  }

  $('.re-horoHelp__icon > .btn').on('click', function() {
    horoHelpOpen()
  });

  $('.re-horoHelp__body > .btn').on('click', function() {
    horoHelpClose()
  });


});


$.fn.addClass_org = $.fn.addClass;
$.fn.addClass = function() {
  this.trigger('AddedClass', arguments);
  return $.fn.addClass_org.apply(this, arguments);
};

$.fn.addedClass = function(className, callback){
  let
  _that = this,
  _callback = callback || function(){};

  this.on('AddedClass', function(){
    let _arguments = arguments;
    setTimeout(function(){
      if(
        _arguments[1] === className &&
        _that.hasClass(className)
      ){
        _callback();
      }
    }, 0);
  });
}

// let  pager = '[%page%]',
let pageInteger = Number(page),
slideItem = '.slide-item';
$('a.left').hide();
$('.slide-item1').addedClass('active', function(){
    $('a.left').hide();
  });
$('.slide-item2').addedClass('active', function(){
    $('a.left').show();
  });
$('.slide-item' + page).addedClass('active', function(){
    $('a.right').hide();
  });
$('.slide-item' + [page-1]).addedClass('active', function(){
    $('a.right').show();
  });
