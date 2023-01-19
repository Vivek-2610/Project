function password() {
  var v =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>?_+!@#$%^&*";
  var p = "";
  for (var y = 0; y <= 8; y++) {
    var C = Math.floor(Math.random() * v.length + 1);
    p += v.charAt(C);
  }
  document.getElementById("password").value = p;
}
