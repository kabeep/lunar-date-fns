import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: ['verbose'],
        include: ['src/**/test.ts'],
        // Speed up tests, but also it's a workaround for the browser issue:
        // https://github.com/vitest-dev/vitest/issues/5382
        isolate: false,
        coverage: {
            provider: 'istanbul',
            include: ['src'],
            exclude: ['src/_lib', 'src/**/types.ts', 'src/**/constants.ts', 'src/**/test.ts'],
        },
    },
});
