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


//ADD ITEMS TO CART

function addItemToCart(name, cost, qty) { 	//NAME FUNCTION AND PARAMETER

	for (var i in cart) { 				//LOOP THROUGH PROPERTIES OF OBJECTS IN CART
		
		if (cart[i].name === name) {	//TO CHECK FOR DUPLICATE ITEMS
			cart[i].qty += qty;			//INCREASE QTY
			cart[i].cost += cost;								//FIX THIS LINE, USE SUBTOTALS
			return; 					//STOP LOOP AND ACT
		}								//END FUNCTION when IF = TRUE
	}									//END LOOP

	var item = new Item (name, cost, qty); //DECLARE NEW OBJECT IF NOT DUPLICATE
	cart.push(item);					//AND PUSH NEW ITEM INTO CART 
										//ADD ITEMS INTO TABLE on PAGE
	var table = document.getElementById('cart_table');
	var row = table.insertRow(1);
	var nameCell = row.insertCell(0);
	var costCell = row.insertCell(1);
	var qtyCell = row.insertCell(2);
	nameCell.innerHTML = cart[i].name;
	costCell.innerHTML = cart[i].cost;
	qtyCell.innerHTML = cart[i].qty;
}; 



//LOOP THROUGH CART TO PRINT NAME, PRICE, QTY INTO TABLE

// function showCart () {
// 	var table = document.getElementById('cart_table');
// 	for (var i in cart) {
// 		document.write ( "Your " + cart[i].qty + " " + cart[i].name + " will cost you $" + (cart[i].cost).toFixed(2) + " ")
// 	}

// 	return;
// };



function totalCart () {

	var totalCartCost = 0;
	
	for (var i in cart) {
		totalCartCost += cart[i].cost;	
	}

	var eltotal_cell = document.getElementById('total_cell');
	eltotal_cell.innerHTML(totalCartCost);

	// + totalCartCost.toFixed(2) + ". Thank you for shopping with us. Refresh to go back to item menu and add your items in again.")
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

