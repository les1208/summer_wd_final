

const productName = document.querySelectorAll(".itemName");

const price = document.querySelectorAll("#price");

const button = document.querySelectorAll("button");

const cart = [];

const addToCart = () => {
	for (let i = 0; i < 1; i++) {
		cart.push(productName[i].innerHTML)
		cart.push(price[i].innerHTML)
	}
	console.log(cart);
}


function openModal() {
	let modal = document.getElementById("cartModal")
	console.log("button has been clicked");
	modal.style.visibility = "visible";
}

function closeModal() {
	let modal = document.getElementById("cartModal")
	modal.style.visibility = "hidden";

}
