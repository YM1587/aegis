console.log('Aegis content script loaded');

const scanPage = () => {
    // Placeholder for DOM scanning
    const textNodes = document.body.innerText;
    console.log('Scanning page content length:', textNodes.length);
    // Send to background or process locally
};

// Run scan on load
scanPage();
