jQuery(function($) {
  "use strict";
  // --------------------------------------------------------------------
  // PreLoader
  // --------------------------------------------------------------------

  (function() {
    $("#preloader")
      .delay(200)
      .fadeOut("slow");
  })();

  // Scroll progress
  var pageProgress = function() {
    $(window).scroll(function() {
      var wintop = $(window).scrollTop(),
        docheight = $("#main-wrapper").height(),
        winheight = $(window).height();
      // console.log(wintop);
      var totalScroll = (wintop / (docheight - winheight)) * 100;
      // console.log("total scroll" + totalScroll);
      $(".PageScroll_progressBar").css("width", totalScroll + "%");
      // Back to top
      if (totalScroll > 5) {
        $(".btn-toTop").addClass("show");
      } else {
        $(".btn-toTop").removeClass("show");
      }

      $(".btn-toTop").bind("click", function(event) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: 0
            },
            500
          );
      });
    });
  };
  pageProgress();
  // Onepage scroll
  // Example:
  //<a class="page-scroll" href="#contact">Contact</a>
  // <section id="contact" class="gray-section contact">
  $(".page-scroll").bind("click", function(event) {
    var link = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#" + link.attr("scrollTo")).offset().top - 20
        },
        500
      );
  });
  // --------------------------------------------------------------------
  // Sticky Sidebar
  // --------------------------------------------------------------------

  $(".left-col-block, .right-col-block").theiaStickySidebar();
  // Progress bar
  $(".progress-item").each(function() {
    $(this).waypoint(
      function() {
        var progressBar = $(".progress-bar");
        progressBar.each(function(indx) {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      },
      {
        triggerOnce: true,
        offset: "bottom-in-view"
      }
    );
  });
}); // JQuery end
