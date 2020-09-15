class CountWords {
    numberOfWords(sentence: String){
                
        let sentenceArr = sentence.split(' ');
        sentenceArr = sentenceArr.map(function(sentenceItem){
            return sentenceItem.toLowerCase();
        })   
        let result: any = {};
        
        for (let i = 0; i < sentenceArr.length; i++) {
            let word = sentenceArr[i];

            if(!Object.keys(result).includes(word)) {
                result[word] = 0;
            }
            result[word] += 1;

        }      
        return result;
    }
}
export default CountWords;