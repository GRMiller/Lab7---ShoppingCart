//DECLARE VARIABLES

var cart = [];


// DECLARE OBJECTS & PUSH INTO CART

var Item = function (name, cost, qty) {			//CREATE CONSTRUCTOR OBJECT
	this.name = name; 
	this.cost = Number(cost); 
	this.qty = Number(qty);
	this.subtotal = function () {              // THE NEXT 3 PROPERTIES ARE DOING NOTHING IN THIS CODE, JUST ME TRYING TO PUSH MYSELF
		var subtotal = Number(this.cost * this.qty);
		return subtotal;
	}
	this.totalTax = function() {						//USE FUNCTION FOR MATH
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

	for (var i = 0; i < cart.length; i++) { //LOOP THROUGH PROPERTIES OF OBJECTS IN CART
		
		if (cart[i].name === name) {	//TO CHECK FOR DUPLICATE ITEMS
			cart[i].qty += qty;			//INCREASE QTY
			cart[i].cost += cost;		//FIX THIS LINE, USE SUBTOTALS
			
			return; 					//STOP LOOP AND ACT
		}								//END FUNCTION when IF = TRUE
	}									//END LOOP

		cart.push(new Item (name, cost, qty));		//DECLARE NEW OBJECT IF NOT DUPLICATE AND PUSH TO CART
						
	

	var table = document.getElementById('cart_table');  	//GET ALL PROPERTIES OF ITEM TO REPLACE
	var row = table.insertRow(1);							// CREATE NEW ROW AND CELLS FOR NEW CART ITEM
	var nameCell = row.insertCell(0);	
	var costCell = row.insertCell(1);
	var qtyCell = row.insertCell(2);

	/*for (var i = 0; i<cart.length; i++) {    //CREATE LOOP TO DISPLAY UPDATED QTY AND COST IN TABLE
		if (cart[i].name ===name) {
			costcell.innerHTML = cart[i].cost += cost;
			qtyCell.innerHTML = cart[i].qty += qty;
			return;
		}
	}		*/							

	//ADD ITEMS INTO TABLE on PAGE
	
	nameCell.innerHTML = cart[i].name;
	costCell.innerHTML = cart[i].cost.toFixed(2);
	qtyCell.innerHTML = cart[i].qty;

}; 





function totalCart () {

	var totalCartCost = 0;
	
	for (var i in cart) {
		totalCartCost += cart[i].cost;	
	}

	var eltotal_cell = document.getElementById('total_cell');
	eltotal_cell.innerHTML = totalCartCost;

	
	return totalCartCost.toFixed(2);

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

