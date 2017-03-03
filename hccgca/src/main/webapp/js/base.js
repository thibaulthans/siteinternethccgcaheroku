

function testScroll(ev){
  var elmt = document.querySelector(".navbar-default");
  var elmt1 = document.querySelector(".div_milieu_s");
  var elmt2 = document.querySelector(".div_a_s");
  var elmt3 = document.querySelector(".div_g_s");
  var elmt4 = document.querySelector(".style_logo_s");
  var elmt5 = document.querySelector(".navbar-brand");
    if(window.pageYOffset<10){
      elmt.style.paddingTop="10px";
      elmt.style.paddingBottom="10px";
      elmt5.style.paddingLeft="10px";
    }
    if(window.pageYOffset>10){
      elmt.style.paddingTop="0px";
      elmt.style.paddingBottom="0px";
      elmt5.style.paddingLeft="4px";
    }
    document.querySelector(".navbar-default").style.WebkitTransition = "all 0.5s";
    elmt5.style.WebkitTransition = "all 0.5s";

}
window.onscroll=testScroll
