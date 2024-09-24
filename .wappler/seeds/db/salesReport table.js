exports.seed = async function(knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process branch
    await trx('branch').del();
    var branch = [], branch_id = null;

    // Process salesReport
    await trx('salesReport').del();
    var salesReport = [], salesReport_id = null;
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-07-21T16:00:00.000Z",rep_opening:"30.00",rep_closing:"161.63",rep_expenses:"10.00",rep_remarks:"test",rep_proLoss:"161.60"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-07-21T16:00:00.000Z",rep_opening:"50.00",rep_closing:"148.15",rep_expenses:"23.50",rep_remarks:"test",rep_proLoss:"148.10"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-07-22T16:00:00.000Z",rep_opening:"30.00",rep_closing:"28.00",rep_expenses:"2.00",rep_remarks:"test",rep_proLoss:"-2.00"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-08-05T16:00:00.000Z",rep_opening:"50.00",rep_closing:"40.00",rep_expenses:"10.00",rep_remarks:"",rep_proLoss:"-10.00"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-08-05T16:00:00.000Z",rep_opening:"50.00",rep_closing:"144.16",rep_expenses:"15.00",rep_remarks:"",rep_proLoss:"144.15"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-08-05T16:00:00.000Z",rep_opening:"50.00",rep_closing:"144.16",rep_expenses:"15.00",rep_remarks:"",rep_proLoss:"144.15"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-08-05T16:00:00.000Z",rep_opening:"50.00",rep_closing:"144.16",rep_expenses:"15.00",rep_remarks:"",rep_proLoss:"144.15"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-08-07T16:00:00.000Z",rep_opening:"50.00",rep_closing:"202.15",rep_expenses:"10.00",rep_remarks:"",rep_proLoss:"202.10"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})
    salesReport_id = await trx('salesReport').insert({rep_date:"2024-08-19T16:00:00.000Z",rep_opening:"1000.00",rep_closing:"-62.79",rep_expenses:"80.00",rep_remarks:"",rep_proLoss:"-62.80"}, 'rep_id');
    salesReport.push(typeof salesReport_id[0] === 'object' ? salesReport_id[0] : {rep_id: salesReport_id[0]})

})

};