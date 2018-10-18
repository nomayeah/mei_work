<script>


$(function() {
  var cnt = 0;
  var search = 0;
  let fav_tags_csv = [[%fav_tags_csv.join(',')%]];

  // onload
  fav_tags_csv.forEach(function(id){
    $('#tagid'+id).prop("checked",true);
  });
  if(fav_tags_csv.length>0){
    $("#id_submit").prop('disabled',false).removeClass("disable");
  }


  //全部チェック外したら検索できなくする
  $("#js-cateCheck input[type=checkbox]").change(function(){
      var cnt1 = $("#js-cateCheck input[type=checkbox]:checked").length;
        if(cnt1 == 0) {
            $("#id_submit").prop('disabled', true);
        } else {
            $("#id_submit").prop('disabled', false).removeClass("disable");
        }
    });

    $('#reset_checkbox').click(function () {
      search = 0;
      $('p.data-total').text("0件を表示" );
      $("#id_submit").prop("disabled", true);
        if($('input[type="checkbox"]').prop('checked') == false ) {
            //$('#id_submit').attr('disabled', 'disabled');
        } else {
            $('#id_submit').removeAttr('disabled');
        }
    });
});


// カルーセル

$(function() {
    $('.center-item').slick({
          infinite: true,
          dots:true,
          slidesToShow: 1,
          centerMode: true, //要素を中央寄せ
          centerPadding:'100px', //両サイドの見えている部分のサイズ
          autoplay:true, //自動再生
          responsive: [{
               breakpoint: 480,
                    settings: {
                         centerMode: false,
               }
          }]
     });
});



$(function(){

let charcount = function (str) {
  len = 0;
  str = escape(str);
  for (i=0;i<str.length;i++,len++) {
    if (str.charAt(i) == "%") {
      if (str.charAt(++i) == "u") {
        i += 3;
        len++;
      }
      i++;
    }
  }
  return len;
}

let li_count = $('.search__list li').length + 2,
    j = 0;

for( let i = 2; i < li_count;i++ ) {
  let target = $('.search__list li:nth-of-type(' + i + ')');
  j += charcount(target.text());
  if (j <= 23) {
    $(target).addClass('js-open');
  } else if (j == 24) {
    $(target).addClass('js-open');
    break;
  }
  else if (j > 24) {
    $(target).addClass('js-finish');
    let num = j;
    switch (num) {
      case 26:
      $(target).html( $(target).text().slice(0, 1) + "..." );
      break;
      case 28:
      $(target).html( $(target).text().slice(0, 2) + "..." );
      break;
      case 30:
      $(target).html( $(target).text().slice(0, 3) + "..." );
      break;
      case 32:
      $(target).html( $(target).text().slice(0, 4) + "..." );
      break;
      case 34:
      $(target).html( $(target).text().slice(0, 5) + "..." );
      break;
      case 36:
      $(target).html( $(target).text().slice(0, 6) + "..." );
      break;
      case 38:
      $(target).html( $(target).text().slice(0, 7) + "..." );
      break;
    }
    break;
  }
}


});
</script>
