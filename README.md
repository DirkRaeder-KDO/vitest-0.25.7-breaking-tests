# Updating to Vitest 0.25.7 breaks unit tests

Created with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Steps to reproduce

- Install the dependencies using your favorite package manager.
- Run the unit test (`pnpm test:unit`, `yarn test:unit`, `npm run test:unit`)
- Update `vitest` from 0.25.6 to 0.25.7
- Run the test again

## Expected behavior

- In both cases, the unit test succeeds.

## Actual behavior

- The unit tests succeeds only with vitest@0.25.6
- It fails with vitest@0.25.7

## Later versions of Vitest

The test fails with 0.28.4 (latest) as well.

## Notable changes from 0.25.6 to 0.25.7

- Vite has been upgraded from 3 to 4.
- Rollup is a dependency of Vite and has been upgraded from 2 to 3

