const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = 'Hey I\'m red!';
redText.style.color = 'red';
container.appendChild(redText);

const blueHeading = document.createElement('h3');
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

const content = document.createElement('div');
content.style.border = '1px solid';
content.style.backgroundColor = 'pink';


contentHeading = document.createElement('h1');
contentHeading.textContent = 'I\'m in a div';

contentText = document.createElement('p');
contentText.textContent = 'ME TOO!';

content.appendChild(contentHeading);
content.appendChild(contentText);

container.appendChild(content);

const btn = document.querySelector('#btn');

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});