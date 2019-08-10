$(function () {
  var navMain = $("#navbarsExampleDefault");
  navbMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});
