export const Modal = (
  title: string,
  children: HTMLElement,
  btn: { text: string; onClick: () => void }
) => {
  const node = document.createElement('div');
  node.className = 'modal';

  node.innerHTML = `
    <div class="modal__content">
      <div class="modal__title">
        ${title}
      </div>
      <div class="modal__wrap"></div>
      <div class="modal__btn btn">Старт</div>
    </div>
  `;

  const modalBtn = node.querySelector('.modal__btn');
  const modalContent = node.querySelector('.modal__wrap');

  modalContent?.append(children);
  if (modalBtn) {
    modalBtn.innerHTML = btn.text;
  }
  modalBtn?.addEventListener('click', btn.onClick);
  return node;
};
