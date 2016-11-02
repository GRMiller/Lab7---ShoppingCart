//DECLARE VARIABLES

var cart = [];


// DECLARE OBJECTS & PUSH INTO CART

var Item = function (name, cost, qty) {				//CREATE CONSTRUCTOR OBJECT
	this.name = name; 
	this.cost = Number(cost.toFixed(2)); 
	this.qty = Number(qty);
	this.subtotal = function () {
		var subtotal = Number(this.cost * this.qty).toFixed(2);
		return subtotal;
	}
	this.totalTax = function() {				//USE FUNCTION FOR MATH
		var totalTax = Number(this.subtotal() * 0.06);	//SPECIFY RETURN AS NUMBER
		return totalTax;
	}
	this.totalCost = function() {
		var totalCost = Number(this.totalTax() + this.subtotal());
		return totalCost;
	}
};

			//TEST
			// var Apple = new Item('Apple', 2.00, 1);
			// cart.push(Apple);
			// Apple.subtotal();
			// var Avocado = new Item('Avocado', 1.50, 1);
			// cart.push(Avocado);

			// console.log(Apple);
			// console.log(Apple.totalCost());



//ADD ITEMS TO CART

function addItemToCart(name, cost, qty) { 	//NAME FUNCTION AND PARAMETER

	for (var i in cart) { 				//LOOP THROUGH CART
		
		if (cart[i].name === name) {	//TO CHECK FOR DUPLICATE ITEMS
			cart[i].qty += qty;			//INCREASE QTY
			cart[i].cost += cost;								//FIX THIS LINE
			return; 					//STOP LOOP AND ACT
		}								//END FUNCTION when IF = TRUE
	}									//END LOOP

	var item = new Item (name, cost, qty); //DECLARE NEW OBJECT IF NOT DUPLICATE
	cart.push(item);						//AND PUSH NEW ITEM INTO CART 
}; 




	//TEST
	// addItemToCart('Apple', 1.05, 1);
	// addItemToCart('Avocado', 1.50, 1);
	// addItemToCart('Broccoli',1.80, 1);
	// addItemToCart('Milk',4.75,1);
	// addItemToCart('Eggs',1.75,12);
	// addItemToCart('Avocado', 1.50, 1);
	// addItemToCart ('Avocado', 3.00, 2)

	// //TEST
	// console.log ("Your " + 
	// 	cart[1].qty + 
	// 	" " + 
	// 	cart[1].name + 
	// 	" will cost $" + 
	// 	cart[1].cost + 
	// 	". Thanks for shopping with us!"); 
		
	// console.log(cart);
			
			//subtotal, totalTax, totalCost IS BROKEN


//LOOP THROUGH CART TO PRINT NAME, PRICE, QTY INTO TABLE

function showCart () {
	for (var i in cart) {
		document.write ( "Your " + cart[i].qty + " " + cart[i].name + " will cost you $" + (cart[i].cost).toFixed(2) + " ")
	}

	return;
};



function totalCart () {

	var totalCartCost = 0;

	for (var i in cart) {
		totalCartCost += cart[i].cost;	
	}

	document.write("Your Total Cost is $" + totalCartCost.toFixed(2) + ". Thank you for shopping with us. Refresh to go back to item menu and add your items in again.")
	return totalCartCost;

};

//removeItemFromCart(name) // Removes one item

//removeItemFromCartAll(name) // Removes all item names

//clearCart() 

//subtotalCost () -> returns subtotal

//totalTax () -> returns total tax

//countCart() -> returns total qty

//totalCart() -> returns totalCost

//listCart() -> array of Item

//saveCart() 

//loadCart()

