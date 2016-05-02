document.addEventListener('DOMContentLoaded', ev => {
  let span = document.createElement('span');
  span.textContent = process.env.NODE_ENV || 'development';
  document.body.appendChild(span);
});
