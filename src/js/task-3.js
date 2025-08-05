const input = document.getElementById('name-input');
const greeting = document.getElementById('name-output');

input.addEventListener('input', () => {
  const name = input.value.trim();
  greeting.textContent = name ? `${name}` : 'Anonymous';
});

