const FileSystem = require('lib/FileStorage');
const path = require('path');
class ImageManager{
	async save(file){
		var fs = new FileSystem;
        const ext = path.extname(file);
		if(ext != '.jpg' || ext != '.jpeg' || ext != '.png')
			throw new Error("invalid file")

        var URL = await fs.save(file);
        return URL;
    }
}
module.exports = ImageManager;