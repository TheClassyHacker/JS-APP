const standardShippingCost = 6
const discountedShippingCost = 4
let totalPrice;

function calculateShippingCost(totalPriceParam) {

    let shippingCost;

    if (totalPriceParam <= 10) {
        shippingCost = standardShippingCost;
    } else if (totalPriceParam <= 20) {
        shippingCost = discountedShippingCost;
    } else {
        shippingCost = 0
    }

    console.log(`Shipping cost for you is ${shippingCost}`)
    console.log(`for total price: ${totalPriceParam}`)
    console.log("----------------------")
}

// user starts shopping
totalPrice = 10
// more items added
calculateShippingCost(totalPrice)
totalPrice = 19
// ready to order
calculateShippingCost(totalPrice);

// add one more item
totalPrice = 24
calculateShippingCost(totalPrice);

// place the order