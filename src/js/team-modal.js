(() => {
  const refs = {
    openModalLink: document.querySelector(".footer-content__link"),
    closeModalBtn: document.querySelector(".modal-team__close-btn"),
    teamModal: document.querySelector("[data-team-modal]"),
  };

  refs.openModalLink.addEventListener("click", toggleFranchise);
  refs.closeModalBtn.addEventListener("click", toggleFranchise);

  function toggleFranchise() {
    refs.teamModal.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }
})();