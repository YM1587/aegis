export interface ProtectionStatus {
    isEnabled: boolean;
    level: 'gentle' | 'balanced' | 'strict';
}

export const DEFAULT_PROTECTION_STATUS: ProtectionStatus = {
    isEnabled: true,
    level: 'balanced'
};
