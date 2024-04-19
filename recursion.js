/** product: calculate the product of an array of numbers. */
function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if(words.length === 1) return words[0].length;
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */
function everyOther(str, index = 0) {
  if(index >= str.length) return '';
  return str[index] + everyOther(str, index + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if(str.length <= 1) return true;
  if(str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, index = 0) {
  if(index >= arr.length) return -1;
  if(arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if(str === '') return '';
  return revString(str.substr(1)) + str.charAt(0);
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let stringsArr = [];
  for(let key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(gatherStrings(obj[key]));
      }
  }
  return stringsArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
* return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if(start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if(arr[mid] === val) return mid;
  if(arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  return binarySearch(arr, val, mid + 1, end);
}

module.exports = {
product,
longest,
everyOther,
isPalindrome,
findIndex,
revString,
gatherStrings,
binarySearch
};