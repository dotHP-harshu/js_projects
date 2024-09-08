let btn = document.getElementById('btn');
let msg = document.getElementById('msg');
let theme = '';
let localTheme = localStorage.getItem('theme');

// Set the initial theme based on local storage
window.addEventListener('load', () => {
  if (localTheme === 'light') {
    lightTheme();
  } else {
    darkTheme();
  }
});

const themeChange = function() {
  if (theme === 'light') {
    darkTheme();
  } else {
    lightTheme();
  }
  localStorage.setItem('theme', theme);
}

const lightTheme = () => {
  btn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
  msg.textContent = 'This is light mode.';
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  theme = 'light';
}

const darkTheme = () => {
  btn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  msg.textContent = 'This is dark mode.';
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  theme = 'dark';
}

btn.addEventListener('click', themeChange);
