import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, waitFor } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('onMount test', () => {
    afterEach(() => {
        cleanup();
    });

    it('execute the onMount function', async () => {
        const { container } = render(Page);
        const element = container.querySelector('p');
        expect(element?.textContent?.trim()).toContain(': yes');
    });
});
