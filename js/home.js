
// events handalar
document.getElementById('add_money')
  .addEventListener('click', function (event) {
  
    //rolod reset 
  event.preventDefault()

// input value added 
const amountBalance = document.getElementById('amount_of_balance').value
const pinNum = document.getElementById('pin_number').value
  
    // pin valided 
  if (pinNum === '1111') {
    
    // current balance add
    const currentBalance = document.getElementById('current_balance').innerText
    
    // string to num convert
    const amountBalanceNumber = parseFloat(amountBalance)
    const currentBalanceNum = parseFloat(currentBalance)

    // totol money in current balance
    const total = amountBalanceNumber + currentBalanceNum
    
    // show / display current balance
    document.getElementById('current_balance').innerText = total

    
    
  }

  else {
    
    alert('add to failed')
  }

})