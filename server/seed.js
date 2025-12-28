require('dotenv').config();
const mongoose = require('mongoose');
const Assignment = require('./models/Assignment');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding');

    await Assignment.deleteMany();

    await Assignment.create({
      title: 'Employees with Above Average Salary',
      difficulty: 'Easy',
      question:
        'Find employees whose salary is greater than the average salary of all employees.',
      sampleTables: [
        {
          tableName: 'employees',
          columns: [
            { columnName: 'id', dataType: 'INTEGER' },
            { columnName: 'name', dataType: 'TEXT' },
            { columnName: 'salary', dataType: 'INTEGER' }
          ],
          rows: [
            { id: 1, name: 'John', salary: 50000 },
            { id: 2, name: 'Jane', salary: 70000 },
            { id: 3, name: 'Bob', salary: 40000 }
          ]
        }
      ]
    });

    console.log('Assignment inserted successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
