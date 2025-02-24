function getCompoundInterest() {
    // Get values from form
    const initialAmount = parseFloat(document.getElementById('initial').value);
    const annualRate = parseFloat(document.getElementById('annual').value);
    const retirementYear = parseInt(document.getElementById('year').value);
    
    // Get current year and total years investing
    const currentYear = new Date().getFullYear();
    const yearsInvested = retirementYear - currentYear;

    // Validate inputs
    if (isNaN(initialAmount) || isNaN(annualRate) || isNaN(retirementYear) || yearsInvested < 0) {
        alert("Please enter number values.");
        return false;
    }

    // Compound Interest: A = P * (1 + r/100)^t
    const futureValue = initialAmount * Math.pow((1 + annualRate / 100), yearsInvested);

    // Round to whole number
    const roundedFutureValue = Math.round(futureValue);

    // Results
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block"; 
    resultDiv.innerHTML = `<strong>Your total investment will grow to $${roundedFutureValue} by the year ${retirementYear}.</strong>`;

    // Prevent form submission & page refresh
    return false;
}
