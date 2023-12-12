  $(document).ready(function () {
    var navbar = $(".navbar.navcolor");
    var scrollThreshold = 350; // Adjust this value based on your preference

    $(window).scroll(function () {
      if ($(this).scrollTop() > scrollThreshold) {
        navbar.removeClass("navcolor").addClass("navcolorscroll");
      } else {
        navbar.removeClass("navcolorscroll").addClass("navcolor");
      }
    });
  });
