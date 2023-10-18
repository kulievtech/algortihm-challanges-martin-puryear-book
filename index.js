// Biggie Size Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

const makeItBig = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

console.log(makeItBig([-1, 3, 5, -5]));

// Print Low, Return High Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

const printLow = (arr) => {
    let highest = arr[0];
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
};
console.log(printLow([-4, 8, 12, 80, -5]));

//  Print One, Return Another Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = (arr) => {
    let secondLast = arr[arr.length - 2];
    console.log(secondLast);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
};
console.log(printOneReturnAnother([2, 3, 6, 8, 29, 7]));

//  Double Vision Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
};

console.log(double([1, 2, 3]));

// Count Positives Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length - 1] = count;
    }
    return arr;
};

console.log(countPositives([-1, 1, 1, 1]));

// Chapter 2

// Threes and Fives Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
//Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).

const threesFives = () => {
    let finalSum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 || i % 5 !== 0) && (i % 3 !== 0 || i % 5 === 0)) {
            finalSum += i;
        }
    }
    console.log(finalSum);
};

threesFives();

const betterThreesFives = (start, end) => {
    let finalSum = 0;
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 !== 0) && (i % 3 !== 0 || i % 5 === 0)) {
            finalSum += i;
        }
    }
    console.log(finalSum);
};

betterThreesFives(100, 4000000);

//  Generate Coin Change

// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

//Second: can you simplify/shorten your code? Example output, given (94): // 94 cents can be represented by: quarters:3 dimes:1 nickels:1 pennies:4

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

const generateCoinChange = (cents) => {
    const quarters = Math.floor(cents / 25); // 94 / 25 = 3.76  => 3
    const dimes = Math.floor((cents - quarters * 25) / 10); // 94 - (3 * 25) = 19 / 10 = 1.9 => 1
    const nickels = Math.floor((cents - quarters * 25 - dimes * 10) / 5); // 94 - (3 * 25) - (1 * 10) = 94 - 75 - 10 = 9 / 5 = 1.8 => 1
    const pennies = cents - quarters * 25 - dimes * 10 - nickels * 5; // 94 - (3 * 25) - (1 * 10) - (1 * 5) = 94 - 75 - 10 - 5 = 4;

    console.log(
        `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`
    );
};

generateCoinChange(94);

// Messy Math Mashup Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// 1. If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;

// 2. Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;

// 3. Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately. For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

const messyMath = (num) => {
    let sum = 0;
    // if (num % 3 === 0) return -1;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            continue;
        } else if (i % 7 === 0) {
            sum = sum + i * 2;
        } else {
            sum += i;
        }
    }
    return sum;
};
// console.log(messyMath(10));

// Twelve-Bar Blues Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

const twelveBar = () => {
    for (let i = 1; i <= 12; i++) {
        console.log(i, "chick", "boom", "chick");
    }
};
twelveBar();

// let num = 1;
// while (num <= 12) {
//     console.log(num, "chick", "boom", "chick");
//     num++;
// }

//  Fibonacci: Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fibonacci = (size) => {
    let fibSeq = [0, 1];
    let next = 1;
    while (fibSeq.length <= size) {
        fibSeq.push(next);
        next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    }
    return fibSeq[size];
};

// console.log(fibonacci(7));

// Sum to One Digit
//  Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function sumToOne(num) {
    let sum = 0;

    let strNum = String(num);
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    return sum;
}
function sumOfDigits(number) {
    const sum = sumToOne(number);
    let strSum = String(sum);
    let sum2 = 0;
    for (let i = 0; i < strSum.length; i++) {
        sum2 += Number(strSum[i]);
    }
    return sum2;
}
function finalSumOfDigits(num) {
    const sum = sumOfDigits(num);
    let strSum = String(sum);
    let finalSum = 0;
    for (let i = 0; i < strSum.length; i++) {
        finalSum += Number(strSum[i]);
    }
    return finalSum;
}

console.log(finalSumOfDigits(777));

// Clock Hand Angles: Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

function clockHandAngles(seconds) {}

//  Is Prime: Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

const isPrime = (int) => {
    if (int <= 1) {
        return false;
    }
    for (let i = 2; i < int; i++) {
        if (int % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(7));
console.log(isPrime(8));
// 7 => 2, 3, 4, 5, 6

//  Rockin’ the Dojo Sweatshirt Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

const sweatshirtPricing = (numOfTShirt) => {
    const cost = 20;
    if (numOfTShirt < 1) {
        return "Invalid sweatshirt number";
    } else if (numOfTShirt === 1) {
        return cost;
    } else if (numOfTShirt === 2) {
        return Math.round(cost - cost * 0.09) * numOfTShirt; // 20 - 1.8 = 18.2 cost * numOfTShirts
    } else if (numOfTShirt === 3) {
        return Math.round(cost - cost * 0.19) * numOfTShirt; // 20 -3.8 = 16.2
    } else {
        return Math.round(cost - cost * 0.35) * numOfTShirt;
    }
};

console.log(sweatshirtPricing(5));

//Array: Min to Front Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToPos = (arr) => {
    let lowestNumIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[lowestNumIdx] > arr[i]) {
            lowestNumIdx = i;
        }
    }
    return lowestNumIdx;
};

