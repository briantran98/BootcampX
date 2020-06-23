SELECT count(assistance_requests.*) AS total_requests, students.name
FROM students
JOIN assistance_requests ON student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;