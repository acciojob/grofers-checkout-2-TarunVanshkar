//your code here
let table = document.querySelector("table");
let priceList = document.querySelectorAll("[data-ns-test=prices]");
// console.log(priceList)
let totalPrice = 0;
priceList.forEach((item) => {
    totalPrice += Number(item.innerText);
})
// console.log(totalPrice)

let lastRow = document.createElement("tr");
let tableData = document.createElement("td");
tableData.setAttribute("data-ns-test", "grandTotal");
tableData.innerText = totalPrice;
lastRow.appendChild(tableData);
table.appendChild(lastRow);