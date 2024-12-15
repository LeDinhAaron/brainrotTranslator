function translateToUzz(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 1; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + "uzz";
        }
    }
    return word + "uzz";
}

function translateSentence(sentence) {
    return sentence
        .split(" ")
        .map(translateToUzz)
        .join(" ");
}

document.getElementById("translateButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput) {
        const result = translateSentence(userInput);
        document.getElementById("result").textContent = result;
        document.getElementById("definition").textContent = userInput + " huzz";
    } else {
        document.getElementById("result").textContent = "Please enter a valid sentence.";
    }
});