var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dancing.jpg') 
        {
      myImage.setAttribute ('src','images/firefox2.png');
    } else 
    {
      myImage.setAttribute ('src','images/dancing.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi '+ myName + ', Lets dance!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi '+ storedName + ', Lets dance!';
}

myButton.onclick = function() {
  setUserName();
}