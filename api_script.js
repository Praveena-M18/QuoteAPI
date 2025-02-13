document.getElementById('qbut').addEventListener('click', fetchQuote);

async function fetchQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: { 'X-Api-Key': 'qSnmoHgRgzgLCgk8zL1z7Q==saTQ5yxgRZjw50xA' }
        });
        const data = await response.json(); 
        const quote = data[0]?.quote || 'No quote found';
        const author = data[0]?.author || 'Unknown';
        document.getElementById('quote').innerText = quote;
        document.getElementById('author').innerText = `- ${author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').innerText = 'Failed to fetch quote. Please try again later.';
        document.getElementById('author').innerText = '';
    }
}

document.getElementById('cbut').addEventListener('click', copyQuote);

function copyQuote() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const text = `${quote} ${author}`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Error copying to clipboard:', err);
    });
}
