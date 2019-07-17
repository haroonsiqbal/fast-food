const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        if (meal === "chickenCombo" || meal === "burgerCombo" || meal === "fishEntree") {
            this.orders.push(meal);
        }
    },
}

const chickenCombo = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Large"
}

const burgerCombo = {
    sandwichType: "Hamburger",
    fries: true,
    drinkSize: "Medium"
}

const fishEntree = {
    sandwichType: "Fish",
    fries: false,
    drinkSize: "Small"
}

// Place an order
restaurant.placeOrder("chickenCombo");
restaurant.placeOrder("filetMignon");
restaurant.placeOrder("burgerCombo");

// Invoke the function to return the list of all orders

const result = restaurant.orders;

// Output all orders to the console using console.table()

console.table(result);