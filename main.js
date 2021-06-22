var reasons = [
  "Hey preety lady you are Gorgeous",
  "You define the Elegence, love; no matter you are full of it ",
  "A very graceful lady I have ever met with who is very pure by heart and soul",
  "A very loving dearest aunty whom I can share anything without thinking and go on...",
  "A very positive and strong woman who carries just Happiness",
  "You are truely inspirational who always stood behind us;, no matter; what kind of time we had    LOVE YOU",
  " You deserve lot of Love, Respect, FOR WHAT YOU DID and made us happy in the bad times as well thanks a lot aunty and wish you the bestest birthday ever "
 
];

var images = [
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.jpeg",
  "image7.jpeg",
  "image8.jpeg",
  "image9.jpeg",
];

var i = 0;
function nextslide() 
{  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
  document.getElementById("audio").play();
 
}