const minToFront = (arr) => {
    let minPos = minToPos(arr);
    for (let i = minPos; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

console.log(minToFront([4, 2, 1, 3, 5]));

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// [1,2,3,4,5,6,7]   =>   [7,6,5,4,3,2,1]

const reverseArray = (array) => {
    let leftSide = 0;
    let rightSide = array.length - 1;

    let i = leftSide;

    while (i < rightSide) {
        let temp = array[i];
        array[i] = array[rightSide];

        array[rightSide] = temp;

        i++;
        rightSide--;
    }
    return array;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

const reverseArray2 = (array) => {
    let left = 0;
    let right = array.length - 1;

    for (let i = left; i < right; i++) {
        let temp = array[left]; // temp = 1

        array[left] = array[right]; // array[left] = 7

        array[right] = temp; // array[right] = 1

        left++;
        right--;
    }
    return array;
};

console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 10]));

// Array: Filter Range Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     min:3     max: 7            =>     [3, 4, 5, 6, 7]

function filterRangeInPlace(arr, min, max) {
    let currentIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[currentIndex] = arr[i]; // 5 // at index 0 [5],  at index 1 [5, 2]
            currentIndex++;
        }
    }
    console.log(currentIndex);

    // Truncate the array to the new length (currentIndex)
    arr.length = currentIndex;
    return arr;
}

// Example usage:
const arr = [1, 5, 2, 8, 3, 7, 4];
const min = 2;
const max = 6;

filterRangeInPlace(arr, min, max);
console.log(arr); // Output: [5, 2, 3, 4]

// Array: Concat Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const arrConcat = (arr1, arr2) => {
    const newArr = [];

    for (const ele of arr1) {
        newArr.push(ele);
    }

    for (const ele of arr2) {
        newArr.push(ele);
    }
    return newArr;
};

const input1 = ["a", "b"];
const input2 = [1, 2];

console.log(arrConcat(input1, input2));

// Skyline Heights Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1, 10, 10, 1, 5, 12, 7, 15] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

// [-1, 1, 1, 7, 12, 3, 15]

function visibleBuildings(heights) {
    const visible = [];
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];

        if (height > max) {
            visible[visible.length] = height;

            // visible[0] = 1; // variable = [1];
            // visible[1] = 7; // variable = [1, 7];
            // visible[2] = 12; // variable = [1, 7, 12];
            // visible[3] = 15; // variable = [1, 7, 12, 15];

            max = height;
        }
    }

    return visible;
}

console.log(visibleBuildings([-1, 1, 1, 7, 8, 9, 10, 12, 7, 8, 9, 3, 15])); // Output: [1,  7,  8, 9,10, 12, 15]
console.log(visibleBuildings([0, 4])); // Output: [4]

// Array: Remove Negatives Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions. Second: don’t use nested loops.

// [2, 5, -1, 10, -3, -2, 7]

const removeNegatives = (arr) => {
    let currentIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[currentIndex] = arr[i];
            currentIndex++;
        }
    }
    arr.length = currentIndex;
    return arr;
};

console.log(removeNegatives([2, 5, -1, 10, -3, -2, 7])); // [ 2, 5, 10, 7 ]

// Array: Second-to-Last Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

const secondToLast = (arr) => {
    if (arr.length < 2) {
        return null;
    }

    return arr[arr.length - 2];
};

console.log(secondToLast([42, true, 4, "Kate", 7])); // "Kate"
console.log(secondToLast([42])); // null

// Array: Nth-to-Last Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

const nthToLast = (arr, n) => {
    if (arr.length < 2) {
        return null;
    }

    return arr[arr.length - n];
};

console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3)); // output: 4

// Array: Second-Largest Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

