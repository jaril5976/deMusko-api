const FileSystem = require('lib/FileStorage');
const path = require('path');
const guid = require('./Guid');
const db = require('server/models/index.js');
class ImageManager{
	async save(file){
		var fs = new FileSystem;
        const ext = path.extname(file);
		if((ext != '.jpg') && (ext != '.jpeg') && (ext != '.png')){
            throw new Error("invalid file")
        }
        const hash = guid();
        const imageName = hash + ext;
        var URL = await fs.save(file,imageName);
        await this.saveInDb(URL,imageName, 'ORIGINAL');
        return URL;
    }

    async saveInDb(url,imageName,size){
        const __record = await db.image.create({
            name:imageName,
            url:url,
            size:size
        })
    }
}
module.exports = ImageManager;