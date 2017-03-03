

document.getElementById("btn_action").onclick = function() {dropdown_action()};
  var i=0;

function dropdown_action() {
  var elmt = document.getElementById("text_hidden");
  if(i%2==0){
      elmt.style.visibility="hidden";
  }
  if(i%2==1){
      elmt.style.visibility="visible";
  }
    i=i+1;
  console.log(i);
}
