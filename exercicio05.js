// 5) Escreva um programa que inverta os caracteres de um string.

function reverseString(word) {
    let characterList = word.split("");
    let reverseCharacterList = [];

    for(let i = characterList.length - 1; i >= 0; i--) {
        reverseCharacterList.push(characterList[i]);
    }

    console.log(reverseCharacterList.join(""));
};

reverseString("Ola mundo");
