var users = {
  login: "Admin",
  password: "12345",
};
var usersObj = JSON.stringify(users);
var login;
var password;

// $(".profile").on("click", function () {
//   if (localStorage.myKey == true) {
//     $(".profile").attr("src", "/profile.php");
//   } это была моя попытка открытия доступа к профилю
// });

$(".submit-js").on("submit", function (event) {
  event.preventDefault();
  login = $(".userName").val();
  password = $(".password").val();
  $(".error").remove();

  if (users.login === login && users.password === password) {
    localStorage.setItem("myKey", usersObj);
    window.location.href = "/profile.php";

    return;
  } else {
    $(".submit-js").prepend(
      `<small class="error text-danger">Неверный логин или пароль</small>`
    );
    this.reset();
  }
});

$(".exit").on("click", function () {
  delete localStorage["myKey"];
});
