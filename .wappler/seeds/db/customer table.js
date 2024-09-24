exports.seed = async function(knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process customer
    await trx('customer').del();
    var customer = [], customer_id = null;
    customer_id = await trx('customer').insert({cust_name:"1",cust_num:"123123",cust_email:"ww@gmail.com",cust_dob:"2024-08-06T16:00:00.000Z",cust_loyalP:27}, 'cust_id');
    customer.push(typeof customer_id[0] === 'object' ? customer_id[0] : {cust_id: customer_id[0]})
    customer_id = await trx('customer').insert({cust_name:"erloca",cust_num:"0112912018247",cust_email:"ee@gmail.com",cust_dob:"2024-08-21T16:00:00.000Z",cust_loyalP:9}, 'cust_id');
    customer.push(typeof customer_id[0] === 'object' ? customer_id[0] : {cust_id: customer_id[0]})
    customer_id = await trx('customer').insert({cust_name:"er",cust_num:"01111111",cust_email:"ericlim0110@gmail.com",cust_dob:"2024-09-30T16:00:00.000Z",cust_loyalP:22}, 'cust_id');
    customer.push(typeof customer_id[0] === 'object' ? customer_id[0] : {cust_id: customer_id[0]})

})

};