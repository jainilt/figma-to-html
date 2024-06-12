$(document).ready(function() {
  // Function to handle CSS based on screen width
  function handleCSS() {
      var desktopCSS = $("#desktop-css");
      var mobileCSS = $("#mobile-css");
      // Check if the screen width is less than 768px (adjust as needed)
      if ($(window).width() < 768) {
          // Load mobile CSS if it's not already loaded
          if (!mobileCSS.length) {
              $("head").append('<link rel="stylesheet" href="mobile-css.css" id="mobile-css">');
          }
          // Remove desktop CSS if it exists
          if (desktopCSS.length) {
              desktopCSS.remove();
          }
      } else {
          // Remove mobile CSS if it exists
          if (mobileCSS.length) {
              mobileCSS.remove();
          }
          // Load desktop CSS if it's not already loaded
          if (!desktopCSS.length) {
              $("head").append('<link rel="stylesheet" href="style.css" id="desktop-css">');
          }
      }
  }

  // Call handleCSS initially and on window resize
  $(window).on('load resize', function() {
      handleCSS();
  });
});