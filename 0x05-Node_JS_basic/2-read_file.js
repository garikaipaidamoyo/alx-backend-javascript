const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const csStudents = [];
    const sweStudents = [];

    let totalStudents = 0;

    lines.forEach((line, index) => {
      if (index !== 0) {
        const [firstName, , field] = line.split(',');
        if (field === 'CS') {
          csStudents.push(firstName);
        } else if (field === 'SWE') {
          sweStudents.push(firstName);
        }
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
    throw new Error(error.message);
  }
}

module.exports = countStudents;

