/**
 * Optional seed script for local database testing.
 */
async function main() {
  console.log('Seed executed successfully.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
