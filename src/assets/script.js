async function generateSHA256Hash(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

document.getElementById('generateHash').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const hash = await generateSHA256Hash(inputText);
    document.getElementById('outputHash').textContent = hash;
});
