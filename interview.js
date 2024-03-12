function isPalindrome(str) {
    // const chars = new Object();

    // for (let i = 0; i <= str.length; i++) {

    //     chars[str[i]] = 1;

    //     if (str[i] in chars) {
    //         chars[str[i]] += 1;
    //     } else {
    //         chars[str[i]] = 1;
    //     }

    //     const arr = Object.keys(str);
    //     console.log(arr);
    //     var oddCount = 0;

    //     arr.forEach((char) => {
    //         if (char % 2 == 1) {
    //             oddCount++;
    //         }
    //     });
    //     if (oddCount > 1) {
    //         console.log(false);
    //         return false;
    //     } else {
    //         console.log(true);
    //         return true;
    //     }
    // }
    // write the function that checks if the string is a palindrome
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]]) {
            charCount[str[i]]++;
        } else {
            charCount[str[i]] = 1;
        }
    }
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 === 1) {
            oddCount++;
        }
    }
    if (oddCount > 1) {
        console.log(false);
        return false;
    }
    console.log(true);
    return true;

}

isPalindrome('ABBCABB'); // true
isPalindrome('ABBCDABB'); // false

// ABBCABB
