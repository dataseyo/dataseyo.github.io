let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat1.jpg') {
      myImage.setAttribute('src','images/bernie1.jpg');
    } else {
      myImage.setAttribute('src','images/cat1.jpg');
    } 
}