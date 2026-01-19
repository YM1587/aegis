import { ToxicityDetector } from '@aegis/ai-core';

console.log('Offscreen document loaded');

const detector = new ToxicityDetector();

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.target !== 'offscreen') return;

    if (message.type === 'ANALYZE_TEXT') {
        (async () => {
            try {
                const result = await detector.analyze(message.data.text);
                sendResponse(result);
            } catch (error) {
                console.error('Analysis error:', error);
                sendResponse({ error: 'Analysis failed' });
            }
        })();
        return true; // Keep channel open for async response
    }
});
