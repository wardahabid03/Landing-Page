
  // JavaScript to toggle the navigation menu
  document.addEventListener('DOMContentLoaded', function() {
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let ul = document.querySelector('ul');

    hamburgerMenu.addEventListener('click', function() {
        
      ul.classList.toggle('show');
      console.log("okay");
    })
  });



        // document.body.addEventListener("click", function () {
        //     // Navbar ko hide karne ke liye CSS display property ka istemal karen
        //     var navbar = document.getElementById("nav-ul");
        //     navbar.style.display = "none";
        // });


