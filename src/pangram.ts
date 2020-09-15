class Pangram {
    isPangram(sentence: string) {

        sentence = sentence.toLowerCase();
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alphaArr = alphabet.split(''); 
        let sentenceArr = sentence.split('');
        
                
        for (let i = 0; i < sentenceArr.length; i++) {
            let letter = sentenceArr[i];
            let alphabetIndex = alphaArr.indexOf(letter);                
            if (alphabetIndex > -1) {
                alphaArr.splice(alphabetIndex,1)
            }

        }
        return alphaArr.length === 0;   
    }
}
export default Pangram;