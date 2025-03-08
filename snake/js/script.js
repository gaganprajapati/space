var screenWidth = $(window).width();
var screenHeight = $(window).height();
var snakeLenght = 100;
var snakePosition = 0;
var currentDirection = 'right';
var callFunction;

$(document).ready(function(){
	function moveRight(){
		
	}

	function moveLeft(){
		
	}

	function moveUp(){
		
	}

	function moveDown(){
		
	}

(function(){
	$(document).keydown(function(e) {
		var move;
	    if(e.which == 37){
	    	move = function(){
	    		$(".segment").each(function( index ) {
					var segmentMargin = $(this).css("margin-left");
					segmentMargin = parseInt(segmentMargin.replace('px', ''));
					var newSegmentMargin = segmentMargin - 20;
					$(this).css({'margin-left':newSegmentMargin+'px'});
				});
				currentDirection = 'left';
	    	};
	    }
	    if(e.which == 38){
	    	move = function(){
	    		$(".segment").each(function( index ) {
					var segmentMargin = $(this).css("margin-top");
					segmentMargin = parseInt(segmentMargin.replace('px', ''));
					var newSegmentMargin = segmentMargin - 20;
					$(this).css({'margin-top':newSegmentMargin+'px'});
				});
				currentDirection = 'up';
	    	};
	    }
	    if(e.which == 39){
	    	move = function(){
	    		$(".segment").each(function( index ) {
					var segmentMargin = $(this).css("margin-left");
					segmentMargin = parseInt(segmentMargin.replace('px', ''));
					var newSegmentMargin = segmentMargin + 20;
					$(this).css({'margin-left':newSegmentMargin+'px'});
				});
				currentDirection = 'right';
	    	};
	    }
	    if(e.which == 40){
	    	move = function(){
	    		$(".segment").each(function( index ) {
					var segmentMargin = $(this).css("margin-top");
					segmentMargin = parseInt(segmentMargin.replace('px', ''));
					var newSegmentMargin = segmentMargin + 20;
					$(this).css({'margin-top':newSegmentMargin+'px'});
				});
				currentDirection = 'down';
	    	};
	    }

	    if(move != null){
	    	move();
	    }
	    
	    var i = true;

	    /*while(i){
	    	$(document).keydown(function(k) {
	    		if(k.which == 66){
	    			i = false;
	    		}
	    	});
	    	console.log("sdfjhsdjfkh");
	    	if(move != null){
		    	move();
		    }
	    }*/
	});
})();
	

});