const fs = require('fs');
const path = require("path");

/*
* CopyFile with progress callback
* @param {String} sourceFile - source folder
* @param {String} destFile - destination folder
* @param {Object} options - contains "done":function(), "fail":function(), "progress":function(bytesTotal, bytesCurrent) callbacks
*/
function copyFile(sourceFile, destFile, options){
	fs.stat(sourceFile, function(err, stat){
		const filesize = stat.size;
		var bytesCurrent = 0;
		
		const readStream = fs.createReadStream(sourceFile);
		readStream.on('data', function(buffer){
		  bytesCurrent += buffer.length;
		  options["progress"] && options["progress"](filesize, bytesCurrent);
		});
		readStream.on('error', function(err){
		  options["fail"] && options["fail"](err);
		})
		readStream.on('end', function(){
			options["done"] && options["done"]();
		})
		readStream.pipe(fs.createWriteStream(destFile));
	})
}

module.exports.copyFile = copyFile;