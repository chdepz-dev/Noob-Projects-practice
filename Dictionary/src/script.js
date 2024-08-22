const inputEl = document.getElementById("input");
const info = document.getElementById("headInfo");
const meaning = document.getElementById("meaning-container");

async function fetchMeaning(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        info.innerText = `Please wait a moment. We are searching for the meaning of "${word}".`;
        meaning.innerHTML = ""
        const response = await fetch(url);
        const result = await response.json();
        if (result[0] && result[0].word) {
            info.innerText = `Meaning for "${result[0].word}":`;
            meaning.innerHTML = `
               <p class=" text-lg text-center "><span class="text-white ">"${result[0].word}"</span>:
                ${result[0].meanings[0].definitions[0].definition}</p>
            `;
        } else {
            info.innerText = `Meaning for "${word}" is not available.`;
            meaning.innerHTML = `<p>N/A</p>`;
        }
    } catch (error) {
        console.log(error);
        info.innerText = `An error occurred while fetching the meaning for "${word}". Please try again later.`;
        meaning.innerHTML = `<p>N/A</p>`;
    }
}

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchMeaning(e.target.value)
    }
});
