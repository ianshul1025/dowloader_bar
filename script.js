var btn = document.querySelector("button");
var percent = document.querySelector("#percent");
var growth = document.querySelector("#growth");

var grow = 0;

btn.addEventListener("click", function () {
    // Disable the button to prevent further clicks
    btn.disabled = true;
    btn.style.opacity = 0.5; // Change opacity to indicate it's disabled

    var int = setInterval(function () {
        if (grow < 100) { // Ensure it doesn't exceed 100%
            grow++;
            percent.innerHTML = grow + "%";
            growth.style.width = grow + "%";
        }
    }, 50);

    setTimeout(function () {
        clearInterval(int);
        btn.innerHTML = 'Downloaded';
    }, 5000);
});

// var btn = document.querySelector("button");
// var perecent = document.querySelector("#percent");
// var growth = document.querySelector("#growth");

// var grow = 0

// btn.addEventListener("click", function () {
//     var int = setInterval(function () {
//         grow++
//         perecent.innerHTML = grow + "%"
//         growth.style.width = grow + "%"
//     },50)

//     setTimeout(function () {
//         clearInterval(int)
//         btn.innerHTML = 'Downloaded'
//         btn.style.opacity = 0.5
//     },5000)
// })