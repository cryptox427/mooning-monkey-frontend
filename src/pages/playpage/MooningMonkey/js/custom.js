
  $(document).ready(function () {
    setTimeout(function () {
                $('#loader').fadeIn("slow");
            }, 0); // <-- time in milliseconds
    setTimeout(function () {
                $('#loader').fadeOut("slow");
            }, 500); // <-- time in milliseconds
  });


//dropdown

// $(".prevent-drop").click(function(e){
//   e.stopPropagation();
// })
   
// dashboard-nav



$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(".close-sidebar").click(function (closeSide){
  $("#wrapper").removeClass("toggled");
}
)
$(".close-sidebar").click(function (closeSide){
  if ($(window).width() > 768) {
    $("#sidebar-wrapper").toggleClass("hide-span");
 }  
}
)

 

  // side bar
 /* Set the width of the side navigation to 250px */
 function openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

// for toast alert 


  $( "#showToast" ).click(function() {
    $('.toast.password').toast('show');
  });
  $( "#withdraw-btn" ).click(function() {
    $('.toast.withdraw').toast('show');
  });


 
  // remove div
  function removeDiv(){
    $ ('.warning-wrap').remove();
}

    $ ('.w-close-icon').click(function(){
      $(".chat-section").removeClass("d-none");
      $(".warning-for-chat").addClass("d-none");

    });

 
// chart
$(document).ready(function() {
  var data = [];
  var t = new Date();
  for (var i = 1; i >= 0; i--) {
    var x = new Date(t.getTime() - i * 1000);
    data.push([x, 0]);
  }

  var g = new Dygraph(document.getElementById("div_g"), data,
                      {
                        drawPoints: true,
                        showRoller: true,
                        //valueRange: [0.0, 1000],
                        labels: ['Time', 'Random']
                      });
  // It sucks that these things aren't objects, and we need to store state in window.
  i = 0.1;
  /*speed = 200;
  window.intervalId = setInterval(function() {

  }, speed);*/
  
  
  
  var speed = 250;
  var changeSpeed = speed;
  repeater = setInterval(repeaterFn, speed);
  function repeaterFn(){
      
      changeSpeed = 100 / (i**1.01) 
      var x = new Date();  // current time
      //var y = Math.random();
      data.push([x, i]);
      g.updateOptions( { 'file': data } );
      i = i+0.1;
      
      if(changeSpeed < 5){
        changeSpeed = 5
      }
      
      if( changeSpeed != speed ){
       clearInterval(repeater);
       speed = changeSpeed;
       repeater = setInterval(repeaterFn, speed);
      }
  }
  
  
}
);

 

 