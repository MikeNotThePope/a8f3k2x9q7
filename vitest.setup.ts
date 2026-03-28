import "@testing-library/jest-dom/vitest";
import * as matchers from "vitest-axe/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

expect.extend(matchers);

// Polyfill ResizeObserver for jsdom (needed by Radix Slider)
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof globalThis.ResizeObserver;

// Polyfill hasPointerCapture for jsdom (needed by Radix Select)
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}
if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
}
if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}

// Stub HTMLCanvasElement.getContext for jsdom (used by chart/canvas components)
HTMLCanvasElement.prototype.getContext = (() => null) as typeof HTMLCanvasElement.prototype.getContext;

// Suppress jsdom "not implemented" warnings for getComputedStyle with pseudo-elements
// jsdom warns when a pseudo-element argument is passed; strip it to avoid noise
const _origGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = (elt: Element) => _origGetComputedStyle(elt);

afterEach(() => {
  cleanup();
});
