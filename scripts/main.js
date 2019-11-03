let iceCream = 'strawberry'
if(iceCream ===  'chocolate') {
    alert ('Yay, I love chocolate ice cream!');
} else {
    alert('Awww, but chocolate is my favorite...');
}

document.querySelector('p1, p2, p3').onclick = function() {
    alert('Ouch! Stop poking me! That HURTS.');
}

document.querySelector('img').onclick = function() {
    alert('Mew, pet me hrrrder bebeee');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/prettykitty.jpg') {
      myImage.setAttribute ('src','images/2cutecats.jpg');
    } else {
      myImage.setAttribute ('src','images/prettykitty.jpg');
    }
}