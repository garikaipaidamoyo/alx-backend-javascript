// 1-stdin.js

process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  if (name) {
    console.log(`Your name is: ${name}`);
  }

  // Move the closing statement outside the if block
  process.stdout.write('This important software is now closing\n');
  process.exit();
});

// Export the functionality
module.exports = {
  process,
};
