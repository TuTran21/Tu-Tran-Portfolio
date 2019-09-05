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
          console.log("hello");
        });
      },
      {
        triggerOnce: true,
        offset: "bottom-in-view"
      }
    );
  });
}); // JQuery end
