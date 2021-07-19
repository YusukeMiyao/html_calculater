let numInFront = "0"
let operater = ""
let numInBack = ""
function input_num(num) {
  if (operater === "") {
    if (numInFront === "0") {
      numInFront = num + ""
      document.getElementById("output").innerHTML = numInFront
    } else {
      numInFront += num
      document.getElementById("output").innerHTML += num
    }
  } else {
    if (numInBack !== "0") {
      numInBack += num
      document.getElementById("output").innerHTML += num
    } else {
      numInBack = num + ""
      document.getElementById("output").innerHTML += num
    }
  }
}
function input_operater(o) {
  if (
    numInFront.indexOf(".") === -1 &&
    numInFront.indexOf("e") === -1 &&
    operater === ""
  ) {
    operater = o
  }
  document.getElementById("output").innerHTML += operater
}

function posi_and_nega() {
  if (numInFront !== "0" && numInFront.slice(-1) !== "." && operater === "") {
    document.getElementById("output").innerHTML = Number(numInFront) * -1 + ""
    numInFront = Number(numInFront) * -1 + ""
  } else if (
    numInBack !== "" &&
    numInBack.slice(-1) !== "." &&
    numInBack !== "0"
  ) {
    document.getElementById("output").innerHTML =
      numInFront + operater + Number(numInFront) * -1 + ""
    numInBack = Number(numInBack) * -1 + ""
  } else return
}

function one_hundredth() {
  if (
    numInFront.slice(2, 3) !== "." ||
    (operater !== "" && numInBack.slice(2, 3) !== ".")
  ) {
    if (numInFront !== "0" && numInFront.slice(-1) !== "." && operater === "") {
      document.getElementById("output").innerHTML =
        Number(numInFront) / 100 + ""
      numInFront = Number(numInFront) / 100 + ""
    } else if (
      numInBack !== "" &&
      numInBack !== 0 &&
      numInBack.slice(-1) !== "."
    ) {
      document.getElementById("output").innerHTML =
        numInFront + operater + Number(numInBack) / 100 + ""
      numInBack = Number(numInBack) / 100 + ""
    }
  } else return
}

function decimal_point() {
  if (operater === "" && numInFront.indexOf(".") === -1) {
    numInFront += "."
    document.getElementById("output").innerHTML += "."
  } else if (numInBack !== "" && numInBack.indexOf(".") === -1) {
    numInBack += "."
    document.getElementById("output").innerHTML += "."
  } else return
}

function one_clear() {
  if (numInFront !== "0" && operater === "") {
    numInFront = "0"
    document.getElementById("output").innerHTML = "0"
  } else if (operater !== "" && numInBack === "") {
    operater = ""
    document.getElementById("output").innerHTML = numInFront + ""
  } else if (numInBack !== "") {
    numInBack = ""
    document.getElementById("output").innerHTML = numInFront + operater + ""
  } else {
  }
}

function all_clear() {
  numInFront = "0"
  operater = ""
  numInBack = ""
  document.getElementById("output").innerHTML = numInFront
}

function equal() {
  if (numInBack !== "") {
    const setnumInFront = Number(numInFront)
    const setNumInBack = Number(numInBack)
    switch (operater) {
      case "÷":
        numInFront = setnumInFront / setNumInBack + ""
        document.getElementById("output").innerHTML = numInFront
        break
      case "×":
        numInFront = setnumInFront * setNumInBack + ""
        document.getElementById("output").innerHTML = numInFront
        break
      case "-":
        numInFront = setnumInFront - setNumInBack + ""
        document.getElementById("output").innerHTML = numInFront
        break
      case "+":
        numInFront = setnumInFront + setNumInBack + ""
        document.getElementById("output").innerHTML = numInFront
        break
      default:
        break
    }
  }
}
