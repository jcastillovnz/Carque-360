$( document ).ready(function() {

		$('.side-bar').on('click', function(){

			$('.side-bar.side-bar-active > .content.content-active').removeClass('content-active');
			$('.side-bar.side-bar-active').removeClass('side-bar-active');
			$('.side-bar-content.hidden').removeClass('hidden');
			$(this).addClass('side-bar-active');
			$(this).children( ".side-bar-content" ).addClass('hidden');
			$(this).children( ".content" ).addClass('content-active');
		});


		$('#one').on('click', function(){
			$('.level-axo.active').removeClass('active');
			$(this).addClass('active');
			$('#plan-axo').css('background-image','url(imgs/Arche/plan_3d_cocoon/T5_A502-0.png)');
		});

		$('#two').on('click', function(){
			$('.level-axo.active').removeClass('active');
			$(this).addClass('active');
			$('#plan-axo').css('background-image','url(imgs/Arche/plan_3d_cocoon/T5_A502-1.png)');
		});

		$('#one-tech').on('click', function(){
			$('.level-tech.active').removeClass('active');
			$(this).addClass('active');
			$('#plan-technique').css('background-image','url(imgs/Arche/plan_technique_cocoon/T5_A502-0.png)');
		});

		$('#two-tech').on('click', function(){
			$('.level-tech.active').removeClass('active');
			$(this).addClass('active');
			$('#plan-technique').css('background-image','url(imgs/Arche/plan_technique_cocoon/T5_A502-1.png)');
		});


});

