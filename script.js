let inputText = document.querySelector(".input-text")
let wordCount = document.querySelector(".word-count")
let characterCount = document.querySelector(".character-count")
let sentenceCount = document.querySelector(".sentence-count")
let paragraphCount = document.querySelector(".para-count")

inputText.addEventListener("input", () => {
    //characterCount with spaces
    // characterCount.textContent = inputText.value.length;

    //characterCount without spaces
    characterCount.textContent = inputText.value.replace(/\s+/g, '').length;

    //removing white spaces
    let trimmedText = inputText.value.trim();

    //word count
    wordCount.textContent = trimmedText.split(/\s+/).filter(item => item).length

    //sentence count
    sentenceCount.textContent = trimmedText.split('.').filter((item) => item).length

    //count paragraphs
    paragraphCount.textContent = trimmedText.split("\n\n").filter((item) => item).length
})