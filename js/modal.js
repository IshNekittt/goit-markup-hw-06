(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBth: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    openPhoneModalBtn: document.querySelector("[data-phone-modal-open]"),
    closePhoneModalBth: document.querySelector("[data-phone-modal-close]"),
    phoneModal: document.querySelector("[data-phone-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBth.addEventListener("click", toggleModal);
  refs.openPhoneModalBtn.addEventListener("click", togglePhoneModal);
  refs.closePhoneModalBth.addEventListener("click", togglePhoneModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  function togglePhoneModal() {
    refs.phoneModal.classList.toggle("is-open");
  }
})();
