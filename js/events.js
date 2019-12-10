//define functions here
function getIt() {
  $('p').on("click", function() {
      //action you want taken
      alert('Hey!');
  });
};

function frameIt() {
    console.log("test");
  $('img').on("load", function (){
    $('img').addClass('tasty');
  
  });
};

$(document).ready(function() {
// call functions here
getIt();
frameIt();
});
