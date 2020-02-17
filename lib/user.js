//LIB IMPORT
const db = require('server/models/index.js');
const bcrypt = require('bcrypt');
const Response = require('./response');
const Auth = require('helper/Auth.js');
const ImageUpload = require('lib/ImageManager.js')

//CLASS DECLARATION
class User {

  //REGISTER FUNCTION
  async register(data) {
    const resp = new Response();
    data.full_name = `${data.first_name} ${data.last_name}`;
    //CHECK EMAIL EXIST
    const ifEmailUnique = await this.checkIfDataUnique('email', data.email);
    if (!ifEmailUnique) return resp.setError('email', 'Email Already Exists');
    //CHECK PHONE EXIST
    const ifPhoneUnique = await this.checkIfDataUnique('phone', data.phone);
    if (!ifPhoneUnique) return resp.setError('phone', 'Phone Already Exists');
    //UPLOAD IMAGE IF PROFILE PHOTO EXIST
    const im = new ImageUpload();
    if (data.profile_image)
      await im.save(data.profile_image.path)
    //ENCRYPT PASSWORD
    data.password = await bcrypt.hash(data.password, 10);
    data.status = 'ACTIVE';
    //CREATE USER
    var __resp = await db.user.create(data);
    //SEND RESPONSE
    return resp.setData(__resp);
  }

  async checkIfDataUnique(key, data) {
    const user = await db.user.count({
      where: {
        [key]: data
      },
    });
    if (user > 0) return false;
    return true;
  }

  //LOGIN FUNCTION
  async login(data) {
    //CHECK USER EXIST OR NOT
    const resp = new Response();
    const query = {
      where: {
        status: 'ACTIVE',
        email: data.email
      }
    };
    const user = await db.user.findOne(query);
    if (!user) {
      return resp.setError('email', 'Invalid Email');
    }
    //CHECK PASSWORD MATCH OR NOT
    const matched = await bcrypt.compare(data.password, user.password);
    if (!matched) {
      return resp.setError('password', 'Invalid Password');
    }
    //CREATE ACCESS TOKEN
    const token = await db.access_token.create({
      user_id: user.id,
      access_token: Auth.token(user.id),
    });
    //SEND RESPONSE
    return resp.setData({
      user,
      access_token: token.access_token,
    });
  }

  async getUsers() {
    const arrUser = [
      { id: 1, name: "Chetan Bardoliya" },
      { id: 2, name: "Raj Jariwala" },
      { id: 3, name: "Pratik Malhotra" },
      { id: 4, name: "Piyush Patel" },
      { id: 5, name: "Abhi Gadiyali" }
    ];
    return arrUser;
  }
}
//EXPORT LIB
module.exports = User