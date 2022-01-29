import promiseQuery from "../promise-query";

/**
 * Franken-command to run TypeScript with the NextJS preset in use
 * elsewhere in the app:
 * npx -p @babel/core -p @babel/node babel-node -x .ts --presets next/babel -- ./lib/promise-query/manual-test.ts
 *
 */
main();

async function main() {
  const query = "SELECT * FROM users;";
  const result = await promiseQuery(query);
  console.log({ query, result });
}
