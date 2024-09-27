dmx.config({
  "navbar": {
    "clockInStore": [
      {
        "type": "number",
        "name": "user_id"
      },
      {
        "type": "number",
        "name": "clockInTime"
      },
      {
        "type": "number",
        "name": "clockOutTime"
      },
      {
        "type": "text",
        "name": "user_name"
      }
    ]
  },
  "admin_order": {
    "orderdetails": {
      "meta": [
        {
          "type": "number",
          "name": "ord_id"
        },
        {
          "type": "number",
          "name": "pro_id"
        },
        {
          "type": "text",
          "name": "pro_name"
        },
        {
          "type": "number",
          "name": "pro_price"
        },
        {
          "type": "number",
          "name": "detOrd_quantity"
        }
      ],
      "outputType": "array"
    }
  }
});
