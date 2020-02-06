$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 70) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

// ページが読み込まれたら実行
window.onload = function() {

   // オブジェクトと変数の準備
   var count_disp = document.getElementById("disp_count1");  
   var count_up_btn = document.getElementById("btn_count_up1");
   var count_value = 0;

   // カウントアップボタンクリック処理
   count_up_btn.onclick = function (){
        count_value += 1;
        count_disp.innerHTML = count_value;
   };

   // オブジェクトと変数の準備
   var count_disp2 = document.getElementById("disp_count2");  
   var count_up_btn2 = document.getElementById("btn_count_up2");
   var count_value2 = 0;

   // カウントアップボタンクリック処理
   count_up_btn2.onclick = function (){
        count_value2 += 1;
        count_disp2.innerHTML = count_value2;
   };

   // オブジェクトと変数の準備
   var count_disp3 = document.getElementById("disp_count3");  
   var count_up_btn3 = document.getElementById("btn_count_up3");
   var count_value3 = 0;

   // カウントアップボタンクリック処理
   count_up_btn3.onclick = function (){
        count_value3 += 1;
        count_disp3.innerHTML = count_value3;
   };

   // オブジェクトと変数の準備
   var count_disp4 = document.getElementById("disp_count4");  
   var count_up_btn4 = document.getElementById("btn_count_up4");
   var count_value4 = 0;

   // カウントアップボタンクリック処理
   count_up_btn4.onclick = function (){
        count_value4 += 1;
        count_disp4.innerHTML = count_value4;
   };

   // オブジェクトと変数の準備
   var count_disp5 = document.getElementById("disp_count5");  
   var count_up_btn5 = document.getElementById("btn_count_up5");
   var count_value5 = 0;

   // カウントアップボタンクリック処理
   count_up_btn5.onclick = function (){
     count_value5 += 1;
     count_disp5.innerHTML = count_value5;
};
   
   // オブジェクトと変数の準備
   var count_disp6 = document.getElementById("disp_count6");  
   var count_up_btn6 = document.getElementById("btn_count_up6");
   var count_value6 = 0;

   // カウントアップボタンクリック処理
   count_up_btn6.onclick = function (){
        count_value6 += 1;
        count_disp6.innerHTML = count_value6;
   };
   // オブジェクトと変数の準備
   var count_disp7 = document.getElementById("disp_count7");  
   var count_up_btn7 = document.getElementById("btn_count_up7");
   var count_value7 = 0;

   // カウントアップボタンクリック処理
   count_up_btn7.onclick = function (){
        count_value7 += 1;
        count_disp7.innerHTML = count_value7;
   };
   // オブジェクトと変数の準備
   var count_disp8 = document.getElementById("disp_count8");  
   var count_up_btn8 = document.getElementById("btn_count_up8");
   var count_value8 = 0;

   // カウントアップボタンクリック処理
   count_up_btn8.onclick = function (){
        count_value8 += 1;
        count_disp8.innerHTML = count_value8;
   };
   // オブジェクトと変数の準備
   var count_disp9 = document.getElementById("disp_count9");  
   var count_up_btn9 = document.getElementById("btn_count_up9");
   var count_value9 = 0;

   // カウントアップボタンクリック処理
   count_up_btn9.onclick = function (){
        count_value9 += 1;
        count_disp9.innerHTML = count_value9;
   };
   // オブジェクトと変数の準備
   var count_disp10 = document.getElementById("disp_count10");  
   var count_up_btn10 = document.getElementById("btn_count_up10");
   var count_value10 = 0;

   // カウントアップボタンクリック処理
   count_up_btn10.onclick = function (){
        count_value10 += 1;
        count_disp10.innerHTML = count_value10;
   };
   // オブジェクトと変数の準備
   var count_disp11 = document.getElementById("disp_count11");  
   var count_up_btn11 = document.getElementById("btn_count_up11");
   var count_value11 = 0;

   // カウントアップボタンクリック処理
   count_up_btn11.onclick = function (){
        count_value11 += 1;
        count_disp11.innerHTML = count_value11;
   };
   // オブジェクトと変数の準備
   var count_disp12 = document.getElementById("disp_count12");  
   var count_up_btn12 = document.getElementById("btn_count_up12");
   var count_value12 = 0;

   // カウントアップボタンクリック処理
   count_up_btn12.onclick = function (){
        count_value12 += 1;
        count_disp12.innerHTML = count_value12;
   };
   // オブジェクトと変数の準備
   var count_disp13 = document.getElementById("disp_count13");  
   var count_up_btn13 = document.getElementById("btn_count_up13");
   var count_value13 = 0;

   // カウントアップボタンクリック処理
   count_up_btn13.onclick = function (){
        count_value13 += 1;
        count_disp13.innerHTML = count_value13;
   };
   // オブジェクトと変数の準備
   var count_disp14 = document.getElementById("disp_count14");  
   var count_up_btn14 = document.getElementById("btn_count_up14");
   var count_value14 = 0;

   // カウントアップボタンクリック処理
   count_up_btn14.onclick = function (){
        count_value14 += 1;
        count_disp14.innerHTML = count_value14;
   };
   // オブジェクトと変数の準備
   var count_disp15 = document.getElementById("disp_count15");  
   var count_up_btn15 = document.getElementById("btn_count_up15");
   var count_value15 = 0;

   // カウントアップボタンクリック処理
   count_up_btn15.onclick = function (){
        count_value15 += 1;
        count_disp15.innerHTML = count_value15;
   };
   // オブジェクトと変数の準備
   var count_disp16 = document.getElementById("disp_count16");  
   var count_up_btn16 = document.getElementById("btn_count_up16");
   var count_value16 = 0;

   // カウントアップボタンクリック処理
   count_up_btn16.onclick = function (){
        count_value16 += 1;
        count_disp16.innerHTML = count_value16;
   };
   // オブジェクトと変数の準備
   var count_disp17 = document.getElementById("disp_count17");  
   var count_up_btn17 = document.getElementById("btn_count_up17");
   var count_value17 = 0;

   // カウントアップボタンクリック処理
   count_up_btn17.onclick = function (){
        count_value17 += 1;
        count_disp17.innerHTML = count_value17;
   };
   // オブジェクトと変数の準備
   var count_disp18 = document.getElementById("disp_count18");  
   var count_up_btn18 = document.getElementById("btn_count_up18");
   var count_value18 = 0;

   // カウントアップボタンクリック処理
   count_up_btn18.onclick = function (){
        count_value18 += 1;
        count_disp18.innerHTML = count_value18;
   };

};