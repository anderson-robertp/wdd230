const mButton = document.querySelector('#menu');

mButton.addEventListener('click', () => {
    openNav()
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  };

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  };