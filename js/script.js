let labelColor = document.querySelectorAll('.filter-lf-block__label');
let img = document.querySelector('.img__container-img');
let textPrice = document.querySelector('.rg-block__title');
let price = 89990;
let mapImg = {
   '0': 'url(./img/one.png)',
   '2000': 'url(./img/two.jpg)',
   '1000': 'url(./img/tre.jpg)'
}
labelColor.forEach(item => {
   item.onclick = () => {
      labelColor.forEach(i => i.classList.remove(`active-label`));
      item.classList.add(`active-label`);
      let key = +item.getAttribute('data-index');
      img.style.backgroundImage = mapImg[key]
      textPrice.innerHTML = `$${addCommas(price + key)}`
   }
})
/* ------------number-"запитая"------------------------------ */
function addCommas(nStr) {
   nStr += '';
   var x = nStr.split('.');
   var x1 = x[0];
   var x2 = x.length > 1 ? '.' + x[1] : '';
   console.log(x2);
   var rgx = /(\d+)(\d{3})/;
   console.log(rgx);
   while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
   }
   return x1 + x2;
}