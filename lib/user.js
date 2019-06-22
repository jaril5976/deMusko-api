//LIB IMPORT
const db = require('server/models/index.js');
const bcrypt = require('bcrypt');
const Response = require('./response');
const Auth = require('Helper/Auth.js');

class User{

	async register(data){
        const resp = new Response();
        data.full_name = `${data.first_name} ${data.last_name}`;
        const ifEmailUnique = await this.checkIfDataUnique('email', data.email);
        if (!ifEmailUnique) return resp.setError('email', 'Email Already Exists');

        const ifPhoneUnique = await this.checkIfDataUnique('phone', data.phone);
        if (!ifPhoneUnique) return resp.setError('phone', 'Phone Already Exists');

        data.password = await bcrypt.hash(data.password, 10);
        data.status = 'ACTIVE';
        var __resp = await db.user.create(data);
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

    async login(data){
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
      const matched = await bcrypt.compare(data.password, user.password);
      if (!matched) {
        return resp.setError('password', 'Invalid Password');
      }
      const token = await db.access_token.create({
        user_id: user.id,
        access_token: Auth.token(user.id),
      });
      return resp.setData({
        user,
        access_token: token.access_token,
      });
    }
}
//EXPORT LIB
module.exports = User