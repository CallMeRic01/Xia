exports.seed = async function(knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process role
    await trx('role').del();
    var role = [], role_id = null;
    role_id = await trx('role').insert({role:"A",user_id:18}, 'role_id');
    role.push(typeof role_id[0] === 'object' ? role_id[0] : {role_id: role_id[0]})
    role_id = await trx('role').insert({role:"A",user_id:25}, 'role_id');
    role.push(typeof role_id[0] === 'object' ? role_id[0] : {role_id: role_id[0]})

})

};