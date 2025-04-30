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
let users = {}; // Temporary user store for demo purpose
let currentUser = null;

function showPage(pageId) {
  document.querySelectorAll('.form-container').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

function signup() {
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPass').value;

  if (email && pass) {
    if (users[email]) {
      alert("User already exists!");
    } else {
      users[email] = pass;
      alert("Registered Successfully!");
      showPage('login');
    }
  } else {
    alert("Please enter both email and password.");
  }
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;

  if (users[email] && users[email] === pass) {
    currentUser = email;
    alert("Login successful!");
    showPage('print');
  } else {
    alert("Invalid login credentials.");
  }
}

function calculatePayment() {
  const pages = parseInt(document.getElementById('pageCount').value);
  const copies = parseInt(document.getElementById('copyCount').value);

  if (pages > 0 && copies > 0) {
    const total = pages * copies * 2; // ₹2 per page
    document.getElementById('amountDisplay').textContent = `Amount: ₹${total}`;
    showPage('payment');
  } else {
    alert("Please enter valid page and copy counts.");
  }
}

function pay() {
  alert("Payment successful! Your documents will be printed.");
  location.reload(); // Reset the app
}

