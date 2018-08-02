$(document).ready(function(){
	//animate the "parent-look-up text at the bottom of the page"
	$('.parent-control').animate({opacity:1},300,function(){
		$(this).animate({left:150});
	})


	// FUNCTIONS
	var imageReplace = () => {
        setTimeout(() => {
            var bigImage = document.createElement('img'); 
            bigImage.src = 'img/parent-student.jpg';
            bigImage.onload = function(){
                $('body').css({
                	'background':'url('+bigImage.src+') center center fixed',
                	 backgroundSize:'cover',
                	 opacity:1, 
                	 transition:'0.5s ease-in all'});     
            }        
        }, 1000);
    }
    imageReplace();

    var switchDivs = (newDiv)=>{
    	//get the value of the old div
    	// select it from the dom and fade it out,
    	// fade the new div in, and record the new div into the "oldDiv " boxy
    	let  oldDiv = $('#old-div').val();
    	$('#'+oldDiv).fadeOut(100);
    	//$('#'+oldDiv).css({display:'none'});
    	$('#'+newDiv).fadeIn(300); 		
		if( newDiv==='main'){
			$('#old-div').val('nothing');
		}else if(newDiv==='human-options'){
			$('#old-div').val(newDiv);
			$('#Ave-div').fadeIn(300);
			$('#sub-old-div').val('Ave-div');
		}else if(newDiv=='student-profile'){
			$('#old-div').val(newDiv);
			$('#classwork').fadeIn(300);
			$('#sub-old-div').val('classwork');
		}else if(newDiv=='pages'){
			let otherPages =['activities-page','bus-page','comment-page','ann-page','contact-page']
			otherPages.forEach(page => {
				$('#'+page).css({display:'none'});
			});
			$('#old-div').val(newDiv);
			$('#options-for-school').fadeIn(300);
			$('#sub-old-div').val('options-for-school');
		}else{
			$('#old-div').val(newDiv);
		}
    }
    var fusePlugin = (newPlug)=>{
    	let  oldPlug = $('#sub-old-div').val();
    	$('#'+oldPlug).fadeOut(100);
    	//$('#'+oldPlug).css({display:'none'});
		$('#'+newPlug).fadeIn(300);
		$('#'+newPlug).css({opacity:1});
		$('#sub-old-div').val(newPlug);	
    };
    // ONCLICKS --> BUTTON ACTIONS
    $('#login-button').on('click',()=>{
    	//alert('Frimpong')
    	switchDivs('main');
    	$('.parent-control').css({display:'none'});
    	$('.nav').css({top:0});
    });

    $('#ave').on('click',()=>{
    	switchDivs('human-options');

    });

    $('#deoke').on('click',()=>{
    	fusePlugin('Deoke-div');
    });

    $('#eliza-go').on('click',()=>{
    	switchDivs('student-profile');
    	$('#home-button').show();
    });

    $('#end-of-term').on('click',()=>{
    	$('#end-of-term').css({display:'none'})
    	$('#classwork-button').fadeIn(100);    	
    	fusePlugin('end-of-term-div');
    });

    $('#classwork-button').on('click',()=>{
    	$('#classwork-button').css({display:'none'})
    	$('#end-of-term').fadeIn(100);
    	fusePlugin('classwork');
    });

    $('#home-button').on('click',()=>{
    	switchDivs('pages');
    })

    $('#announcement').on('click',()=>{
    	fusePlugin('ann-page');
    });
    $('#activity').on('click',()=>{
    	fusePlugin('activities-page');
    });
    $('#bus').on('click',()=>{
    	fusePlugin('bus-page');
    });
    $('#contact').on('click',()=>{
    	fusePlugin('contact-page');
    });
    $('#suggestion-box').on('click',()=>{
    	fusePlugin('comment-page');
    });










});