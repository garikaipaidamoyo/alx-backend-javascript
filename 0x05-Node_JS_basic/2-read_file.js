const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const csStudents = [];
    const sweStudents = [];

    lines.forEach(line => {
      const [firstName, , field] = line.split(',');
      if (field === 'CS') {
        csStudents.push(firstName);
      } else if (field === 'SWE') {
        sweStudents.push(firstName);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
    throw new Error(error.message);
  }
}

module.exports = countStudents;

