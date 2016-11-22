//DECLARE VARIABLES

var cart = [];





// CREATE CONSTRUCTOR
var Item = function (name, cost, qty) {
	this.name = name;
	this.cost = Number(cost);
	this.qty = Number(qty);
	this.subtotal = function () {              //USE FUNCTION FOR MATH
		var subtotal = Number(this.cost * this.qty);
		return subtotal;
	}
	this.totalTax = function() {
		var totalTax = Number(this.subtotal() * 0.06);	//SPECIFY RETURN AS NUMBER
		return totalTax;
	}
	this.totalCost = function() {
		var totalCost = Number(this.totalTax() + this.subtotal());
		return totalCost;
	}
};




//ADD ITEMS TO CART onClick
$(".img-responsive").on('click', function(){

	var name = $(this).data('name');
	var cost = $(this).data('cost');
	var qty = $(this).data('qty');
	// console.log(name)
	// console.log(cost)
	// console.log(qty)

	addItemToCart (name, cost, qty);
});





//addItemToCart ()
function addItemToCart(name, cost, qty) { 	//NAME FUNCTION AND PARAMETER


	for (var i = 0; i < cart.length; i++) { //LOOP THROUGH PROPERTIES OF OBJECTS IN CART

		if (cart[i].name === name) {	//TO CHECK FOR DUPLICATE ITEMS
			cart[i].qty += qty;			//INCREASE QTY

			var updCost = document.getElementById(cart[i].name +"_cost")
			console.log(updCost)
			updCost.innerHTML = cart[i].subtotal().toFixed(2);

			var updQty = document.getElementById(cart[i].name +"_qty")
			updQty.innerHTML = cart[i].qty

			return; 					//STOP LOOP AND ACT
		}								//END FUNCTION when IF = TRUE
	}									//END LOOP

		cart.push(new Item (name, cost, qty));		//DECLARE NEW OBJECT IF NOT DUPLICATE AND PUSH TO CART

		displayCart(cart);


};


//displayCart ()
function displayCart (cart) {

	var table = document.getElementById('table_body');  	//GET ALL PROPERTIES OF ITEM TO REPLACE

	var row = table.insertRow(0);							// CREATE NEW ROW AND CELLS FOR NEW CART ITEM
	var nameCell = row.insertCell(0);
	var costCell = row.insertCell(1);
	var qtyCell = row.insertCell(2);

	for (var i = 0; i < cart.length; i++){

		nameCell.setAttribute("id", cart[i].name + "_checkout");
		costCell.setAttribute("id", cart[i].name + "_cost")
		qtyCell.setAttribute("id", cart[i].name + "_qty")
		nameCell.innerHTML = cart[i].name;
		costCell.innerHTML = cart[i].cost.toFixed(2);
		qtyCell.innerHTML = cart[i].qty;
	}
}




function totalCart () {

	var totalCartCost = 0;
	var subtotal = 0;
	var totalTax = 0;

	for (var i in cart) {
		subtotal += cart[i].subtotal();
		totalTax += cart[i].totalTax();
		totalCartCost += cart[i].totalCost();
	}

	var eltotal_cell = document.getElementById('total_cell');
	eltotal_cell.innerHTML = totalCartCost.toFixed(2);
	var elsubtotal_cell = document.getElementById('subtotal_cell');
	elsubtotal_cell.innerHTML = subtotal.toFixed(2);
	eltotalTax = document.getElementById('totalTax_cell');
	eltotalTax.innerHTML = totalTax.toFixed(2);


	return totalCartCost.toFixed(2);
	return subtotal.toFixed(2);
	return totalTax.toFixed(2);
};












// var add_to_cart_btn = document.getElementsByClass ('add_to_cart');
// add_to_cart_btn.addEventListener ('click', addItemToCart());

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
