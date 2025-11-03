function showDetails(name, fuel, trans, price) {
  document.getElementById("carName").textContent = name;
  document.getElementById("fuelType").textContent = fuel;
  document.getElementById("transmission").textContent = trans;
  document.getElementById("price").textContent = price;
  document.getElementById("detailsModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

function scrollToBooking() {
  closeModal();
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your appointment has been booked successfully!");
});