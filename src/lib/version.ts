export const VERSION = 'v0.1.0';

declare const __BUILD_NUMBER__: string;
export const BUILD = typeof __BUILD_NUMBER__ !== 'undefined' ? __BUILD_NUMBER__ : 'dev';
