const moveFile = require('move-file');
const path = require('path');
class FileSystem{

	async save(oldpath,imageName){
        
        var destFilePath = 'storage/files/'+imageName;
        await moveFile(oldpath, destFilePath);
        return 'http://localhost:8080/media/'+imageName;
	}
    
}

module.exports = FileSystem;