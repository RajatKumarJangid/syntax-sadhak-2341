function validateDeliveryForm(event) {
    // Get the values of the input fields
    event.preventDefault();
    var NameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var cardNumber= document.getElementById("cardNumber").value;
    var cardValue = document.getElementById("cardex").value;
    var yearValue = document.getElementById("year").value;
    var cvcValue = document.getElementById("CVC").value;
    
    // Checking if any of the required fields are empty
    if (
      NameValue === "" ||
      emailValue === "" ||
      cardNumber === "" ||
      cardValue === "" ||
      yearValue === "" ||
      cvcValue === "" 
      
    ) {
      alert("Please fill in all required fields.");
    } else {
      openPopup();
    }
  }

  var btn = document.querySelector(".btn-close");

  btn.addEventListener("click", ()=> {

        window.location.href = "/send/send-money/send-money.html";
});
let popup=document.getElementById("popup")
function openPopup(){
  document.body.classList.add("blur");
    popup.classList.add("open-popup")
}
function redirectToIndex() {

  window.location.href = "/rohan/index.html"; 
}
function closePopup(){
  document.body.classList.remove("blur");
    popup.classList.remove("open-popup")
    redirectToIndex()

}

// var isWhiteBackground = false;
// function toggleBackgroundColor() {

//   var body = document.body;
//   var form = document.getElementById("paymentForm");
//   if (isWhiteBackground) {
//       body.style.backgroundColor = ''; 
//       form.style.backgroundColor = '';
//   } else {
//       body.style.backgroundColor = 'white';
//       form.style.backgroundColor = 'rgb(39,39,39)';
//   }
//   isWhiteBackground = !isWhiteBackground; 
// }