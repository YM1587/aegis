
console.log('Aegis content script loaded');

// Heuristic to find meaningful text paragraphs
function getTextNodes(root: Node) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes: Text[] = [];
    let node;
    while (node = walker.nextNode()) {
        const text = node.textContent?.trim();
        // Only care about substantial text blocks
        if (text && text.length > 30 && node.parentElement) {
            nodes.push(node as Text);
        }
    }
    return nodes;
}

async function analyzeNode(node: Text) {
    const text = node.textContent?.trim();
    if (!text) return;

    try {
        // Send to background -> offscreen -> AI
        const response = await chrome.runtime.sendMessage({
            target: 'offscreen',
            type: 'ANALYZE_TEXT',
            data: { text }
        });

        if (response && response.isToxic) {
            console.log('Blocking toxic content:', text.substring(0, 20) + '...', response.score);
            blurElement(node.parentElement as HTMLElement);
        }
    } catch (e) {
        // Fail silently
    }
}

function blurElement(element: HTMLElement) {
    element.style.filter = 'blur(10px)';
    element.style.pointerEvents = 'none';
    element.setAttribute('data-aegis-blocked', 'true');
    element.title = 'Content hidden by Aegis AI';
}

const scanPage = async () => {
    console.log('Aegis AI: Starting page scan...');
    const nodes = getTextNodes(document.body);
    console.log(`Found ${nodes.length} text nodes to analyze.`);

    // Analyze in chunks to avoid freezing
    const CHUNK_SIZE = 3;
    for (let i = 0; i < nodes.length; i += CHUNK_SIZE) {
        const chunk = nodes.slice(i, i + CHUNK_SIZE);
        await Promise.all(chunk.map(analyzeNode));
        // Small delay between chunks
        await new Promise(r => setTimeout(r, 100));
    }
};

// Start scanning
// Delay slightly to allow main content to settle
setTimeout(scanPage, 1000);
