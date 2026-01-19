import { DEFAULT_PROTECTION_STATUS } from '@aegis/shared';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ protectionStatus: DEFAULT_PROTECTION_STATUS });
    console.log('Aegis extension installed');
});
