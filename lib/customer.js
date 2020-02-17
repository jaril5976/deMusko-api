//LIB IMPORT
const db = require('server/models/index.js');
const Response = require('./response');

//CLASS DECLARATION
class Customer {

  //CREATE CUSTOMER FUNCTION
  async createCustomer(data) {
    console.log(data);
    const resp = new Response();
    //CHECK EMAIL EXIST
    // console.log(data);
    // const ifEmailUnique = await this.checkIfDataUnique('email', data.email);
    // if (!ifEmailUnique) return resp.setError('email', 'Email Already Exists');
    // //CHECK PHONE EXIST
    // const ifMobileUnique = await this.checkIfDataUnique('mobile', data.phone);
    // if (!ifMobileUnique) return resp.setError('mobile', 'Mobile Already Exists');
    // console.log("asdasdata");

    //CREATE CUSTOMER
    var __resp = await db.Customer.create(data);
    //SEND RESPONSE
    return resp.setData(__resp);
  }

  async checkIfDataUnique(key, data) {
    const customer = await db.Customer.count({
      where: {
        [key]: data
      },
    });
    if (customer > 0) return false;
    return true;
  }

  async getCustomers() {
    const resp = new Response();
    var __resp = await db.Customer.findAll();
    //SEND RESPONSE
    return resp.setData(__resp);
    // return resp.setData([]);
  }
}
//EXPORT LIB
module.exports = Customer