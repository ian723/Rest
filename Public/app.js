document.getElementById("cart-num").innerHTML = 1;
document.getElementById("counter").value = 1;
//const form= document.getElementById("Form");
//const textarea= document.getElementById("textArea-rev");
//const customer=document.getElementById("name");
const cartNo = document.getElementById("counter");
const myModal = document.querySelector("#mymodal");

function incr() {
  document.getElementById("cart-num").innerHTML++;
}

function countdecr() {
  let sub = document.getElementById("counter");
  if (document.getElementById("counter").value > 1) {
    document.getElementById("counter").value--;
  }
}

function countincr() {
  if (document.getElementById("counter").value < 99) {
    document.getElementById("counter").value++;
  }
}

function AddToCart() {
  document.getElementById("cart-num").innerHTML =
    +document.getElementById("cart-num").innerHTML +
    +document.getElementById("counter").value;
}

function lengthcal() {
  let len = document.getElementById("textArea-rev").value.length;
  if (len <= 500) {
    document.getElementById("rev-length").innerHTML = len;
  }
}

function showForm() {
  var x = document.getElementById("showForm");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hideForm() {
  const details = document.querySelector("#home");
  const reviews = document.querySelector("#reviews");
  let x = document.getElementById("showForm");
  let y = document.getElementById("rev-error");
  x.style.display = "none";
  y.style.display = "none";
  reviews.style.display = "none";
}

function getFocus() {
  let y = document.getElementById("rev-error");
  if (document.getElementById("textArea-rev").value == "") {
    y.style.display = "block";
    document.getElementById("textArea-rev").focus();
  }
}

function SetNameInput() {
  if (document.getElementById("Name-input").value == "") {
    document.getElementById("Name-input").value = "Customer";
  }
}

form.addEventListener("submit", (event) => {
  if ((text.value = "")) {
    let y = document.getElementById("rev-error");
    y.style.display = "block";
    document.getElementById("textArea-rev").focus();
    console.log("1");
  }
});

function checkname() {
  if (document.getElementById("name").value == "") {
    document.getElementById("name").value = "Customer";
  }
}

function displayHome() {
  const details = document.querySelector("#home");
  const reviews = document.querySelector("#reviews");
  reviews.style.display = "none";
  details.style.display = "block";
  console.log("details");
}

function displayReview() {
  const details = document.querySelector("#home");
  const reviews = document.querySelector("#reviews");
  details.style.display = "none";
  reviews.style.display = "block";
  console.log("reviews");
}

$("#myModal").on("shown.bs.modal", function () {
  $("#mymodal").trigger("focus");
});
