
document.getElementById("_5_btn").addEventListener('click', () => {
    console.log("vimal");
    logic(5);
})
document.getElementById("_10_btn").addEventListener('click', () => {
    console.log("vimal");
    logic(10);
})
document.getElementById("_15_btn").addEventListener('click', () => {
    console.log("vimal");
    logic(15);
})
document.getElementById("_20_btn").addEventListener('click', () => {
    console.log("vimal");
    logic(20);
})
document.getElementById("_25_btn").addEventListener('click', () => {
    console.log("vimal");
    logic(25);
})
document.getElementById("custom_btn").addEventListener('click', () => {
    console.log("vimal");
    logic(2);
})

function logic(per) {
    const billValue = document.getElementById("bill_value").value;
    const numPeople = document.getElementById("num_people").value;
    if (isNaN(billValue) || isNaN(numPeople)) {
        alert("The input can only be a numeric value!!");
    } else if (!billValue || !numPeople) {
        console.log("ERROR");
    }
    else {
        console.log(billValue, "billval");
        console.log(numPeople, "numppl");
        calculateTip(billValue, numPeople, per);
    }
};


function calculateTip(billValue, numPeople, percentage) {
    totalPerPerson = billValue / numPeople;
    totalTip = (billValue * percentage) / 100;
    console.log(`Total tip is ${totalTip}`);
    tipAmount = totalTip / numPeople;
    console.log(`Total tip per person is ${tipAmount}`);
    document.getElementById('total_per_person').innerHTML = `$${totalPerPerson}`
    document.getElementById('tip_per_person').innerHTML = `$${tipAmount}`
}
document.getElementById("r_btn").addEventListener('click', () => {
    billValue = 0;
    numPeople = 0;
    percentage = 0;
    tipAmount = 0;
    totalPerPerson = 0;
    document.getElementById('tip_per_person').innerHTML = `$${tipAmount}`;
    document.getElementById('inp_form')
    document.getElementById('total_per_person').innerHTML = `$${totalPerPerson}`;
    document.getElementById("bill_value").value = 0;
    document.getElementById("num_people").value = 0;

})