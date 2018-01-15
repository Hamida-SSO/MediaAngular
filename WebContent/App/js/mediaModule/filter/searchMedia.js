angular.module('mediaModule').filter('searchMedia', function() {
	return function(media, type1, type2, type3) {
		console.log(type1,type2,type3);
		var output = [];
		for(var index in media) {
			if(media[index].type == 'Livre' && type1){
				output.push(media[index]);
			} else if(media[index].type == 'CD' && type2){
				output.push(media[index]);
			} else if(media[index].type == 'DVD' && type3){
				output.push(media[index]);
			}
		}
		return output;
	}
});