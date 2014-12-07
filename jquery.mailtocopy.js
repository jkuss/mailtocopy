;(function ( $ ) {
 
    $.fn.mailtocopy = function() {
 
		var email = this.attr('href').replace("mailto:", "");
        email = email.split('?')[0];
        
        
		$("<style>")
			.prop("type", "text/css")
			.html("\
				@media all and (min-width: 769px){\
					.mailto-copy-wrapper:hover .mailto-copy-addon{\
						display:block;\
					}\
				}\
				.mailto-copy-wrapper, .mailto-copy-addon, input.mailto-copy-field, .mailto-copy-label{\
					box-sizing:border-box;\
				}\
				.mailto-copy-wrapper {\
					display:inline-block;\
					position:relative;\
				}\
				.mailto-copy-addon {\
					display:none;\
					position: absolute;\
					z-index:0;\
					top:-0.4em;\
					left:-5%;\
					width:110%;\
					text-align:center;\
					border-radius:0 0 0.4em 0.4em;\
					border:1px solid #cdcdcd;\
					background-color:#fefefe;\
					background-color:rgba(254,254,254, 0.9);\
					padding:0.2em;\
					padding-top:1.7em;\
				}\
				input.mailto-copy-field {\
					-webkit-appearance:none;\
					width:100%;\
					border:1px solid black;\
					background-color: #fefefe;\
					font-size:0.8em;\
					margin:0;\
					padding:0.25em;\
					text-align:center;\
					\
				}\
				input.mailto-copy-field:focus{\
					outline:0;\
				}\
				.mailto-copy-label{\
					display:block;\
					font-size:0.5em;\
					opacity:0.8;\
					text-transform:uppercase;\
					padding:0.25em;\
				}\
				")
			.appendTo("head");
        
        var wrapper = $("<span>")
        	.prop("class","mailto-copy-wrapper")
	        .insertBefore(this);
		    
		this.css({zIndex:1, position:'relative'}).appendTo(wrapper);
        
        var addon = $("<span>")
        	.prop("class","mailto-copy-addon")
	        .html("<input type='text' name='mailto-email' class='mailto-copy-field' value='"+ email +"'>")
		    .appendTo(wrapper);
		    
		var label = $("<label>")
        	.prop("class","mailto-copy-label")
        	.prop("for","mailto-email")
	        .html("CMD/CTRL + C to Copy")
		    .appendTo(addon);
		
		this.hover(function(){
			$('.mailto-copy-field').select();
	        
			
		})
 
        
        return this;
 
    };
 
}( jQuery ));









