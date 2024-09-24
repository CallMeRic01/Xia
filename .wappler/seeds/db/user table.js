exports.seed = async function(knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process user
    await trx('user').del();
    var user = [], user_id = null;
    user_id = await trx('user').insert({user_firstName:"ed",user_lastName:"de",user_email:"ed@gmail.com",user_pw:"333",user_dateSignup:"2024-07-15T18:11:18.000Z",user_authCode:"",user_validated:"2024-07-16T02:48:27.000Z"}, 'user_id');
    user.push(typeof user_id[0] === 'object' ? user_id[0] : {user_id: user_id[0]})
    user_id = await trx('user').insert({user_firstName:"ede",user_lastName:"dd",user_email:"blackvixxjack@gmail.com",user_pw:"$argon2id$v=19$m=65536,t=3,p=4$o7EkMuWbhGYtqybC8KmL9Q$tPlAFYjeeJb0iQOHSa7/cxMub6VxYdiJFxJpA7ImVmk",user_dateSignup:"2024-07-17T00:26:43.000Z",user_authCode:"",user_validated:"2024-07-17T08:28:43.000Z"}, 'user_id');
    user.push(typeof user_id[0] === 'object' ? user_id[0] : {user_id: user_id[0]})

    // Process user_clockInOut
    await trx('user_clockInOut').del();
    var user_clockInOut = [], user_clockInOut_id = null;
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-05T02:43:00.000Z",cIO_out:"2024-08-05T03:36:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-04T16:00:00.000Z",cIO_hrsWorked:"00:53:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-04T19:28:00.000Z",cIO_out:"2024-08-05T07:28:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-04T16:00:00.000Z",cIO_hrsWorked:"12:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-04T19:28:00.000Z",cIO_out:"2024-08-05T08:01:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-04T16:00:00.000Z",cIO_hrsWorked:"12:33:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-04T19:28:00.000Z",cIO_out:"2024-08-05T08:01:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-04T16:00:00.000Z",cIO_hrsWorked:"12:33:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-04T19:28:00.000Z",cIO_out:"2024-08-05T08:01:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-04T16:00:00.000Z",cIO_hrsWorked:"12:33:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-06T04:34:00.000Z",cIO_out:"2024-08-06T04:34:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-05T16:00:00.000Z",cIO_hrsWorked:"00:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-06T04:34:00.000Z",cIO_out:"2024-08-06T04:34:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-05T16:00:00.000Z",cIO_hrsWorked:"00:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-07T20:05:00.000Z",cIO_out:"2024-08-08T08:05:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-07T16:00:00.000Z",cIO_hrsWorked:"12:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-15T04:20:00.000Z",cIO_out:"2024-08-15T04:20:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-14T16:00:00.000Z",cIO_hrsWorked:"00:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-20T01:45:00.000Z",cIO_out:"2024-08-20T01:45:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-19T16:00:00.000Z",cIO_hrsWorked:"00:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})
    user_clockInOut_id = await trx('user_clockInOut').insert({cIO_in:"2024-08-20T01:46:00.000Z",cIO_out:"2024-08-20T01:46:00.000Z",user_id:user[-1]['user_id'],cIO_date:"2024-08-19T16:00:00.000Z",cIO_hrsWorked:"00:00:00"}, 'cIO_id');
    user_clockInOut.push(typeof user_clockInOut_id[0] === 'object' ? user_clockInOut_id[0] : {cIO_id: user_clockInOut_id[0]})

})

};