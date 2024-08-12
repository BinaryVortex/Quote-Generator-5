const apiurl = "https://api.quotable.io/random";
const cont = document.querySelector(".content");
const auth = document.querySelector(".author");
const genButton = document.querySelector(".gen");
const loader = document.querySelector(".loader");

async function getQuote(url) {
    try {
        // Set loading state
        cont.innerHTML = "Fetching a new quote...";
        auth.innerHTML = "";
        genButton.disabled = true;
        loader.style.display = 'block'; // Show the loader

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        cont.innerHTML = "\"" + data.content + "\"";
        auth.innerHTML = "-" + data.author;
    } catch (error) {
        cont.innerHTML = "Oops! Something went wrong.";
        auth.innerHTML = "Please try again later.";
        console.error(error);
    } finally {
        // Hide the loader and re-enable the button after fetching
        loader.style.display = 'none';
        genButton.disabled = false;
    }
}

// Fetch the initial quote on page load
getQuote(apiurl);
