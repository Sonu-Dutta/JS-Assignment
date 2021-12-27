// To print prime nos from 1 to 100

// Starting the loop from 2 , since 1 is neither prime nor composite number.
for (var n = 2; n <= 100; n++) {
    var notPrime = false;
    for (var i = 2; i <= n; i++) {
        if (n%i==0 && i!==n) {
            notPrime = true;
        }
    }
    if (notPrime == false) {
                console.log(n);
    }
}