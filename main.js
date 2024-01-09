const header = document.querySelector('#header');
const btn = document.querySelector('button')

displayGrid(16);

btn.addEventListener('click', () => {
  let gridSize = parseInt(prompt('Enter grid size 1-100:'));

  if (isNaN(gridSize) || (gridSize > 100) || (gridSize < 0)) {
    header.textContent = 'Invalid grid size'
  } else {
    header.textContent = 'Grid Size: ' + gridSize + 'x' + gridSize
    displayGrid(gridSize)
  }
});

function displayGrid(size) {
  const body = document.querySelector('#body');
  const side = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight) * .70;
  const elem = side / size;

  //remove current grid
  while (body.firstChild) body.removeChild(body.firstChild);
  
  //create new grid
  for (i=0; i<size; i++) {
    const col = document.createElement('div');
    for (j=0; j<size; j++) {
      const div = document.createElement('div');
      div.className = 'pixel';
      div.style.width = `${elem}px`;
      div.style.height = `${elem}px`;
      col.appendChild(div);
    }
    body.appendChild(col);
  }

  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach(function(pixel) {
    pixel.addEventListener('mouseover', function() {
      pixel.style.backgroundColor = '#a6f3cc';
    });
  });
}