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
}
export default PrimeNumbers;