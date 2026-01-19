import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { DEFAULT_PROTECTION_STATUS, ProtectionStatus } from '@aegis/shared';

const Popup = () => {
    const [status, setStatus] = useState<ProtectionStatus>(DEFAULT_PROTECTION_STATUS);

    useEffect(() => {
        chrome.storage.local.get(['protectionStatus'], (result) => {
            if (result.protectionStatus) {
                setStatus(result.protectionStatus);
            }
        });
    }, []);

    return (
        <div className="w-80 p-4 bg-slate-50 min-h-[300px]">
            <h1 className="text-xl font-bold text-slate-800 mb-4">Aegis</h1>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Protection Status</p>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${status.isEnabled ? 'bg-green-500' : 'bg-slate-300'}`} />
                    <span className="font-medium">{status.isEnabled ? 'Active' : 'Paused'}</span>
                </div>
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
);
