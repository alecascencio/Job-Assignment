//Card Section//

/*console.clear();

const cardsContainer = document.querySelector('.cards');
const cardsContainerInner = document.querySelector('.cards__inner');
const cards = Array.from(document.querySelectorAll('.card'));
const overlay = document.querySelector('.overlay');

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement('div');
  overlayCta.classList.add('cta');
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute('aria-hidden', true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement('div');
  overlayCard.classList.add('card');
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener('pointermove', applyOverlayMask);*/

//Dropdown Selector//

$(function () {
  $('.dropdown > .caption').on('click', function () {
    $('.dropdown').removeClass('open');
    $(this).parent().addClass('open');
  });

  $('.dropdown > .list > .item').on('click', function () {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this)
      .addClass('selected')
      .parent()
      .parent()
      .removeClass('open')
      .children('.caption')
      .text($(this).text());
  });

  $(document).on('keyup', function (evt) {
    if ((evt.keyCode || evt.which) === 27) {
      $('.dropdown').removeClass('open');
    }
  });

  $(document).on('click', function (evt) {
    if ($(evt.target).closest('.dropdown > .caption').length === 0) {
      $('.dropdown').removeClass('open');
    }
  });
});
