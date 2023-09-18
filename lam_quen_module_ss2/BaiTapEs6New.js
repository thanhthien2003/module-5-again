// task 1
const checkPrimeNumber = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  const primeNumberList = [2,3,4,5,6,7,8,9];
  const result = primeNumberList.filter(e => checkPrimeNumber(e));
  console.log(result);

