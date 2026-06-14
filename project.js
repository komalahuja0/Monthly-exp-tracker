const money = document.querySelector(".box")
const spent = document.querySelector(".spent")
const result = document.querySelector(".footer")
const left = document.querySelector(".left")
const day = document.querySelector(".days")
const button = document.querySelector(".cl")
const cal = document.querySelector(".cal")
const expenseList = document.getElementById("expense-list")
const month = document.querySelector(".dropdown")
const del = document.querySelector(".delete")
let gone = 1
month.addEventListener("change", function () {
  const mont = parseInt(month.value)
  let days = 30

  if ([1, 3, 5, 7, 8, 10, 12].includes(mont)) days = 31
  else if (mont === 2) days = 28
  else days = 30
  day.value = days

})


button.addEventListener("click", () => {

  gone += 1
  const more = document.createElement("li")
  more.classList.add("exp")
  more.innerHTML = `<input class="exp" type="text" style="width:auto;" placeholder="Enter your expenditure for the day"> 
  <input type="number" class="spen" placeholder="Enter the money spent"></input>
  <button class="delete" style="background-color: red; color: white; padding:5px;">Delete</button>`
  expenseList.appendChild(more)

})
expenseList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("li").remove()
    gone-=1
    const expe = document.querySelectorAll(".spen")
  const budget = parseInt(money.value)
  const days = parseInt(day.value)

  if (isNaN(budget) || isNaN(days) || days <= 0) {
    alert("Please enter valid inputs")
    return;
  }
  let total = 0
  expe.forEach(element => {
    const amt = parseInt(element.value)
    if (!isNaN(amt))
      total += amt
  });

if (days - gone <= 0) {
  left.textContent = "No remaining days";
  return;
}

  spent.textContent = `Rs.${total}`
  result.textContent = `Rs.${budget - total}`
  left.textContent = (budget - total) > 0 ? `now spend Rs.${((budget - total) / (days - gone)).toFixed(2)} each day for ${days - gone} days` : `error: budget is greater than the money spent`
  }

})


cal.addEventListener("click", () => {
  const expe = document.querySelectorAll(".spen")
  const budget = parseInt(money.value)
  const days = parseInt(day.value)

  if (isNaN(budget) || isNaN(days) || days <= 0) {
    alert("Please enter valid inputs")
    return;
  }
  let total = 0
  expe.forEach(element => {
    const amt = parseInt(element.value)
    if (!isNaN(amt))
      total += amt
  });



  spent.textContent = `Rs.${total}`
 document.getElementById("money-left").textContent = budget - total;
  left.textContent = (budget - total) > 0 ? `now spend Rs.${((budget - total) / (days - gone)).toFixed(2)} each day for ${days - gone} days` : `error: Money spent is more than the budget`
})