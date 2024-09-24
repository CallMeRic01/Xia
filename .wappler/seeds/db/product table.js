exports.seed = async function(knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process product
    await trx('product').del();
    var product = [], product_id = null;
    product_id = await trx('product').insert({pro_name:"almond",pro_price:"22.00",pro_desc:"sweet sweet",pro_stat:1,pro_stock:9982,pro_image:"Sweet_Almond.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})
    product_id = await trx('product').insert({pro_name:"souppp",pro_price:"11.00",pro_desc:"111",pro_stat:1,pro_stock:9976,pro_image:"Soya_Longan_Pudding_8.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})
    product_id = await trx('product').insert({pro_name:"22",pro_price:"12.00",pro_desc:"12221",pro_stat:1,pro_stock:9985,pro_image:"Mango_Sago.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})
    product_id = await trx('product').insert({pro_name:"soupa",pro_price:"6.00",pro_desc:"beanna",pro_stat:1,pro_stock:9984,pro_image:"RedBean_Soup.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})
    product_id = await trx('product').insert({pro_name:"yappa",pro_price:"5.00",pro_desc:"sago",pro_stat:1,pro_stock:9961,pro_image:"Mango_Sago_1.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})
    product_id = await trx('product').insert({pro_name:"test",pro_price:"22.00",pro_desc:"jelyy",pro_stat:1,pro_stock:9940,pro_image:"bubur_chacha.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})
    product_id = await trx('product').insert({pro_name:"好",pro_price:"17.00",pro_desc:"很甜",pro_stat:1,pro_stock:9952,pro_image:"MungBean_Soup.jpeg"}, 'pro_id');
    product.push(typeof product_id[0] === 'object' ? product_id[0] : {pro_id: product_id[0]})

    // Process productByDay
    await trx('productByDay').del();
    var productByDay = [], productByDay_id = null;
    productByDay_id = await trx('productByDay').insert({pd_day:"Monday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Monday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Monday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Friday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Friday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Friday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Thursday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Wednesday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Wednesday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Wednesday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Tuesday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Tuesday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})
    productByDay_id = await trx('productByDay').insert({pd_day:"Tuesday",pro_id:product[-1]['pro_id']}, 'pd_id');
    productByDay.push(typeof productByDay_id[0] === 'object' ? productByDay_id[0] : {pd_id: productByDay_id[0]})

})

};