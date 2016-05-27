// directory name as first argument: process.argv[2] 
// file extension to filter by as sec argument: process.argv[3]
var path = require('path');  
var fs = require('fs');

fs.readdir(process.argv[2], callback);

function callback (err, list){
	// for (var i = 0; i < list.length; i++) {
	// 	if(path.extname(list[i]) == "." + process.argv[3]){
	// 		console.log(list[i]);
	// 	}
	// }
	list.filter(function(each){
		return path.extname(each) == "." + process.argv[3];
	}).forEach(function(each){
		console.log(each);
	});
}
