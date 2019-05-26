//LIB IMPORT
const db = require('../server/models/index.js');
const bcrypt = require('bcrypt');
const Response = require('./response');

class User{

	async register(data){
        const resp = new Response();
        data.full_name = `${data.first_name} ${data.last_name}`;
        const ifEmailUnique = await this.checkIfDataUnique('email', data.email);
        if (!ifEmailUnique) return resp.setError('email', 'Email Already Exists');

        const ifPhoneUnique = await this.checkIfDataUnique('phone', data.phone);
        if (!ifPhoneUnique) return resp.setError('phone', 'Phone Already Exists');

        data.password = await bcrypt.hash(data.password, 10);
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
}
//EXPORT LIB
module.exports = User