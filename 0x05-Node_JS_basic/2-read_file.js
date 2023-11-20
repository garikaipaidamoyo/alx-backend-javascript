const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const students = lines.map(line => line.split(',')[0]);

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${students.length}. List: ${students.join(', ')}`);
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
