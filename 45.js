
// 1. Remove Last Vowel(Recall)
// Write a function removeLastVowel(word) that takes in a string 
// and returns the string with its last vowel removed.

function removeLastVowel(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < vowels.length; i++) {
        let ele = vowels[i];
        if(str.includes(ele)){
            
        }
    }

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

// 2. Min Value(Recall)
// Write a function minValue(nums) that takes in an array of numbers as an arg.
// The function should return the smallest number of the array.
// If the array is empty, the function should return null.

function minValue(nums)
console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null



// 4. Create an object using your own name with properties about you.Create

const person = {
    firstName : "Sarinah",
    LastName : "Ali",
    Age : "15",
    School : "Islamic School of Irving",

    fullName : function(){
        return this.firstName + " " + this.LastName; 
    }


};
console.log(person.fullName());