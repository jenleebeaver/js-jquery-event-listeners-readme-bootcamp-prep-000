//define functions here
function getIt() {
  $('p').on("click", function() {
      //action you want taken
      alert('Hey!');
  });
};

function frameIt() {
  $('img').on("load", function (){
    return $('.tasty');
  });
};

$(document).ready(function() {
// call functions here
getIt();
});
