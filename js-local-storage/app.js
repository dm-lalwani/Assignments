document.addEventListener("DOMContentLoaded", loadUsers);

function addUser() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let village = document.getElementById("village").value;
  let city = document.getElementById("city").value;

  if (!name || !phone || !village || !city) {
    alert("Please fill in all fields");
    return;
  }

  let user = { name, phone, village, city };
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("village").value = "";
  document.getElementById("city").value = "";

  loadUsers();
}

function loadUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userCards = document.getElementById("userCards");
  userCards.innerHTML = "";

  users.forEach((user, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                    <button class="delete-btn" onclick="deleteUser(${index})">X</button>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Village:</strong> ${user.village}</p>
                    <p><strong>City:</strong> ${user.city}</p>
                `;
    userCards.appendChild(card);
  });
}

function deleteUser(index) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  loadUsers();
}
