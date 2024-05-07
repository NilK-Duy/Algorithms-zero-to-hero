/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
};

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
