# @lucaspickering/eslint-config

My personal ESlint config for TypeScript projects. There are multiple configs available:

- `@lucaspickering` - Base TypeScript config
- `@lucaspickering/eslint-config/react` - TypeScript+React config

To use any of these, you need to install the proper peer dependencies, which you can find by running:

```sh
npm info --json @lucaspickering/eslint-config peerDependencies
```

The configs are combined into one package to make it easier to bump versions. This does mean that you could potentially be pulling in unnecessary dependencies for configs you aren't using, but that tradeoff is worth it for me right now since 95% of my projects are TypeScript+React. You could also just exclude the dependencies you know you don't need.
