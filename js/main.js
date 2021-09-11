(function () {
  var ccEl = document.createElement('input')
  ccEl.type = 'tel'
  ccEl.name = 'country_code'
  ccEl.id = 'cc'
  ccEl.placeholder = 'Calling Code'
  ccEl.value = '91'
  var pnoEl = document.createElement('input')
  pnoEl.type = 'tel'
  pnoEl.name = 'phone_number'
  pnoEl.id = 'pno'
  pnoEl.placeholder = 'Enter Phone Number'
  pnoEl.autocomplete = 'off'
  var container = document.getElementById('input-container')
  container.appendChild(ccEl)
  container.appendChild(pnoEl)
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault()
    var countryCode = parseInt((document.getElementById('cc').value || '').trim())
    var phoneNumber = parseInt((document.getElementById('pno').value || '').trim())
    var error = ''
    var errorDiv = document.getElementById('error-container')
    if (!countryCode || isNaN(countryCode)) {
      error = 'Please add valid calling code.'
    }
    if (!phoneNumber || isNaN(phoneNumber)) {
      error = 'Please add valid phone number.'
    }
    errorDiv.innerText = error
    if (error) {
      errorDiv.style.opacity = 1
      setTimeout(function () {
        errorDiv.style.opacity = 0
      }, 2000)
      return
    }
    window.open('https://api.whatsapp.com/send/?phone='+countryCode+''+phoneNumber)
  })
})()