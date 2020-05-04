const sum = require('./samplejest');
const dbseeder = require('../db/seeder.js');

// Test of Jest Setup
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test DB Seeder
test('creates specified number of records', () => {
  expect()
})
