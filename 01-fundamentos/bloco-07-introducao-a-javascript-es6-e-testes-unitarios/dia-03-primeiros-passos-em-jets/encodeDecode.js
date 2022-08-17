function encode(message) {
    message = message.split('');
    for (index in message) {
      if (message[index] == 'a') {
        message[index] = 1
      }
      else if (message[index] == 'e') {
        message[index] = 2
      }
      else if (message[index] == 'i') {
        message[index] = 3
      }
      else if (message[index] == 'o') {
        message[index] = 4
      }
      else if (message[index] == 'u') {
        message[index] = 5
      }
    }
    return message.join('')
  }
  
  function decode(encoded) {
    encoded = encoded.split('');
    for (index in encoded) {
      if (encoded[index] == 1) {
        encoded[index] = 'a'
      }
      else if (encoded[index] == 2) {
        encoded[index] = 'e'
      }
      else if (encoded[index] == 3) {
        encoded[index] = 'i'
      }
      else if (encoded[index] == 4) {
        encoded[index] = 'o'
      }
      else if (encoded[index] == 5) {
        encoded[index] = 'u'
      }
    }
    return encoded.join('')
  }
module.exports = {encode, decode}