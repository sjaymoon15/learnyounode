var module = require('./module.js');

module(process.argv[2], process.argv[3], function(error, data){
	if(error)
		return console.log(error);
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
})