class PrimeNumbers {
    isPrimeNumber(num: number) {

        if (num <= 1) {
            return false;
        }
        if (num % 2 == 0 && num > 2) {
            return false;
        }
        let s = Math.sqrt(num);
        for(let i = 3; i <= s; i++){
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }



    primesInRange(limit: number) {

        let result = [];
        for (let num = 0; num <= limit; num++) {
            if (this.isPrimeNumber(num)/*  === true */) {
                result.push(num);
            }                    
        }   
        return result;
    }

   /*  let someUsers = users.filter(item => item.id < 3);
    alert(someUsers.length); // 2 */

    primesInRange2(limit: number) {
  /*       let range = Array.from(Array(limit).keys()); // fills the Array range with numbers from 1 - (limit)
        range = range.filter(this.isPrimeNumber); */ //filters all numbers out that receive false from the isPrimeNumber function
        return Array.from(Array(limit).keys()).filter(this.isPrimeNumber); //macht das gleiche wie die obigen zwei Lines
    }
}
export default PrimeNumbers;

