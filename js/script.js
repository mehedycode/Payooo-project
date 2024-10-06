

document.getElementById('btn-primary').addEventListener('click', function (event) {

  const values = document.getElementById('input1').value
  const passValue = document.getElementById('input2').value
  event.preventDefault()
  
  if (values === '5' && passValue === '1234') {
  window.location.href = './home.html'
  }
  
  else {
    alert('Please Enter Your Correct Email  or Pin ')
  }


})