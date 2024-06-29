//Problem 1
function countCharacters(str){
    const counts ={};
    const order = [];

    for(let char of str){
        char = char.toUpperCase();
        if(char!==' '){
            if(!counts[char]){
                counts[char] =0;
                order.push(char);
            }
            counts[char]++;
        }
    }
    for(let c of order){
        console.log(`${c}-${counts[c]}`);
    }
}
const problemResult = countCharacters("Amolya Sharma");
console.log(problemResult);
