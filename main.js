let number = document.getElementById("field")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const button = document.getElementById("button")


button.addEventListener("click", ()=>
{   
    let number1 = `${number.value}`
    input1.textContent = (parseInt(number1) * 9/5) + 32
    input2.textContent = parseInt(number1) + 273.15
})
