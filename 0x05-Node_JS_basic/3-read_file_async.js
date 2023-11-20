const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const students = lines.map(line => line.split(',')[0]);
    
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${students.length}. List: ${students.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
