//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none';

    //show loading gif
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

//Calculate results
function calculateResults(e){
    //UI vars, this creates the vars we want to manipulate in JS
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalPayment = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value)/100 /12;
    const calculatedPayments = parseFloat(UIyears.value)* 12;
    
    //compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthly)){
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        //show results
        document.getElementById('results').style.display = 'block';
        //hide loading gif
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Check your numbers again');
        document.getElementById('loading').style.display = 'none';
    }

    e.preventDefault();
}

//create an error message and pop up as an alert
function showError(error){
    //create ad div
    const divError = document.createElement('div');

    //get elements as a parameter to insert this alert message
    const UIcard = document.querySelector('.card');
    const UIheading = document.querySelector('.heading');

    //add class to div
    divError.className = 'alert alert-danger';

    //create text Node and append to div
    divError.appendChild(document.createTextNode(error));

    //Insert error above heading, insertBefore method gets two parameters: the thing you want to insert and the elements you want it to go before.
    UIcard.insertBefore(divError, UIheading);

    //clear error message, setTimeOut methods gets two parameters: function and the time you want to persist in the screen
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}