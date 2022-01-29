# Planetscale Test Drive

This is a repo I've set up to test out PlanetScale. Lots to learn!

## Getting started

```bash
npm i # install dependencies
npm run dev
```

## Steps so far

1. Followed [PlanetScale's CLI Quick-Start tutorial](https://docs.planetscale.com/tutorials/planetscale-quick-start-guide#quick-start-with-the-planetscale-cli)
   - End result is a test database, with a `main` branch, "promoted to production"
2. Set up this repo
3. Set up a NextJS app
   - Did `npx create-next-app@latest --typescript`, as on the [Getting Started Guide](https://nextjs.org/docs)
   - Added [custom PostCSS config](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins) via `postcss.config.json`, to enable `nesting-rules`
   - Set [baseUrl module path alias option](https://nextjs.org/docs/advanced-features/module-path-aliases) to project root `.`, via `tsconfig.json`.
4. Deployed NextJS to Vercel - https://vercel.com/zchsh/planetscale-test-drive
5. Follow the steps to [connect an app to PlanetScale](https://docs.planetscale.com/tutorials/connect-any-application)
   - PlanetScale really just guides you through generating access credentials
   - Remainder of steps were basically following [this more detailed Node-specific guide from PlanetScale](https://planetscale.com/blog/create-a-harry-potter-api-with-node-js-express-mysql-and-planetscale)

## Next steps

- [x] Build a simple app that accesses and displays data from the database
- [ ] Learn about and test out data branching
- [ ] Learn about and test out schema changes (made via "deploy requests"?)
