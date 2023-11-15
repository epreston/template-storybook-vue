import { describe, expect, it, vi } from 'vitest';

// ---------------------------------------------------------

describe('test environment', () => {
  it('is working as expected', () => {
    const obj = {};
    expect(obj).toBeDefined();
    expect(true).toBeTruthy();
  });
});

// ---------------------------------------------------------

describe('type check', () => {
  it('should be type string', () => {
    expect(typeof '').toBe('string');
  });

  it('should be type number', () => {
    expect(typeof 10).toBe('number');
  });

  it('should be type boolean', () => {
    expect(typeof true).toBe('boolean');
  });

  it('should be type undefined', () => {
    expect(typeof undefined).toBe('undefined');
  });

  it('should be type object', () => {
    expect(typeof { foo: 'bar' }).toBe('object');
  });

  it('should be type function', () => {
    expect(typeof function () {}).toBe('function');
  });

  it('should be type null', () => {
    expect(typeof null).toBe('object');
  });
});
