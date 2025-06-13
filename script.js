
    function changeBottle(color) {
      const bottle = document.getElementById("reboBottle");
      const body = document.body;
        const navbar = document.querySelector(".navbar"); // get navbar element

  const shopIcon = document.getElementById("shopIcon");
const searchIcon = document.getElementById("searchIcon");

      const bottleImages = {
        orange: "images/orange.png",
        lightgreen: "images/light green.png",  // ✅ No space in filename
        white: "images/white.png",
        deepgreen: "images/green.png",
        blue: "images/blue.png"
      };

     const gradients = {
  orange: "linear-gradient(to right, #994d00, #ffba08)",        // dark to light orange
  lightgreen: "linear-gradient(to right, #3a7d2b, #c3f584)",    // dark green to light green
  white: "linear-gradient(to right, #cccccc, #ffffff)",         // gray to white
  deepgreen: "linear-gradient(to right, #003333, #009999)",     // dark to light green
  blue: "linear-gradient(to right, #002e5f, #3a86ff)"           // dark to light blue
};

      if (bottleImages[color] && gradients[color]) {
        bottle.src = bottleImages[color];
        body.style.background = gradients[color];
         navbar.style.background = gradients[color]; 
          if (bottleImages[color] && gradients[color]) {
  bottle.src = bottleImages[color];
  body.style.background = gradients[color];
  navbar.style.background = gradients[color]; 

  if (bottleImages[color] && gradients[color]) {
  bottle.src = bottleImages[color];
  body.style.background = gradients[color];
  navbar.style.background = gradients[color];

  if (color === "white") {
    // 🌤️ Light theme styles
    document.body.style.color = "black";
    document.querySelectorAll(".menu a").forEach(link => link.style.color = "black");

    // 🔄 Navbar icons
    shopIcon.src = "https://img.icons8.com/ios-filled/20/000000/shopping-bag.png";
    searchIcon.src = "https://img.icons8.com/ios-filled/20/000000/search--v1.png";

    // 🎯 Feature icons - BLACK only for white theme
    document.getElementById("iconBrain").src = "https://img.icons8.com/ios/50/000000/brain.png";
    document.getElementById("iconPhone").src = "https://img.icons8.com/ios/50/000000/smartphone.png";
    document.getElementById("iconGlobe").src = "https://img.icons8.com/ios/50/000000/globe--v1.png";

    // 🔘 Button styles
    document.querySelectorAll(".btn.primary").forEach(btn => {
      btn.style.background = "white";
      btn.style.color = "black";
    });

    document.querySelectorAll(".btn.secondary").forEach(btn => {
      btn.style.border = "2px solid black";
      btn.style.color = "black";
    });

  } else {
    // 🌙 Dark theme styles
    document.body.style.color = "white";
    document.querySelectorAll(".menu a").forEach(link => link.style.color = "white");

    // 🔄 Navbar icons - WHITE for all non-white themes
    shopIcon.src = "https://img.icons8.com/ios-filled/20/ffffff/shopping-bag.png";
    searchIcon.src = "https://img.icons8.com/ios-filled/20/ffffff/search--v1.png";

    // 🎯 Feature icons - WHITE for dark themes
    document.getElementById("iconBrain").src = "https://img.icons8.com/ios/50/ffffff/brain.png";
    document.getElementById("iconPhone").src = "https://img.icons8.com/ios/50/ffffff/smartphone.png";
    document.getElementById("iconGlobe").src = "https://img.icons8.com/ios/50/ffffff/globe--v1.png";

    // 🔘 Button styles
    document.querySelectorAll(".btn.primary").forEach(btn => {
      btn.style.background = "white";
      btn.style.color = "#003333";
    });

    document.querySelectorAll(".btn.secondary").forEach(btn => {
      btn.style.border = "2px solid white";
      btn.style.color = "white";
    });
  }
}
          }}}
  