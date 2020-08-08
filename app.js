let input = Number(document.querySelector("#inputValue").value);
let choose = Number(document.querySelector("#choose").value);
let convert = document.querySelector(".convert");
let result = document.querySelector(".result");
let answer;
convert.addEventListener("click", (event) => {
    event.preventDefault();

    if (choose === "kg to g") {
        answer = input / 1000;
    }
    else {
        answer = input * 1000;

    }
    result.innerHTML = answer;
});
