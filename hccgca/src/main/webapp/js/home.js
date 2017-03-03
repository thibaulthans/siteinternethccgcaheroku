

$('#btn_hcc').mouseover(function() {
      $(".div_g").addClass("visibility_hidden");
      $(".div_a").addClass("visibility_hidden");
})

$('#btn_hcc').mouseout(function() {
  $(".div_g").removeClass("visibility_hidden");
  $(".div_a").removeClass("visibility_hidden");
})

$('#btn_gca').mouseover(function() {
  $(".div_milieu_un").addClass("visibility_hidden");
  $(".div_milieu_deux").addClass("visibility_hidden");
  $(".div_milieu_trois").addClass("translate_gca");
  $(".div_g").addClass("translate_gca");
  $(".div_a").addClass("translate_gca");
})

$('#btn_gca').mouseout(function() {
  $(".div_milieu_un").removeClass("visibility_hidden");
  $(".div_milieu_deux").removeClass("visibility_hidden");
  $(".div_milieu_trois").removeClass("translate_gca");
  $(".div_g").removeClass("translate_gca");
  $(".div_a").removeClass("translate_gca");
})
