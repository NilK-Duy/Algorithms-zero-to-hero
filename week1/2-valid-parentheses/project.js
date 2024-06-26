/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const len = s.length
  pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < len; i++) {
    if (s[i] in pairs) {
      stack.push(s[i])
    } else if (stack.length === 0 || (pairs[stack.pop()] !== s[i])) {
      return false
    }
  }
  return stack.length === 0
}

// Read data from txt file
const fs = require('fs')
fs.readFile('tc1.txt', 'utf8', function(err, data) {
if (err) {
    return console.error('Error reading file:', err)
}
const lines = data.trim().split('\n')
  for (let i = 0; i < lines.length; i += 2) {
      const brackets = lines[i].trim().split(' ').map(String)
      console.log("Brackets:", brackets)
      const result = isValid(brackets)
      console.log("Output:", result)
  }
})
