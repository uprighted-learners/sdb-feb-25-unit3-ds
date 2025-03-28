const menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25,

    order: function(orderPlaced) {
        let orderSplit = orderPlaced.split(", ")
        let sum = 0
        for (i of orderSplit) {
            if (!this[i]) {
                console.log(`${i} is not on the menu`)
            } else {
                sum += this[i]
            }
        }
        console.log(`Your total is ${sum}`)
    },

    total(orderPlaced) {
        let sum = 0
        orderPlaced
            .split(", ")
            .forEach(i => sum += this[i])
        return sum
    }
}

console.log(menu.total("burger, salad"))

