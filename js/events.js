//define functions here
function getIt() {
  $('p').on("click", function() {
      //action you want taken
      alert('Hey!');
  });
};

function frameIt() {
    console.log("test");
  $('img').on('load', function (){
    $('img').addClass('tasty');

  });
};

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

$(document).ready(function() {
// call functions here
getIt();
frameIt();
});
