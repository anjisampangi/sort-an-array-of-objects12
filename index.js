function sortedStudents(students) {
  students.sort((a, b) => {
    if (a.chemistry + a.biology > b.chemistry + b.biology) return -1;
    if (a.chemistry + a.biology < b.chemistry + b.biology) return 1;
    if (a.biology > b.biology) return -1;
    if (a.biology < b.biology) return 1;
    const [aDay, aMonth, aYear] = a.dob.split('-').map(Number);
    const [bDay, bMonth, bYear] = b.dob.split('-').map(Number);
    if (aYear < bYear) return -1;
    if (aYear > bYear) return 1;
    if (aMonth < bMonth) return -1;
    if (aMonth > bMonth) return 1;
    if (aDay < bDay) return -1;
    if (aDay > bDay) return 1;
    return 0;
  });

  return students.map((student) => student.name);
}

let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];
console.log(sortedStudents(testCase1));
// Output: ["Virat Kohli", "Leo Messi", "Cristiano Ronaldo", "Rohit Sharma", "Viswanathan Anand"]

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];
console.log(sortedStudents(testCase2));
// Output: ["Leo Messi", "Cristiano Ronaldo", "Viswanathan Anand", "Rohit Sharma", "Virat Kohli"]