const secondLargest = (arr) => {
    if (arr.length < 2) {
        return null;
    }

    let maxNum = 0;
    let secondLargest = 0;

    //  [42, 1, 4, Math.PI, 7]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            // 42 > 0  => secondLargest = 0; maxNum = 42;

            // 1 > 0 => secondLargest = 1;
            // 4 > 1 => secondLargest = 4;
            // 7 > 4 => secondLargest = 7;

            secondLargest = maxNum;
            maxNum = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

console.log(secondLargest([42, 1, 4, Math.PI, 7]));

// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1)      Set aside the last digit; do not include it in these calculations (until step 5);
// 2)      Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3)      If any results are larger than 9, subtract 9 from them;
// 4)      Add all numbers (not just our odds) together;
// 5)      Now add the last digit back in – the sum should be a multiple of 10. For example, when given digit array
// [5,2,2,8,2], after step 1) it becomes
// [5,2,2,8], then after step 2) it is
// [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.

// isValidCreditCardNumber;
const isValidCreditCardNumber = (nums) => {
    let sum = nums[nums.length - 1];
    let product;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i % 2 !== 0) {
            product = nums[i] * 2;
            if (product > 9) product -= 9;
            sum += product;
        } else {
            sum += nums[i];
        }
    }
    return sum % 10 === 0;
};
const isCreditCardValid = (digitArr) => {
    let lastDigit = digitArr[digitArr.length - 1];
    let sum = 0;
};

console.log(isValidCreditCardNumber([5, 2, 2, 8, 2]));

// Array: Remove Range

// Given array, and indices start and end, remove

// remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

const removeRange = (arr, start, end) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < start || i > end) {
            arr[count] = arr[i];
            count++;
        }
    }

    arr.length = count;
};

const array = [20, 30, 40, 50, 60, 70];
removeRange(array, 2, 4);
console.log(array);

//  Intermediate Sums You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

// [1, 2, 1, 2, 1, 2, 1, 2, 1, 2] => sum = 15    => [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15]
// [1, 2, 1, 2, 1, 2, 1, 2, 1]    9 elements => 14      => [1, 2, 1, 2, 1, 2, 1, 2, 1, 14]
// [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]      14 elements     => [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6]

// [.... 20 numbers]  =>  [... 10 numbers sum of first 10 numbers, another 10 numbers, another sum of 10 numbers ]

const intermediateSums = (arr) => {
    const newArr = [];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(arr[i]);

        if ((i + 1) % 10 === 0 || i === arr.length - 1) {
            newArr.push(sum);
            sum = 0;
        }
    }
    return newArr;
};

console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));
console.log(
    intermediateSums([
        1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1
    ])
);

// Here's how it works:

// The variable sum is used to keep track of the running sum for the current chunk of elements. It is initialized to 0.

// As the loop iterates through the elements of the input array, it continuously adds the current element to the sum. This is done with the line sum += arr[i];.

// When (i + 1) is a multiple of 10 (i.e., every tenth element), the code enters the conditional block. In this block, it appends the sum (which contains the sum of the last ten elements) to the result array with the line result.push(sum);.

// After appending the sum, the sum is reset to 0 to start calculating the sum for the next chunk of elements.

// The loop continues to process the elements until it reaches the end of the input array.

// Finally, after the loop completes, there might be some remaining elements that were not part of a complete chunk (i.e., not a multiple of ten). To ensure that the sum of these remaining elements is also included, the code checks if sum is not equal to 0. If sum is not 0, it means there are remaining elements, and their sum is appended to the result array.

// This ensures that even if the input array does not have a length that's exactly a multiple of ten, the code will still add the sum of the last chunk of elements to the result array.

function addIntermediateSums(arr) {
    const result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(arr[i]);

        if ((i + 1) % 10 === 0) {
            result.push(sum);
            sum = 0;
        }
    }

    if (sum !== 0) {
        result.push(sum);
    }

    return result;
}

const inputArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
const resultArray = addIntermediateSums(inputArray);
console.log(resultArray);

// Double Trouble Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses", 42,false] to [4, 4, "Ulysses", "Ulysses", 42, 42, false, false].

const doubleTrouble = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    return newArr;
};

console.log(doubleTrouble([4, "Ulysses", 42, false]));

// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40]. Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!

const combineTwoArray = (arr1, arr2) => {
    const combinedArray = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combinedArray.push(arr1[i]);
        }

        if (i < arr2.length) {
            combinedArray.push(arr2[i]);
        }
    }

    return combinedArray;
};

console.log(combineTwoArray([1, 2], [10, 20, 30, 40]));

// Remove Blanks Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

const removeBlanks = (string) => {
    // return string.trim(" ").split(" ").join("");
    return string.split(" ").join("");
};

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// String: Get Digits Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

// unfinished needs 0 as well but Number(char) is excludes 0 because it is a falsy value.
const getDigits1 = (string) => {
    const strToArr = string.split("");
    const result = strToArr.filter((char) => {
        return Number(char);
    });
    return result.join("");
};

console.log(getDigits1("0s1a3y5w7h9a2t4?6!8?0"));
