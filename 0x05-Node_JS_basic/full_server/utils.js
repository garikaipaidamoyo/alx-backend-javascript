const fs = require('fs').promises;

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const students = lines.map(line => line.split(',')[0]);
    return {
      CS: students.filter(student => student[2] === 'CS').sort(),
      SWE: students.filter(student => student[2] === 'SWE').sort(),
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
