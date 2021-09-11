(function () {
  var ccEl = document.createElement('input')
  ccEl.type = 'tel'
  ccEl.name = 'country_code'
  ccEl.id = 'cc'
  ccEl.placeholder = 'Country Code'
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
    if (!countryCode || isNaN(countryCode)) {
      // todo set country code error
      return
    }
    if (!phoneNumber || isNaN(phoneNumber)) {
      // todo set phone number error
      return
    }
    window.open('https://api.whatsapp.com/send/?phone='+countryCode+''+phoneNumber)
  })
})()