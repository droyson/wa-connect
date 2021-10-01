(function () {
  fetch('https://wa-api.droyson.xyz/').then(function (response) {
    return response.json()
  }).then(function (data) {
    var alpha = data.countryCode
    return fetch('https://restcountries.com/v2/alpha/'+alpha+'?fields=callingCodes')
  }).then(function (response) {
    return response.json()
  }).then(function (data) {
    var callingCode = parseInt(data.callingCodes[0])
    if (!callingCode || isNaN(callingCode) || callingCode === 91) {
      return
    }
    var ccEl = document.getElementById('cc')
    ccEl.value = callingCode
  }).catch(function (error) {
    console.log('error in setting country code, using fallback', error)
  })
})();