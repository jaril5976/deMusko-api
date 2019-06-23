const moveFile = require('move-file');
const guid = require('./Guid');
const path = require('path');
class FileSystem{

	async save(file){
        const hash = guid();
		const ext = path.extname(file);
		const imageName = hash + ext;
        var destFilePath = 'storage/files/'+imageName;
        await moveFile(file, destFilePath);
        return 'http://localhost:8080/media/'+imageName;
	}
    
}

module.exports = FileSystem;