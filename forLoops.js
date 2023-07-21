/*
All about for loops
First thing to know, a for loop doesn't do anything by itself.
A loop of any kind is just to allow you to do something over and over easily

For example, I want to console.log('Hello') 5 times
*/
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')

/*
This is exactly the same as making a loop that console logs 'Hello' 1 time,
and running that loop 5 times
*/
for (let i = 1; i <= 5; i = i + 1) {
	console.log('Hello')
}


//	Now lets say I want to console.log 'Hello' 10 times, all I have to do is change the logic in the loop
for (let i = 1; i <= 10; i = i + 1) {
	console.log('Hello')
}

// And this code will do the same thing
for (let i = 0; i < 10; i++) {
	console.log('Hello')
}

/*
Because my variable that I use to start the loop (i) is starting at 0, instead of 1
I will have looped 10 times by the time (i) reaches 9.
So after (i) was 9, and it goes up by 1 (i++) the middle logic will be 
10 < 10   which is false, and the loop stops befor it goes an 11th time through console.logging
*/

// this code will also only run 10 times total
for (let i = 20; i > 0; i -= 2) {
	console.log('Hello')
}

/*
Even though that last example is starting at 20 and going backward 2 at a time
the logic of all 3 pieces of the for loop work together and only runs 10 times.


Lets look at another weird example
*/
for (let banana = 0; banana < 5; banana += 1) {
	console.log('Hello')

}
// This code will run 5 times. The fact that we're using banana
// Instead of i, or index, etc. doesn't matter. It's just a variable name


// Ok, now lets use that variable!
for (let i = 0; i < 5; i++) {
	console.log(i)
}

// This loop will run 5 times, and print the numbers from 0 up to 4.
// Can you explain why the number 5 isn't printed?


