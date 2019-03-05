

// img hover slider
   
// var surce2;
// var curr;


// $(".plan_nd_img_box_container .owl-item").each(function(index){
    
   
//   $(this).click(function(){
//   curr = index;
//   surce2 = $(".plan_nd_img_box_container .owl-item").eq(curr).find("img").attr("src");
//   $(".popup_img img").attr("src",surce2);
  
  
//   })
// })

// $(".slide_right").click(function(){

  

//   if (curr == $(".plan_nd_img_box_container .owl-item").length -1) {
//     curr = -1;
//   }
//   surce2 = $(".plan_nd_img_box_container .owl-item").eq(curr +1).find("img").attr("src");
//   $(".popup_img img").attr("src",surce2);
//   curr++;

// })

// $(".slide_left").click(function(){
    
    

//   if (curr == 0) {
//     curr = $(".plan_nd_img_box_container .owl-item").length;
//   }

//   surce2 = $(".plan_nd_img_box_container .owl-item").eq(curr -1).find("img").attr("src");
//   $(".popup_img img").attr("src",surce2);
//   curr--;

// })

//     $( document ).ready(function() {

//     document.querySelector('.slide_right').addEventListener('click',function(){
//     document.querySelector('.plan_nd_img_box_container .owl-next').click()
    
//     })
//     document.querySelector('.slide_left').addEventListener('click',function(){
//     document.querySelector('.plan_nd_img_box_container .owl-prev').click()
   
//     })
        
// })

// img hover slider

/*Responsive Navigation  Start----------------------------------------------*/
$(document).ready(function(){
 	$("._navigation").fadeOut()
 	$(".navbar_toggler").click(function(){
 			$("._nav_box").toggleClass("active");
	 		$(".navbar_toggler_icon1").toggleClass("active");
	 		$(".navbar_toggler_icon2").toggleClass("active");
	 		$(".navbar_toggler_icon3").toggleClass("active");
 		$("._navigation").fadeToggle(100)
 	})
})

/*Responsive Navigation  Start---------------------------------------------------*/




/*Owl Slider Start-------------------------------------------------------------*/
$('.partners_slide').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    smartSpeed: 900,
    responsive:{
        0:{
            items:1
        },
        690:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

/*Owl Slider Start------------------------------------------------*/


// Search Start--------------------------------------------------------

$(".header_search img").on("click",function(){
    $(".search_box").fadeIn(100);
})

$(window).on("click",function(e){ 
        if(!$(e.target).is(".search_box"))
            $(".search_box").fadeOut(100);
    })

$(".header_search").on("click",function(e){
    e.stopPropagation();
    
})

// Search End-------------------------------------------------------------




// Search Start 22222222222--------------------------------------------------------

$(document).ready(function(){
	var meF = 0;
	$(".header_search_box span").on("click",function(){
		$(".search_bar").toggleClass("active");
		if (meF == 0) {
			$(this).find("img").attr("src","images/close_icon.png");
			meF = 1;
		}
		else {
			$(this).find("img").attr("src","images/search_icon.png");
			meF = 0;
		}
	})
})

// Search End 222222222222-------------------------------------------------------------




// Scroll Start----------------------------------------------------------------------

$(".srcroll_line a").on("click",function(e){
    var href = $(this).attr('href');
    $("html, body").animate({
        scrollTop : $(href).offset().top
    },500);
    e.preventDefault()
})

// Scroll End----------------------------------------------------------------------------




// Video Start
var vids = $(".home_video_box video"); 
$.each(vids, function(){
       this.controls = false; 
}); 

$(document).ready(function(){
  $(".home_video_box video").mouseenter(function() {
      this.play();
  });
  $(".home_video_box video").mouseleave(function() {
      this.pause();
  });
})

$(".home_video_box").mouseenter(function() {
	$(this).find(".video_decor").addClass("active");
})

$(".home_video_box").mouseleave(function() {
	$(this).find(".video_decor").removeClass("active");
})
// Video End



//My Modal Start----------------
$(".modal_button span").on("click",function(){
    $(".modal_fluid").addClass("active");
});

$(".modal_fluid").on("click",function(){
   $(this).removeClass("active")
})

$(".modal_container").on("click",function(e){
    e.stopPropagation();
})

// $(window).on("click",function(e){
//         let div  = e.target;
        
//         if(!$(div).is(".modal_container"))
//             $(".contact_popup_fluid").removeClass("active");
//    })

//My Modal End----------------




 // Convert input Value 


$( "#her" ).keyup(function(event) {

console.log(event.which)
  if (event.which !== 81) {
    
     var gg =  $(this).val();
  var sum = gg * 0.2

  $("#jer").text(gg - sum + "ლარი")
  }


});

 // Convert input Value

