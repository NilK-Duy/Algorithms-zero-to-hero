/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length
    let array1 = []
    let array2 = []
    const halfTarget = Math.floor(target / 2)
    for(let i = 0; i < len; i++) {
        if ( nums[i] <= halfTarget ) {
            array1.push(i)
        } else if ( nums[i] <= target ) {
            array2.push(i)
        }
    }

    const len1 = array1.length
    const len2 = array2.length
    for(let i = 0; i < len1; i++) {
        for(let j = 0; j < len2; j++) {
            if(nums[array1[i]] + nums[array2[j]] === target) {
                return [array1[i],array2[j]]
            }
        }
    }
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
