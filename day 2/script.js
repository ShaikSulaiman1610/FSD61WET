/** Basic example  that demonstrate the working of the function
 * EXAMPLE : print message
  */
 /**  function shaik(message){
    console.log(message)
 } 
 shaik("hello");
 shaik("how are you");
*/

 /** Basic example  that demonstrate the working of the function
 * EXAMPLE : add two numbers
  */

 /** function AddTwoNumbers(num1,num2){
    console.log(num1+num2)
 } 
 AddTwoNumbers(40,50);
 AddTwoNumbers(120,30);
 */

 /**  
  

  Basic  example 
 function addTwoNumber(num1,num2){
   return num1+num2;

 }
 var result1 = addTwoNumber(30,40);
 var result2 = addTwoNumber(20,80);


 console.log(result1);
 console.log(result2);
 console.log(result1+result2);
 */

 /** types of function
  * named function
  * IIFE
  * anonymous
  * arrow function
  
      IIFE:
      (function(message){
      console.log(message);
      })("hello world");
  
  */
     /** anonymous function
      * function(){ }
      * ()=>{}
      * to return values to assign
      * var fn1 = function(){} or var fn2 = ()=>{}
      */
     var shaik ;
     console.log(typeof shaik);
     shaik=()=>{
      console.log("executed shaik");
     }
     console.log(typeof shaik)
     shaik();