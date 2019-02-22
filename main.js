var caracteresString = "!\"#$%&'()*+,-./1234567890:;<=>?@ABCDEFGHJKLMNOPRSTUVWXYZ[\]^_abcdefghijkmnopqrstuvwxyz{|}~";
var array = caracteresString.split("");
console.log(array);

$(".slider").change(function (e) {
 var text = "";
 e.preventDefault();
 for (let i = 0; i < (this.value); i++) {
  text += array[Math.floor(Math.random() * array.length)];
 }
 $("#input").val(text);
 console.log(text);
});