

const socket = io();
const tesseract = require('node-tesseract');

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');




var sendtext = document.getElementById("Text").tesseract;

recognition.addEventListener('result', (sendtext) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  outputYou.textContent = text;
  console.log('Confidence: ' + sendtext.results[0][0].confidence);

  socket.emit('chat message', text);
});


// need to read text 

// sockets.



socket.on('bot reply', function(replyText) {
  synthVoice(replyText);

  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = replyText;
});
