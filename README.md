# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max`: iterator that finds the highest number within an array. example: if you had an array, [7, 3, 21], max would return 21. 

* `min`: iterator that finds the lowest number in an array. example: if you had an array, [7, 3, 21], min would return 3. 

* `each`: iterates through each item in an array. Like a for loop, but with less opportunity for error. example: if you had an array, [7, 3, 21], each would return, 7, 3, 21 using console.log(variable).

* `map`: similar to each. should call a given function once, for each item in the array, in order, and return the results in a new array. example: takes array [7, 3, 21], uses a function to (2 * array), and would return a copied array of : [14, 6, 42].

* `filter`: an iterator that filters an array based on some condition (less than, more than). example: would specify a condition (num < 10), and return all numbers of the array that meet the condition. passing array [7, 3, 21], would return 21. 
[note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* `reduce`: takes an array and reduces it to a single value, through a given function. example: would pass array through a function, which would compound the values in the array to a single value.
[note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

* `reject`: opposite of filter. returns the numbers lying outside of whatever condition you specified. example: if you set (num < 10) within your function, reject would give you the numbers over 10.
[note](http://underscorejs.org/#reject)

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




