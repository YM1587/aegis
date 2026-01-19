import { DEFAULT_PROTECTION_STATUS } from '@aegis/shared';

const RULESET_ID = 'ruleset_1';
const OFFSCREEN_PATH = 'src/offscreen.html';

let creating: Promise<void> | null = null; // A global promise to avoid concurrency issues

async function setupOffscreenDocument(path: string) {
    // Check if offscreen document already exists
    // @ts-ignore
    if (await chrome.offscreen.hasDocument()) return;

    // Create offscreen document
    if (creating) {
        await creating;
    } else {
        creating = chrome.offscreen.createDocument({
            url: path,
            reasons: [chrome.offscreen.Reason.WORKERS || 'WORKERS'],
            justification: 'Run AI model for content analysis',
        });
        await creating;
        creating = null;
    }
}

chrome.runtime.onInstalled.addListener(async () => {
    chrome.storage.local.set({ protectionStatus: DEFAULT_PROTECTION_STATUS });
    console.log('Aegis extension installed');
    await setupOffscreenDocument(OFFSCREEN_PATH);
});

chrome.runtime.onStartup.addListener(async () => {
    await setupOffscreenDocument(OFFSCREEN_PATH);
});

// Route messages to offscreen
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.target === 'offscreen') {
        // Ensure offscreen exists before sending
        setupOffscreenDocument(OFFSCREEN_PATH).then(() => {
            chrome.runtime.sendMessage(message, sendResponse);
        });
        return true;
    }
});

// Listen for status changes
chrome.storage.onChanged.addListener((changes) => {
    if (changes.protectionStatus) {
        const isEnabled = changes.protectionStatus.newValue.isEnabled;
        updateBlockingRules(isEnabled);
    }
});

async function updateBlockingRules(isEnabled: boolean) {
    try {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: isEnabled ? [RULESET_ID] : [],
            disableRulesetIds: isEnabled ? [] : [RULESET_ID]
        });
        console.log(`Blocking rules ${isEnabled ? 'enabled' : 'disabled'}`);
    } catch (error) {
        console.error('Failed to update blocking rules:', error);
    }
}
