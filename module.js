var path = require('path');
var fs = require('fs');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(error, data){
		if(error){
			return callback(error);
		}
		var arr = [];
		for (var i = 0; i < data.length; i++) {
			if(path.extname(data[i]) == "." + ext)
				arr.push(data[i]);
		}
		return callback(null, arr);
	});
}