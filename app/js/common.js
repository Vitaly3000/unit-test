$(function () {
  function _createModal() {
    const modal = document.createElement('div');
    modal.classList.add('my-modal');
    modal.insertAdjacentHTML(
      'afterbegin',
      `
					<div class="modal-overlay">
							<div class="modal-window">
								<div class="modale-content">
								<div class="modale-window__text">
							Да, у нас есть набор 
							скринкастов, пошаговых 
							инструкций и вспомогательных 
							материалов
					</div>
					<div class="modale-window__subtext">
							Оставьте заявку на прохождение
							юнита и получите все материалы 
					</div>
					<div class='modale-btns'>
					<a href="#" class="modale-btn">Записаться на юнит</a>
     <div class="close">Пропустить</div>
					</div>
					
								</div>
							</div>
					</div>
	`
    );
    document.body.appendChild(modal);
    return modal;
  }
  modal = function () {
    const $modal = _createModal();
    return {
      open() {
        $modal.classList.add('open');
      },
      close() {
        $modal.classList.remove('open');
      },
      destroy() {},
    };
  };
  Modal = modal();
		$('.header-button-modale').on('click',Modal.open)
		$('.modal-overlay').on('click',Modal.close)
});
