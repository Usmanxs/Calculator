let equal_pressed = 0;
let button_inpu = document.querySelectorAll(.input-button);
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
 window.onload =() => {
    input.value = "";
};
// access each class using  for each
button_inpu.forEach(button => {
    button.addEventListener("click", function() {
        if( equal_pressed==1)
        {
            input.value = "";
            equal_pressed = 0;
        }
equal.addEventListener("click", () => {
    equal_pressed =1;
    console.log(equal_pressed);
}});