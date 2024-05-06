/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length
  for(let i = 0; i < len; i++) {
      for(let j = i + 1; j < len; j++) {
          if(nums[i] + nums[j] === target) {
              return [i,j]
          }
      }
  }
  return []
}

// Read data from txt file
const fs = require('fs')
fs.readFile('tc1.txt', 'utf8', function(err, data) {
  if (err) {
      return console.error('Error reading file:', err)
  }
  const lines = data.trim().split('\n')
    for (let i = 0; i < lines.length; i += 2) {
        const nums = lines[i].trim().split(' ').map(Number)
        const target = parseInt(lines[i + 1].trim())
        console.log("nums:", nums)
        console.log("target:", target)
        const result = twoSum(nums, target)
        console.log("Output:", result)
    }
})
