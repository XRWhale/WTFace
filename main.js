function generateLotto() {
  const numbers = [];

  while (numbers.length < 7) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  const mainNumbers = numbers.slice(0, 6).sort((a, b) => a - b);
  const bonusNumber = numbers[6];

  displayNumbers(mainNumbers, bonusNumber);
  addToHistory(mainNumbers, bonusNumber);
}

function getColorClass(num) {
  if (num <= 10) return 'range-1';
  if (num <= 20) return 'range-2';
  if (num <= 30) return 'range-3';
  if (num <= 40) return 'range-4';
  return 'range-5';
}

function displayNumbers(mainNumbers, bonusNumber) {
  const container = document.getElementById('lottoNumbers');
  const balls = container.querySelectorAll('.number-ball');

  balls.forEach((ball, index) => {
    ball.classList.remove('range-1', 'range-2', 'range-3', 'range-4', 'range-5', 'empty', 'animate');
  });

  mainNumbers.forEach((num, index) => {
    setTimeout(() => {
      balls[index].textContent = num;
      balls[index].classList.add(getColorClass(num), 'animate');
    }, index * 100);
  });

  setTimeout(() => {
    balls[6].textContent = bonusNumber;
    balls[6].classList.add(getColorClass(bonusNumber), 'animate');
  }, 600);
}

function addToHistory(mainNumbers, bonusNumber) {
  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  const time = new Date().toLocaleTimeString('ko-KR');
  li.textContent = `[${time}] ${mainNumbers.join(', ')} + ${bonusNumber}`;
  historyList.insertBefore(li, historyList.firstChild);

  if (historyList.children.length > 10) {
    historyList.removeChild(historyList.lastChild);
  }
}
