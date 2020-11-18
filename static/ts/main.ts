var cursor = document.querySelector('.cursor');
var onCard: boolean = false;
var heading: string = '';
var buttons_html: string = '';

document.querySelector('body').addEventListener('mousemove', e => {
  if (onCard == false) {
    cursor.setAttribute(
      'style',
      'top:' + (e.pageY - 15) + 'px;left:' + (e.pageX - 15) + 'px;',
    );
  }
});

var cards = Array.from(document.getElementsByClassName('card'));
var header = document.querySelector('.header');
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];

  // mouse leave a card
  card.addEventListener('mouseenter', e => {
    // changing the header to info of that card
    heading = header.querySelector('h1').innerHTML;
    buttons_html = header.querySelector('p').innerHTML;
    header.querySelector('h1').innerHTML = card.getAttribute('heading');
    header.querySelector('p').innerHTML = card.getAttribute('info');

    // removing mouse on hover
    onCard = true;
    cursor.setAttribute('style', 'display:none');
  });

  // mouse enter a card
  card.addEventListener('mouseleave', e => {
    // setting it back to what it was
    header.querySelector('h1').innerHTML = heading;
    header.querySelector('p').innerHTML = buttons_html;

    // bringing back the cursor
    onCard = false;
    cursor.setAttribute('style', 'display:block');
  });
}
