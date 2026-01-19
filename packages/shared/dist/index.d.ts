export interface ProtectionStatus {
    isEnabled: boolean;
    level: 'gentle' | 'balanced' | 'strict';
}
export declare const DEFAULT_PROTECTION_STATUS: ProtectionStatus;
