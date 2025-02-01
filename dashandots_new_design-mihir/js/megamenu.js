function toggleMenu(menuItem, contentToShow, contentToHide1, contentToHide2, contentToHide3) {
  $(menuItem).click(function (event) {
    event.stopPropagation()
    $(contentToShow).addClass("d-block").removeClass("d-none");
    $(contentToHide1).removeClass("d-block").addClass("d-none");
    $(contentToHide2).removeClass("d-block").addClass("d-none");
    $(contentToHide3).removeClass("d-block").addClass("d-none");
  });
}
function navigateToPage(page){
  window.location.href = page;
}
$(document).ready(function () {
  toggleMenu("#overview", "#overview-content", "#industries-content", "#service-content", "#technologies-content");
  toggleMenu("#industries", "#industries-content", "#overview-content", "#service-content", "#technologies-content");
  toggleMenu("#services", "#service-content", "#industries-content", "#overview-content", "#technologies-content");
  toggleMenu("#technologies", "#technologies-content", "#service-content", "#industries-content", "#overview-content");

  toggleMenu("#aboutUs", "#over-content", "#gallery-content", "#team-content");
  toggleMenu("#team", "#team-content", "#gallery-content", "#over-content");
  toggleMenu("#gallery", "#gallery-content", "#team-content", "#over-content");
});
