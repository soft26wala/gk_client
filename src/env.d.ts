/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    showToast: (message: string, type?: 'info' | 'success' | 'error', duration?: number) => void;
  }
}

export {};