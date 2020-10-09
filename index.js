const data = require('./data');
const tools = require('./tools');
/**
 * Philips
 */
async function main() {
  tools.print(">>> IT Professional Day <<<");
  tools.print("Developer is not a developer without...");

  for (let i = 0; i < data.length; i++) {
    const { emoji, description } = data[i];
    await tools.print(`${emoji}  ${description}`, 1500);
  }
}

main();
