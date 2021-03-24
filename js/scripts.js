$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const beverage = parseInt($("#beverage").val());
    const flavor = $("input:radio[name=flavor]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
    console.log(beverage);
    console.log(flavor);
    console.log(dob);
    console.log(favoriteColor);

    event.preventDefault();
  });
});