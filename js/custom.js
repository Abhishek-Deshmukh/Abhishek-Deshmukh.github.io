//$.fn.$setMainBody = function (global,Html) {
//
//    console.log("chack poing 1");
//    console.log(global);
//    console.log(Html)
//
//var dc ={};
//    if(Html == undefined){
//    Html = "snippers/gallary-snippet.html";
//    }    
//
//
//var insertHtml = function (selector,html) {
//    var targetElem= document.querySelector(selector);
//    targetElem.innerHTML = html;
//};
//
//var showLoding = function(selector) {
//    var html = ' <div id="lodingLogo"> <div class="sk-spinner sk-spinner-wordpress" align=center"> <span class="sk-inner-circle"  ></span> </div> </div>';
//    insertHtml(selector,html);
//};
//
//
//document.addEventListener("DOMContentLoaded",function  (event) {
//    showLoding("#main-content");
//        $ajaxUtils
//            .sendGetRequest(Html,
//                function (request) {
//                            document.querySelector("#main-content").innerHTML = request.responseText;
//                            });
//                });
//global.$dc=dc;
//    };
//
//$.fn.$setMainBody(window);
//$.eac
//
//
//$(function() {
//    $("#MHome").click(function ()
//        {
//        $.fn.$setMainBody(window,"snippers/home-snippet.html");
//        console.log("hello");}
//);});
//

$(document).ready(function(){

    var trigger = $('.nav'),
        container = $('#content');


    trigger.on('click',function(){
    
        var $this=$(this),
            target = $this.data('target');
    
    
        container.load('snippers/'+ target + '.php');
    
    return false;
    
    });

});

$('').click(function(event) {
    console.log("clicked: " + $(this).data('tagert'));
});

/*-----------------------------------------------------------------------
 * ITEM LIST WILL COLLAPS AFTER BLUR
 * ---------------------------------------------**/ 
$(function(){
    $("#navbarToggle").blur(function (event){
    
        var screenWidth=window.innerWidth;
    if(screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');}});});
  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();


  /* Back top
  -----------------------------------------------*/
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
          console.log(event);
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })

