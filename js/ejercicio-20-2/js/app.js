var feature = 'closures';   
	(function () { 
		if ( typeof feature === 'undefined' ){ 
			feature = 'callbacks';                
			text.innerHTML = 'JS coders love its ' + feature;     
		} else {    
			text.innerHTML = 'JS developers love its ' + feature;     
		} 
	})();

