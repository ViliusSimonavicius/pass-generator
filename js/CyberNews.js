
var generatedPass = document.getElementById("generated-password");

function randomString(length, chars) {
  var mask = '';

  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

  var result = '';

  for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];

  return result;
}

function randomPass() {
  var lowerCase = document.getElementById('lower-case');
  var upperCase = document.getElementById('upper-case');
  var specialSymbols = document.getElementById('special-symbols');
  var numbers = document.getElementById('numbers');

  if(lowerCase.checked){
    generatedPass.value = randomString(20, 'a')
  }
  if(upperCase.checked){
    generatedPass.value = randomString(20, 'A')
  }
  if(specialSymbols.checked){
    generatedPass.value = randomString(20, '!')
  }
  if(numbers.checked){
    generatedPass.value = randomString(20, '#')
  }
  if(lowerCase.checked & upperCase.checked){
    generatedPass.value = randomString(20, 'aA')
  }
  if(lowerCase.checked && specialSymbols.checked){
    generatedPass.value = randomString(20, 'a!')
  }
  if(lowerCase.checked && numbers.checked){
    generatedPass.value = randomString(20, 'a#')
  }
  if(upperCase.checked && specialSymbols.checked){
    generatedPass.value = randomString(20, 'A!')
  }
  if(upperCase.checked && numbers.checked){
    generatedPass.value = randomString(20, 'A#')
  }
  if(specialSymbols.checked && numbers.checked){
    generatedPass.value = randomString(20, '!#')
  }
  if(lowerCase.checked && upperCase.checked && specialSymbols.checked){
    generatedPass.value = randomString(20, 'aA!')
  }
  if(lowerCase.checked && upperCase.checked && numbers.checked){
    generatedPass.value = randomString(20, 'aA#')
  }
  if(lowerCase.checked && specialSymbols.checked && numbers.checked){
    generatedPass.value = randomString(20, 'a#!')
  }
  if(upperCase.checked && specialSymbols.checked && numbers.checked){
    generatedPass.value = randomString(20, 'A#!')
  }
  if(lowerCase.checked && upperCase.checked && specialSymbols.checked && numbers.checked){
    generatedPass.value = randomString(20, 'aA#!')
  }
}

function copyToClipboard() {
  generatedPass.select();
  generatedPass.setSelectionRange(0, 99999);
  document.execCommand("copy");
}