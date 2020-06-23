SELECT assignments.id, assignments.name AS name, assignments.day AS day, assignments.chapter as chapter, COUNT(assistance_requests.*) AS total_requests
FROM assistance_requests
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;