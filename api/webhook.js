// Filename: api/webhook.js

module.exports = async (req, res) => {
    const { body } = req;
    const order = JSON.parse(body);
  
    console.log('Order received: ', order);
  
    const isDiscoverySet = order.line_items.some(
      item => item.title === 'Discovery Set'
    );
    
    const hasNoTags = !order.tags || order.tags.length === 0;
  
    if (isDiscoverySet && hasNoTags) {
      console.log('Generating discount code for order: ', order.id);
      // Generate the discount code and send it to Klaviyo
      // ...
    }
  
    res.status(200).send('OK');
  };



  