var cursor = document.querySelector('.cursor');
var onCard = false;

document.querySelector('body').addEventListener('mousemove', e => {
  if(onCard == false){
  cursor.setAttribute(
    'style',
    'top:' + (e.pageY - 15) + 'px;left:' + (e.pageX - 15) + 'px;',
  );
  }
});

var cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.addEventListener('mouseenter', e => {
    onCard = true;
    cursor.setAttribute('style', 'display:none');
  });
  card.addEventListener('mouseleave', e => {
    onCard = false;
    cursor.setAttribute('style', 'display:block');
  });
}
