document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('magicButton');
  const message = document.getElementById('message');

  button.addEventListener('click', function () {
    message.textContent = '🎉 You clicked the button! Have a great day!';
  });
});
