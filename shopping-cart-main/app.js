function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //update total
    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1279;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    //console.log(subTotal);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update on the memo

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

//handle phone increament and decreament events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// handle case increment and decrement events

document.getElementById('case-plus').addEventListener('click', function () {
    // //console.log('yeah,clicked');
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // // console.log(caseNumber);
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    // //console.log('yeah,clicked');
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // // console.log(caseNumber);
    // caseInput.value = parseInt(caseNumber) - 1;
    updateProductNumber('case', 59, false);
});
