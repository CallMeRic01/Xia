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

    // Process order
    await trx('order').del();
    var order = [], order_id = null;
    order_id = await trx('order').insert({ord_date:"2024-07-01T05:49:39.000Z",ord_totalAmount:"69.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00",ord_quantity:3}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:34:36.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:34:40.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:34:48.000Z",ord_totalAmount:"36.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:34:54.000Z",ord_totalAmount:"21.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:35:02.000Z",ord_totalAmount:"21.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"22.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:35:03.000Z",ord_totalAmount:"21.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"22.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:35:03.000Z",ord_totalAmount:"21.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"22.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:35:03.000Z",ord_totalAmount:"21.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"22.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:35:03.000Z",ord_totalAmount:"21.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"22.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:36:15.000Z",ord_totalAmount:"36.20",ord_payMethod:"Grab",ord_isTA:1,ord_paidCash:"22.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:38:16.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:38:21.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:40:59.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:41:02.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:42:29.000Z",ord_totalAmount:"121.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:21.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:24.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:40.000Z",ord_totalAmount:"35.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:41.000Z",ord_totalAmount:"35.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:41.000Z",ord_totalAmount:"35.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:41.000Z",ord_totalAmount:"35.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:42.000Z",ord_totalAmount:"35.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:48.000Z",ord_totalAmount:"35.00",ord_payMethod:"Cash",ord_paidCash:"36.00",ord_changeAmount:"1.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:50.000Z",ord_totalAmount:"35.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"36.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:43:57.000Z",ord_totalAmount:"58.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"60.00",ord_changeAmount:"1.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-01T08:45:06.000Z",ord_totalAmount:"440.20",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T01:42:37.000Z",ord_totalAmount:"44.20",ord_payMethod:"Grab",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T01:55:31.000Z",ord_totalAmount:"226.00",ord_payMethod:"Cash",ord_paidCash:"300.00",ord_changeAmount:"74.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:15:17.000Z",ord_totalAmount:"9.00",ord_payMethod:"Cash",ord_paidCash:"11.00",ord_changeAmount:"2.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:15:20.000Z",ord_totalAmount:"9.00",ord_payMethod:"Cash",ord_paidCash:"10.00",ord_changeAmount:"1.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:15:22.000Z",ord_totalAmount:"9.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"10.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:15:25.000Z",ord_totalAmount:"9.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"10.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:17:34.000Z",ord_totalAmount:"23.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:17:37.000Z",ord_totalAmount:"46.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:17:44.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T03:17:47.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T04:09:15.000Z",ord_totalAmount:"9.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T05:52:30.000Z",ord_totalAmount:"9.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T05:53:13.000Z",ord_totalAmount:"18.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T05:55:26.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T05:55:29.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T05:55:39.000Z",ord_totalAmount:"47.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:09:19.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:09:22.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:09:23.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:10:02.000Z",ord_totalAmount:"21.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:10:04.000Z",ord_totalAmount:"33.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:10:33.000Z",ord_totalAmount:"21.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:10:35.000Z",ord_totalAmount:"33.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:10:57.000Z",ord_totalAmount:"33.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:10:59.000Z",ord_totalAmount:"21.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:11:05.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:11:08.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:15:25.000Z",ord_totalAmount:"23.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:17:06.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:18:47.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:19:00.000Z",ord_totalAmount:"56.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:20:05.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:20:08.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:21:35.000Z",ord_totalAmount:"32.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:21:38.000Z",ord_totalAmount:"41.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:21:46.000Z",ord_totalAmount:"42.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:22:17.000Z",ord_totalAmount:"42.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:22:19.000Z",ord_totalAmount:"54.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:06.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:08.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:12.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:14.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:14.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:15.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:15.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:15.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:15.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:15.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:16.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:25:20.000Z",ord_totalAmount:"18.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:20.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:22.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:23.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:23.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:23.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:23.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:23.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:26.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:28.000Z",ord_totalAmount:"30.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:28.000Z",ord_totalAmount:"30.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:32.000Z",ord_totalAmount:"53.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:32.000Z",ord_totalAmount:"53.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:45:32.000Z",ord_totalAmount:"53.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:34.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:39.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:40.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:42.000Z",ord_totalAmount:"53.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:46.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:47.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:47.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:47.000Z",ord_totalAmount:"9.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:46:49.000Z",ord_totalAmount:"18.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:06.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:07.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:07.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:07.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:07.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:07.000Z",ord_totalAmount:"21.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:10.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:11.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:11.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:48:11.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:49:24.000Z",ord_totalAmount:"23.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T06:49:26.000Z",ord_totalAmount:"46.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-02T07:15:57.000Z",ord_totalAmount:"90.00",ord_payMethod:"Cash",ord_paidCash:"100.00",ord_changeAmount:"10.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-03T09:23:25.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-03T09:23:28.000Z",ord_totalAmount:"38.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:09:52.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:09:54.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:10:32.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:10:34.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:35:37.000Z",ord_totalAmount:"27.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:35:40.000Z",ord_totalAmount:"32.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:35:42.000Z",ord_totalAmount:"37.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:35:47.000Z",ord_totalAmount:"59.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:38:54.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:38:56.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:39:07.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:39:09.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:16.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:18.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:19.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:22.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:26.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:26.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:26.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:26.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:28.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:41:28.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:42:25.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:42:27.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:42:31.000Z",ord_totalAmount:"27.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:42:33.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:43:52.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:43:54.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:44:13.000Z",ord_totalAmount:"32.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:44:16.000Z",ord_totalAmount:"27.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:44:47.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:44:49.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:45:35.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:45:37.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:49:28.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:49:31.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:49:43.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:49:45.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:49:47.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:52:18.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:52:23.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:52:26.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:52:29.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:52:31.000Z",ord_totalAmount:"54.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:58:44.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T02:58:46.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:36:57.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:36:59.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:44:51.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:44:53.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:44:58.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:44:59.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:44:59.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:44:59.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:45:00.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:48:12.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:48:16.000Z",ord_totalAmount:"0.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:48:20.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:48:23.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:52:29.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:53:55.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:53:59.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:54:02.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:54:02.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:54:02.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:54:03.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:54:17.000Z",ord_totalAmount:"12.00",ord_payMethod:"Cash",ord_paidCash:"13.00",ord_changeAmount:"1.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T03:58:45.000Z",ord_totalAmount:"0.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:00:13.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:00:15.000Z",ord_totalAmount:"0.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:00:19.000Z",ord_totalAmount:"5.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:00:21.000Z",ord_totalAmount:"5.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:33.000Z",ord_totalAmount:"22.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:36.000Z",ord_totalAmount:"22.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:38.000Z",ord_totalAmount:"44.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:43.000Z",ord_totalAmount:"27.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:46.000Z",ord_totalAmount:"32.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:48.000Z",ord_totalAmount:"54.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:48.000Z",ord_totalAmount:"54.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:48.000Z",ord_totalAmount:"54.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:05:49.000Z",ord_totalAmount:"54.20",ord_payMethod:"TnG",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:08:36.000Z",ord_totalAmount:"88.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"99.00",ord_changeAmount:"10.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:11:10.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:11:39.000Z",ord_totalAmount:"44.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"45.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:17:39.000Z",ord_totalAmount:"71.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:17:44.000Z",ord_totalAmount:"27.00",ord_payMethod:"Grab",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:18:18.000Z",ord_totalAmount:"55.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:18:29.000Z",ord_totalAmount:"67.00",ord_payMethod:"Cash",ord_paidCash:"68.00",ord_changeAmount:"1.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:18:46.000Z",ord_totalAmount:"274.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"275.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:19:03.000Z",ord_totalAmount:"22.20",ord_payMethod:"Cash",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:20:35.000Z",ord_totalAmount:"44.00",ord_payMethod:"Cash",ord_paidCash:"45.00",ord_changeAmount:"1.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:42:53.000Z",ord_totalAmount:"27.00",ord_payMethod:"Cash",ord_paidCash:"28.00",ord_changeAmount:"1.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:46:31.000Z",ord_totalAmount:"22.00",ord_payMethod:"Cash",ord_paidCash:"24.00",ord_changeAmount:"2.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T04:51:12.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T06:21:48.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T06:23:49.000Z",ord_totalAmount:"33.00",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T06:32:27.000Z",ord_totalAmount:"20.90",ord_payMethod:"TnG",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:34:40.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:34:43.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:34:43.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:34:43.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:34:44.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:34:44.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:56:41.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:57:08.000Z",ord_totalAmount:"32.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T08:57:24.000Z",ord_totalAmount:"76.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T09:03:16.000Z",ord_totalAmount:"0.00",ord_payMethod:"Cash",ord_dis:"100.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-04T09:07:07.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-05T01:46:30.000Z",ord_totalAmount:"76.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-05T01:52:37.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-05T03:10:05.000Z",ord_totalAmount:"6.00",ord_payMethod:"TnG",ord_dis:"50.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-05T08:19:52.000Z",ord_totalAmount:"22.20",ord_payMethod:"Cash",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"23.00",ord_changeAmount:"0.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:11:42.000Z",ord_totalAmount:"39.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:18:21.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:19:12.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:22:12.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:27:30.000Z",ord_totalAmount:"59.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:30:23.000Z",ord_totalAmount:"59.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:30:29.000Z",ord_totalAmount:"59.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:30:47.000Z",ord_totalAmount:"59.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:35:51.000Z",ord_totalAmount:"220.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:38:24.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T03:53:43.000Z",ord_totalAmount:"154.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:40:27.000Z",ord_totalAmount:"132.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:40:59.000Z",ord_totalAmount:"132.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:41:02.000Z",ord_totalAmount:"132.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:42:01.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:42:03.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:42:03.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:43:13.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:50:13.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:50:32.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:04.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:06.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:06.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:07.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:07.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:07.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:07.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:07.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:07.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:08.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:09.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:09.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:09.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:09.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:09.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:09.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:10.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:11.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:11.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T04:57:18.000Z",ord_totalAmount:"110.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T05:00:41.000Z",ord_totalAmount:"110.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T05:04:51.000Z",ord_totalAmount:"616.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T05:38:24.000Z",ord_totalAmount:"312.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T05:42:54.000Z",ord_totalAmount:"12.70",ord_payMethod:"Cash",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"13.00",ord_changeAmount:"0.30"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T05:44:03.000Z",ord_totalAmount:"35.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T05:54:13.000Z",ord_totalAmount:"20.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T06:05:59.000Z",ord_totalAmount:"10.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T06:11:35.000Z",ord_totalAmount:"10.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T06:32:23.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T08:42:07.000Z",ord_totalAmount:"112.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-09T09:22:50.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-11T08:09:48.000Z",ord_totalAmount:"10.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-16T04:39:00.000Z",ord_totalAmount:"23.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-17T06:06:55.000Z",ord_totalAmount:"88.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-17T06:08:44.000Z",ord_totalAmount:"15.20",ord_payMethod:"TnG",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-17T06:27:12.000Z",ord_totalAmount:"201.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-17T08:20:28.000Z",ord_totalAmount:"88.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-18T07:19:54.000Z",ord_totalAmount:"29.70",ord_payMethod:"Cash",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"30.00",ord_changeAmount:"0.30"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T02:01:16.000Z",ord_totalAmount:"91.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T02:07:00.000Z",ord_totalAmount:"1100.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T03:16:12.000Z",ord_totalAmount:"29.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T03:16:17.000Z",ord_totalAmount:"6.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T03:17:42.000Z",ord_totalAmount:"17.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T05:37:26.000Z",ord_totalAmount:"11.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T05:37:29.000Z",ord_totalAmount:"6.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T05:37:32.000Z",ord_totalAmount:"11.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T05:37:34.000Z",ord_totalAmount:"11.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T05:37:36.000Z",ord_totalAmount:"11.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-19T05:37:39.000Z",ord_totalAmount:"11.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-22T01:58:52.000Z",ord_totalAmount:"22.20",ord_payMethod:"TnG",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-22T03:53:18.000Z",ord_totalAmount:"16.20",ord_payMethod:"Grab",ord_dis:"0.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-22T03:57:23.000Z",ord_totalAmount:"11.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-22T08:18:17.000Z",ord_totalAmount:"100.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-22T08:41:26.000Z",ord_totalAmount:"22.20",ord_payMethod:"TnG",ord_dis:"0.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-23T02:31:43.000Z",ord_totalAmount:"191.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-23T05:48:02.000Z",ord_totalAmount:"90.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-07-25T03:05:02.000Z",ord_totalAmount:"27.50",ord_payMethod:"Cash",ord_dis:"50.00",ord_paidCash:"80.00",ord_changeAmount:"52.50"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-05T04:09:18.000Z",ord_totalAmount:"8.70",ord_payMethod:"Grab",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-06T03:31:30.000Z",ord_totalAmount:"78.95",ord_payMethod:"TnG",ord_dis:"25.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-06T03:31:43.000Z",ord_totalAmount:"12.20",ord_payMethod:"TnG",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-06T03:37:02.000Z",ord_totalAmount:"68.00",ord_payMethod:"Cash",ord_dis:"0.00",ord_paidCash:"80.00",ord_changeAmount:"12.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-08T06:45:40.000Z",ord_totalAmount:"16.40",ord_payMethod:"Cash",ord_dis:"10.00",ord_isTA:1,ord_paidCash:"18.00",ord_changeAmount:"1.60"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-08T08:05:33.000Z",ord_totalAmount:"13.70",ord_payMethod:"TnG",ord_dis:"10.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-08T08:05:56.000Z",ord_totalAmount:"154.00",ord_payMethod:"Cash",ord_dis:"0.00",ord_paidCash:"160.00",ord_changeAmount:"6.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-08T08:08:54.000Z",ord_totalAmount:"22.00",ord_payMethod:"Cash",ord_dis:"0.00",ord_paidCash:"22.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-08T08:09:28.000Z",ord_totalAmount:"6.00",ord_payMethod:"Cash",ord_dis:"50.00",ord_paidCash:"10.00",ord_changeAmount:"4.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T02:55:36.000Z",ord_totalAmount:"10.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:31:54.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:35:38.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:12.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:22.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:29.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:30.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:30.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:34.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:34.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:34.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:34.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:35.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:36:47.000Z",ord_totalAmount:"10.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:38:48.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:39:02.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:46:50.000Z",ord_totalAmount:"95.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:49:10.000Z",ord_totalAmount:"61.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T03:55:00.000Z",ord_totalAmount:"76.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:01:02.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:01:05.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:01:28.000Z",ord_totalAmount:"17.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:01:32.000Z",ord_totalAmount:"17.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:01:39.000Z",ord_totalAmount:"17.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:02:51.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:30:33.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:33:44.000Z",ord_totalAmount:"39.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:34:13.000Z",ord_totalAmount:"56.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:35:24.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:42:50.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:42:54.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:44:09.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:44:11.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:44:11.000Z",ord_totalAmount:"56.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T04:46:01.000Z",ord_totalAmount:"56.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T05:49:03.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T05:49:25.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T05:50:25.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:15:39.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:24.000Z",ord_totalAmount:"49.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:40.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:44.000Z",ord_totalAmount:"49.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:50.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:51.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:52.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:52.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:52.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:52.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:53.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:54.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:55.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:55.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:55.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:55.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:55.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:56.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:57.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:58.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:58.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:58.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:58.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:58.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:58.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:59.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:59.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:59.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:59.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:59.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:17:59.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:18:00.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:18:00.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:18:00.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:18:00.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:18:00.000Z",ord_totalAmount:"5.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:25:21.000Z",ord_totalAmount:"51.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:25:23.000Z",ord_totalAmount:"51.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:25:24.000Z",ord_totalAmount:"51.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:25:25.000Z",ord_totalAmount:"51.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:25:26.000Z",ord_totalAmount:"51.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T06:31:19.000Z",ord_totalAmount:"51.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:11:49.000Z",ord_totalAmount:"32.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:16:15.000Z",ord_totalAmount:"83.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:21:29.000Z",ord_totalAmount:"83.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:31:17.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:34:46.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:35:18.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:36:37.000Z",ord_totalAmount:"44.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:40:37.000Z",ord_totalAmount:"76.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:42:34.000Z",ord_totalAmount:"76.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:42:37.000Z",ord_totalAmount:"76.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T07:42:49.000Z",ord_totalAmount:"76.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:26:39.000Z",ord_totalAmount:"76.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:27:00.000Z",ord_totalAmount:"32.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:27:13.000Z",ord_totalAmount:"39.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:28:05.000Z",ord_totalAmount:"39.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:28:40.000Z",ord_totalAmount:"27.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:42:39.000Z",ord_totalAmount:"2.50",ord_payMethod:"Grab",ord_dis:"50.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:48:28.000Z",ord_totalAmount:"34.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T08:48:59.000Z",ord_totalAmount:"34.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:08:26.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:10:23.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:10:24.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:10:25.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:11:08.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:11:17.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:11:18.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:11:59.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:12:01.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:12:03.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:12:03.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:12:04.000Z",ord_totalAmount:"61.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:12:14.000Z",ord_totalAmount:"61.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:12:55.000Z",ord_totalAmount:"61.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:13:59.000Z",ord_totalAmount:"32.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:14:14.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:14:50.000Z",ord_totalAmount:"27.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:15:06.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:15:52.000Z",ord_totalAmount:"10.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:16:09.000Z",ord_totalAmount:"5.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:18:29.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:19:47.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:20:16.000Z",ord_totalAmount:"5.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:20:31.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:22:50.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-12T09:23:16.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:25:57.000Z",ord_totalAmount:"34.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:27:16.000Z",ord_totalAmount:"34.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:50:21.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:52:46.000Z",ord_totalAmount:"66.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:52:58.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:53:07.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:54:19.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:54:20.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:54:41.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:54:42.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:54:43.000Z",ord_totalAmount:"22.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:57:07.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T06:59:17.000Z",ord_totalAmount:"46.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T07:00:37.000Z",ord_totalAmount:"44.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T07:01:49.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-13T07:21:03.000Z",ord_totalAmount:"39.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-14T07:52:30.000Z",ord_totalAmount:"10.00",ord_payMethod:"Cash",ord_dis:"0.00",ord_paidCash:"10.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T02:42:33.000Z",ord_totalAmount:"7.00",ord_payMethod:"TnG",ord_dis:"5.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T02:44:56.000Z",ord_totalAmount:"65.00",ord_payMethod:"Grab",ord_dis:"5.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T02:45:26.000Z",ord_totalAmount:"11.40",ord_payMethod:"TnG",ord_dis:"5.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T02:49:19.000Z",ord_totalAmount:"6.00",ord_payMethod:"Grab",ord_dis:"6.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T02:54:50.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T03:02:38.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T03:03:19.000Z",ord_totalAmount:"22.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T03:47:26.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T04:27:12.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"50.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T04:33:06.000Z",ord_totalAmount:"12.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T04:33:16.000Z",ord_totalAmount:"12.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T04:34:31.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T04:34:52.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-15T04:34:54.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T03:30:36.000Z",ord_totalAmount:"17.20",ord_payMethod:"Cash",ord_dis:"50.00",ord_isTA:1,ord_paidCash:"54.00",ord_changeAmount:"36.80"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T04:24:03.000Z",ord_totalAmount:"6.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T04:24:05.000Z",ord_totalAmount:"6.20",ord_payMethod:"TnG",ord_dis:"0.00",ord_isTA:1,ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T04:24:10.000Z",ord_totalAmount:"6.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T04:27:41.000Z",ord_totalAmount:"12.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T04:27:50.000Z",ord_totalAmount:"6.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T05:32:41.000Z",ord_totalAmount:"12.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T05:58:06.000Z",ord_totalAmount:"12.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T05:58:26.000Z",ord_totalAmount:"12.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T05:59:09.000Z",ord_totalAmount:"6.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T06:54:58.000Z",ord_totalAmount:"275.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-08-20T08:26:39.000Z",ord_totalAmount:"213.00",ord_payMethod:"Grab",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({ord_date:"2024-09-05T07:11:29.000Z",ord_totalAmount:"5.00",ord_payMethod:"TnG",ord_dis:"0.00",ord_paidCash:"0.00",ord_changeAmount:"0.00"}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})
    order_id = await trx('order').insert({}, 'ord_id');
    order.push(typeof order_id[0] === 'object' ? order_id[0] : {ord_id: order_id[0]})

    // Process payment
    await trx('payment').del();
    var payment = [], payment_id = null;

})

};