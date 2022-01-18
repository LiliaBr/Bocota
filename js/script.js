window.onload = function() {

  const btn = document.getElementById('first');

  btn.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();

    alert('Yo')
  })
}