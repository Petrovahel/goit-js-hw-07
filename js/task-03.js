const input = document.getElementById('username');
const greeting = document.getElementById('greeting');

input.addEventListener('input', () => {
  const name = input.value.trim();
  greeting.textContent = name ? `Hello, ${name}!` : 'Hello, Anonymous!';
});

