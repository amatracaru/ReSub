/**
 * utils.ts
 * Copyright: Microsoft 2019
 */
import { map } from './lodashMini';

export type KeyOrKeys = string | number | (string | number)[];

export const normalizeKey = (key: string | number): string => (
    typeof key === 'number' ? key.toString() : key
);

export const normalizeKeys = (keyOrKeys: KeyOrKeys): string[] => (
    map(Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys], normalizeKey)
);

export const assert = (cond: any, message?: string | undefined) => {
    if (!cond) {
        throw new Error(`[resub] ${ message || 'Assertion Failed' }`);
    }
};

export function noop() {
    // noop
}