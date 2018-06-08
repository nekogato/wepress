if (!("ontouchstart" in document.documentElement)) {
document.documentElement.className += " no-touch";
}

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

function moveimage(){
	$(".center_image").each(function(){
		$(this).css("position","absolute");
		var doc_width = $(this).parent().width();
		var doc_height = $(this).parent().height();
		$(this).width("auto");
		$(this).height("auto");
		var image_width = $(this).width();
		var image_height = $(this).height();
		var image_ratio = image_width/image_height;     
		var new_width = doc_width;
		var new_height = Math.round(new_width/image_ratio);
		
		if(new_height>doc_height){
			$(this).width(new_width);
			$(this).height(new_height);
		}else{
			new_height = doc_height;
			$(this).height(new_height); 
			new_width = image_ratio*doc_height
			$(this).width(new_width);
		}
		
		if(new_width>doc_width){
			var width_offset = Math.round((new_width-doc_width)/2);
			$(this).css("left","-"+width_offset+"px");
		}else{
			$(this).css("left","0px");  
		}
		
		if(new_height>doc_height){
			var height_offset = Math.round((new_height-doc_height)/2);
			$(this).css("top","-"+height_offset+"px");
		}else{
			$(this).css("top","0px");  
		}		 
	  })
}	



function doscroll(){
	
	var scrolltop = $(window).scrollTop();
	var hh = $(window).height();
	
	if(scrolltop>45){
		$(".header").addClass("nottop");
		$(".header_bg").addClass("nottop");
	}else{
		$(".header").removeClass("nottop");
		$(".header_bg").removeClass("nottop");
	}
	
	$(".scrollin").not($(".scrollin_p .scrollin")).each(function(i){
		var $this = $(this);
		var mytop = $this.offset().top;
		var myh = $this.height();
		
		var dis = (scrolltop+hh)-mytop;
		
		if(dis>0 && dis<hh+myh){
			$this.removeClass("leavescreen");
			$this.addClass("onscreen");
			
			if(dis<hh+myh){
				$this.find(".scrollin").removeClass("stop");
			}else{
				$this.find(".scrollin").addClass("stop");
			}
			
		}else{
			$this.removeClass("onscreen");
			$this.addClass("leavescreen");
		}
	});
	
	
	$(".scrollin_p").each(function(i){
		var $this = $(this);
		var mytop = $this.offset().top;
		var myh = $this.height();
		
		var dis = (scrolltop+hh)-mytop;
		
		if(dis>0 && dis<hh+myh){
			
			$this.find(".scrollin").removeClass("leavescreen");
			$this.find(".scrollin").addClass("onscreen");
			if(dis<hh+myh){
				$this.find(".scrollin").removeClass("stop");
			}else{
				$this.find(".scrollin").addClass("stop");
			}
		}else{
			$this.find(".scrollin").removeClass("onscreen");
			$this.find(".scrollin").addClass("leavescreen");
			$this.find(".scrollin").removeClass("stop");
		}
	});
	
	
	$(".scrollin_p").each(function(i){
	
		$(this).find(".scrollin.onscreen").not($(".scrollin.onscreen.stop")).each(function(i){
			$(this).css({
				"-webkit-transition-delay": i*150+100+"ms",
				"transition-delay": i*150+100+"ms",
			})
			
			$(this).addClass("startani");
		});
	
	});
	
	$(".scrollin.onscreen").not($(".scrollin.onscreen.stop")).not($(".startani")).each(function(i){
		$(this).css({
				"-webkit-transition-delay": i*150+100+"ms",
				"transition-delay": i*150+100+"ms",
		})
		
		$(this).addClass("startani");
	});
	
	$(".scrollin.leavescreen").each(function(i){
		$(this).css({
			"-webkit-transition-delay": 0+"ms",
    		"transition-delay": 0+"ms",
		})
		$(this).removeClass("startani");
	});
	
	$(".scrollin.stop").each(function(i){
		$(this).css({
			"-webkit-transition-delay": 0+"ms",
    		"transition-delay": 0+"ms",
		})
		$(this).addClass("startani");
	});
	
}


