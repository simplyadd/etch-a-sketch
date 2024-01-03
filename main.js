const container = document.querySelector('#container');

for (i=0; i<16; i++) {
  const col = document.createElement('div');
  for (j=0; j<16; j++) {
    const div = document.createElement('div');
    div.id = 'pixel'
    col.appendChild(div);
  }
  container.appendChild(col);
}


const pixels = document.querySelectorAll('div#pixel');

pixels.forEach(function(pixel) {
  pixel.addEventListener('mouseover', function() {
    pixel.style.backgroundColor = '#a6f3cc';
  });
});
