const square = document.getElementById("square");
console.log(square);

square.addEventListener("mouseenter", function () {
  square.style.backgroundColor = "blue";
});

square.addEventListener("mousedown", function () {
  square.style.backgroundColor = "red";
});

square.addEventListener("mouseup", function () {
  square.style.backgroundColor = "Yellow";
});

square.addEventListener("dblclick", function () {
  square.style.backgroundColor = "green ";
});

square.addEventListener("wheel", function () {
  square.style.backgroundColor = "orange";
});
