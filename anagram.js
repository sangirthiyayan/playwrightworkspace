/*   Define two input strings (text1 and text2). 
  Check if the lengths of the two strings are equal: 
 If the lengths are not equal, print "Lengths mismatch, therefore the strings are 
not an Anagram" and exit. 
 Otherwise, proceed to the next step. 
  Convert both strings to character arrays (hint: use split("")). 
  Sort both character arrays (hint: use sort()). 
  Compare the sorted arrays: 
 If they are equal, print "The given strings are Anagram." 
 Otherwise, print "The given strings are not an Anagram.   */

let text1 ="stops"
let text2 ="sptos"
if(text1.length==text2.length){
    console.log("length are same ")
}else{
    console.log("not an anagram")
}
let len1 = text1.split("").sort().join()
let len2 = text2.split("").sort().join()

let srt1 = len1
let srt2 = len2

if(srt1===srt2){
    console.log("the string is anagram ")
}else{
    console.log("the given string is not angram")
}
