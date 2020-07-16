document
    .querySelector('#items')
    .addEventListener('wheel', e => e.target.scrollBy(e.deltaY > 0 ? 300 : -300, 0))