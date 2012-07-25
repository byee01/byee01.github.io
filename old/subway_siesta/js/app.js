//for scrollTo
	//<![CDATA[
		jQuery(function( $ ){
				//borrowed from jQuery easing plugin
				//http://gsgd.co.uk/sandbox/jquery.easing.php
				//see jquery.easing.1.3.js for available tweens
				$.easing.easeOutQuint = function (x, t, b, c, d) {
      		return c*((t=t/d-1)*t*t*t*t + 1) + b;
				};

			$.scrollTo( 0 );//reset the screen to (0,0)
			$('.hme').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				//$.scrollTo( 0, 0 ); //will scroll diagnol
				$.scrollTo( '#home', 900, { easing:'easeOutQuint' } );// first number: where (x and y), second number: duration
				return false;
			});			
			$('.res').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				//$.scrollTo( 1000, 800 ); //will scroll diagnol
				$.scrollTo( '#research', 900, { easing:'easeOutQuint' } );// first number: where (x and y), second number: duration
				return false;
			});
			$('.per').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				//$.scrollTo( 1000, 800 ); //will scroll diagnol
				$.scrollTo( '#persona', 900, { easing:'easeOutQuint' } );// first number: where (x and y), second number: duration
				return false;
			});
			$('.des').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				//$.scrollTo( 1000, 800 ); //will scroll diagnol
				$.scrollTo( '#design', 900, { easing:'easeOutQuint' } );// first number: where (x and y), second number: duration
				return false;
			});
			$('.sol').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				//$.scrollTo( 1000, 800 ); //will scroll diagnol
				$.scrollTo( '#solution', 900, { easing:'easeOutQuint' } );// first number: where (x and y), second number: duration
				return false;
			});			
		});
		//]]>

