

document.getElementById('cash_out_money')
  .addEventListener('click', function (event) {
          
event.preventDefault()
  
const amountBalance = document.getElementById('amount_of_balance_cash').value

const pinNum = document.getElementById('pin_number_cash').value

if (pinNum === '1111') {
  
const currentBalance = document.getElementById('current_balance').innerText

const total = currentBalance - amountBalance

document.getElementById('current_balance').innerText = total
}          

else {
            
  alert('cash out failed')
  
    }
})