let maxScroll = document.body.offsetHeight - window.innerHeight;

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5'); // Fixed typo here
let textSmall = document.getElementById('textSmall');
let chunky = document.getElementById('chunky')
let lasthill = document.getElementById('lasthill')

window.addEventListener('scroll', () => { // Fixed syntax here
    let value = Math.min(window.scrollY, maxScroll);

    text.style.marginTop = value * 2.5 + 'px'; // Fixed 'margintop' to 'marginTop'
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    textSmall.style.marginTop = value * 1.5 + 'px';
    chunky.style.right = value * 0.3 + 'px';
    lasthill.style.left = value * 0.3 + 'px';
});
