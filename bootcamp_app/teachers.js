const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
GROUP BY teacher, cohort
ORDER BY teacher;
`;

const cohortName = process.argv[2] || 'JUL02';
const values = [cohortName]

pool.query(queryString, values)
.then((res) => {
    console.log(res.rows)
})
.catch(err => console.error('query error', err.stack));