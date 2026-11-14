document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("form-message");

  if (name !== "" && email !== "") {
    message.textContent = "Thank you for visiting, " + name + "! We will contact you at " + email + ".";
  } else {
    message.textContent = "Please fill in your name and email.";
  }
});

var tableRows = document.querySelectorAll("#menuTable tr");
tableRows.forEach(function (row) {
  row.addEventListener("mouseover", function () {
    row.classList.add("highlight");
  });
  row.addEventListener("mouseout", function () {
    row.classList.remove("highlight");
  });
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

var addons = document.querySelectorAll(".addon");
addons.forEach(function (box) {
  box.addEventListener("change", updateTotal);
});

function updateTotal() {
  var total = 0;
  addons.forEach(function (box) {
    if (box.checked) {
      total += parseInt(box.getAttribute("data-price"));
    }
  });
  document.getElementById("total").textContent = "Total: $" + total;
}

document.getElementById("birth-year").addEventListener("change", function () {
  var birthYear = parseInt(this.value);
  var age = 2026 - birthYear;
  var ageMsg = document.getElementById("age-message");

  if (isNaN(birthYear)) {
    ageMsg.textContent = "";
    return;
  }

  if (age >= 60) {
    ageMsg.textContent = "You qualify for a senior discount!";
  } else if (age <= 22) {
    ageMsg.textContent = "You qualify for a student discount!";
  } else {
    ageMsg.textContent = "No discount applies for your age.";
  }
});

document.getElementById("read-more-btn").addEventListener("click", function () {
  var moreText = document.getElementById("more-text");
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    this.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    this.textContent = "Read More";
  }
});

function filterTable(category) {
  var rows = document.querySelectorAll("#menuTable tr");
  rows.forEach(function (row) {
    if (row.querySelector("th")) {
      return;
    }
    if (category === "all" || row.classList.contains(category)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

var hour = new Date().getHours();
var statusBanner = document.getElementById("status-banner");
if (hour >= 8 && hour < 20) {
  statusBanner.textContent = "We are Open!";
  statusBanner.style.color = "green";
} else {
  statusBanner.textContent = "Closed - Open at 8 AM";
  statusBanner.style.color = "red";
}

document.getElementById("special-notes").addEventListener("input", function () {
  var remaining = 100 - this.value.length;
  document.getElementById("char-count").textContent = remaining + " characters remaining";
});