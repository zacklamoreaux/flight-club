INSERT INTO users (display_name, auth_id)
VALUES ($1, $2)
returning *