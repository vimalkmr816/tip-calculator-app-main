const btn = document.querySelectorAll('.btn');
console.log(btn);
btn.forEach(function(index) {
    btn[index].addEventListener('click', () => {
        const billValue = document.getElementById("bill_value").value;
        const numPeople = document.getElementById("num_people").value;
        const percentage = (index + 1) * 5;
        console.log(percentage, "percent");
        if (isNaN(billValue) || isNaN(numPeople)) {
            alert("The input can only be a numeric value!!")
        } else {
            calculateTip(billValue, numPeople, percentage)
            console.log(billValue);
            console.log(numPeople);
        }
    })
});
// const percentage = document.querySelectorAll("btn");
// let tipAmount;
// let totalPerPerson;
// let totalTip

function calculateTip(billValue, numPeople, percentage) {
    totalPerPerson = billValue / numPeople;
    totalTip = (billValue * percentage) / 100;
    console.log(`Total tip is ${totalTip}`);
    tipAmount = totalTip / numPeople;
    console.log(`Total tip per person is ${tipAmount}`);
    document.getElementById('total_per_person').innerHTML = `${totalPerPerson}`
    document.getElementById('tip_per_person').innerHTML = `${tipAmount}`
}