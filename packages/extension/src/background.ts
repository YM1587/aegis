import { DEFAULT_PROTECTION_STATUS } from '@aegis/shared';

const RULESET_ID = 'ruleset_1';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ protectionStatus: DEFAULT_PROTECTION_STATUS });
    console.log('Aegis extension installed');
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
