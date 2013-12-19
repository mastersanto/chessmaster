$(function(){
	$('.piece').on({
		dragstart: function(e){ 
			console.log('dragstart');
		}
	});
	$('.square').on({
		dragenter: function(e){
			console.log('dragenter');

		}
	});
});