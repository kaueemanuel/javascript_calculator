const isNumber = (value) => {
  return isFinite(value);
};

let elements = document.querySelectorAll(".box div");

elements.forEach((div) => {
  let divVal = div.innerHTML;

  switch (divVal) {
    case "=":
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        try {
          document.querySelector(".display").innerHTML = eval(displayValue);
        } catch (error) {
          document.querySelector(".display").innerHTML = "";
        }
      });
      break;
    case "C":
      div.addEventListener("click", () => {
        document.querySelector(".display").innerHTML = "";
      });
      break;
    case "del":
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        document.querySelector(".display").innerHTML = displayValue.substr(
          0,
          displayValue.length - 1
        );
      });
      break;
    case "(":
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        if (
          !isNumber(displayValue[displayValue.length - 1]) &&
          displayValue[displayValue.length - 1] !== "."
        ) {
          document.querySelector(".display").innerHTML += divVal;
        }
      });
      break;
    case ")":
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        if (
          isNumber(displayValue[displayValue.length - 1]) ||
          displayValue[displayValue.length - 1] === ")"
        ) {
          document.querySelector(".display").innerHTML += divVal;
        }
      });
      break;
    case ",":
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        if (
          isNumber(displayValue[displayValue.length - 1]) ||
          displayValue[displayValue.length - 1] === ")"
        ) {
          document.querySelector(".display").innerHTML += ".";
        }
      });
      break;
    case "-":
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        if (
          displayValue[displayValue.length - 1] !== "-" &&
          displayValue[displayValue.length - 1] !== "."
        ) {
          document.querySelector(".display").innerHTML += divVal;
        }
      });
      break;

    default:
      div.addEventListener("click", () => {
        let displayValue = document.querySelector(".display").innerHTML;
        if (
          isNumber(divVal) ||
          displayValue[displayValue.length - 1] === ")" ||
          isNumber(displayValue[displayValue.length - 1])
        ) {
          document.querySelector(".display").innerHTML += divVal;
        }
      });
      break;
  }
});
