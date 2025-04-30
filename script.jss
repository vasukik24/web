function showPage(id) {
  document.querySelectorAll('.form-container').forEach(div => div.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  if (email && pass) {
    alert("Login successful");
    showPage('print');
  } else {
    alert("Please enter email and password");
  }
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;
  if (email && pass) {
    alert("Signup successful");
    showPage('login');
  } else {
    alert("Please fill all fields");
  }
}

function calculatePayment() {
  const pages = parseInt(document.getElementById("pageCount").value);
  const copies = parseInt(document.getElementById("copyCount").value);
  if (!pages || !copies) {
    alert("Please enter valid page and copy count");
    return;
  }
  const pricePerPage = 2; // ₹2 per page
  const total = pages * copies * pricePerPage;
  document.getElementById("amountDisplay").innerText = Amount: ₹${total};
  showPage("payment");
}

function pay() {
  alert("Payment Successful! Document sent for printing.");
  window.location.reload(); // restart app
}
