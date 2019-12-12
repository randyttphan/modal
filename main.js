const modal = document.getElementById("simpleModal");
const modalButton = document.getElementById("modalButton");
const closeButton = document.getElementsByClassName("closeButton")[0];

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

const clickOutside = e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

//Listening for open click
modalButton.addEventListener("click", openModal);

//Listening for closing click
closeButton.addEventListener("click", closeModal);

//Listening for clicks outside the modal
window.addEventListener("click", clickOutside);
