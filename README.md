# `ng-large`

## Reproduction

This example attempts to use `jest-preset-angular` with ESM on latest Angular.
However, it hangs forever when executed. Can be reproduced with the following:

```shell
npm ci # Install dependencies.
npm test # Run Jest, hangs forever.
```

This seems to be related to TypeScript 5.0. Downgrading to TS 4.9.4 passes
successfully.

With the `--expose-internals` flag in Node and opening a debugger
(`npm run test:debug`), we can observe an assertion error
[in TypeScript](https://github.com/microsoft/TypeScript/blob/69d4d57b61b3a5dcc3f9d172c11e0827a47f24fc/src/compiler/debug.ts#L196):

> Unhandled SyntaxKind: ImportClause.
