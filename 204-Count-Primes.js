/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

  
    if (n <= 2) {
        return 0; // No primes less than 2
    }

    // Create an array to mark primes
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

    // Mark non-prime numbers
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count primes
    return isPrime.filter(Boolean).length;


   
};