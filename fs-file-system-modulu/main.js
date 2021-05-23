const fs = require('fs');

fs.writeFile(
  __dirname + '/employees.json',
  '{"name": "Employee 1 Name", "salary": 2000}',
  'utf8',
  (error, data) => {
    if (error) throw error;
    console.log('CREATE: Successful!!');
  },
);

fs.readFile(__dirname + '/employees.json', 'utf8', (error) => {
  if (error) throw error;
  console.log('READ: Successful!!');
});

fs.writeFile(
  __dirname + '/employees.json',
  '{"name": "Employee 1 Name Changed", "salary": 5000}',
  'utf8',
  (error) => {
    if (error) throw error;
    console.log('UPDATE: Successful !!');
  },
);

fs.unlink(__dirname + '/employees.json', (error) => {
  if (error) throw error;
  console.log('DELETE: Successful !!');
});