function loading_finish(){
	$(".loading").stop().fadeOut(function(){
		$("body").addClass("loadfinish");
		doscroll();
	});
}

function init_event(){
	
	$(".float_thumb_wrapper").each(function(){
		var mylength = $(this).find(".float_thumb").length;
		$(this).find(".float_thumb").each(function(i){
			$(this).css({
				"-webkit-transition-delay": -1*(i-mylength)*300+200+"ms",
				"transition-delay": -1*(i-mylength)*300+200+"ms",
			})
		});	
	});
	
	$(".dropdown_btn").click(function(){
			
		if($(this).hasClass("close")){
			$(this).removeClass("close");
			$(".dropdown").removeClass("active")
			
		}else{
			$(this).addClass("close");
			$(".dropdown").addClass("active")
		}
		return false;
	})
	
	/*
	$(".float_thumb").mouseenter(function(){
		$(this).css({
			"z-index":10
		})
	});
	
	
	$(".float_thumb").mouseleave(function(){
		$(this).removeAttr("style")
	});
	*/
}


function init_function(){
	
	$(".homesection_slideshow_item").each(function(i){
		$(this).attr("data-id","item"+i)
	});
	
	var owl = $('.homesection_slideshow');
	owl.owlCarousel({
		loop:true,
		margin:100,
		items:1,
		smartSpeed:1200,
		autoplayTimeout: 9000,
		autoplay:true,
		center:true,
		dotsContainer:".homesection_slideshow_dot",
		onInitialized: function(e){
		},
		onTranslated: function(e){
			$(".sharpactive").removeClass("sharpactive");
			var $activeItem = $('.owl-item.active .homesection_slideshow_item');
			var myid = $activeItem.attr("data-id")
			$(".homesection_slideshow_item[data-id="+myid+"]").parent().addClass("sharpactive")
		}
	})
	
	// event trigger on dragged
	owl.on('drag.owl.carousel', function(event) {
		// select the active item
		$(".sharpactive").removeClass("sharpactive");
		var $activeItem = $('.owl-item.active .homesection_slideshow_item');
		var myid = $activeItem.attr("data-id")
		$(".homesection_slideshow_item[data-id="+myid+"]").parent().addClass("sharpactive")
	});
	
	$("#homesection_slideshow_next").click(function(){
		owl.trigger('next.owl.carousel');
	});
	
	$('.homesection_slideshow_dot .owl-dot').each(function(){
		$(this).children('span').text("0"+parseInt($(this).index()+1));
	});
	
	var detail_owl = $('.book_detail_left_slideshow');
	detail_owl.owlCarousel({
		loop:true,
		margin:0,
		items:1,
		smartSpeed:1200,
		autoplayTimeout: 9000,
		autoplay:true,
		center:true,
		dotsContainer:".book_detail_left_slideshow_dot",
		onInitialized: function(e){
		},
		onTranslated: function(e){
			
		}
	})
	
	$('.book_detail_left_slideshow_dot .owl-dot').each(function(){
		$(this).children('span').text("0"+parseInt($(this).index()+1));
	});
	
}

function arrowsize(){
	$("#homesection_slideshow_next").css({
		"top":$(".homesection_slideshow").height()/2+"px"
	})
}

function headersize(){
	$(".header_bg").height($(".header").outerHeight());
	$(".homesection0").height(Math.round($(window).height()-100))
	
}

$(function(){
	headersize();
	moveimage();
	doscroll();
	init_event();
	init_function();
});

$(window).on('load', function() {
	headersize();
	arrowsize();
	loading_finish();
	moveimage();
});

$(window).on('resize', function() {
	headersize();
	arrowsize();
	waitForFinalEvent(function(){
		headersize();
		moveimage();
		doscroll();
		arrowsize();
	}, 300, "some unique string");
	
});

$(window).on('scroll', function() {
	doscroll();
});
	