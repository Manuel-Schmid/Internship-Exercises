import { getPositionOfLineAndCharacter } from "typescript";
import { deflateRaw } from "zlib";

class Anagram {
    isAnagram(word: string, wordlist: string[]) {
        /* let wordArr = word.split(''); */
        word = word.toLowerCase();
        wordlist = wordlist.map(function(wordListItem){
            return wordListItem.toLowerCase();
        })
        if (wordlist.indexOf(word) > -1){
            throw Error("The word must not appear in the list");
        }

        word = word.split('').sort().join('');
        let result = [];
        for (let i = 0; i < wordlist.length; i++) { 
            let sortedWord = wordlist[i].split('').sort().join('');

            if (word === sortedWord) {
                result.push(wordlist[i]);
            }
        }
        return result;
    }
}
export default Anagram;