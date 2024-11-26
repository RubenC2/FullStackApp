const queries = {
    getAllArticulos: `SELECT * FROM articulos`,
    getArticuloByTitle: `
    SELECT id
    FROM articulos
    WHERE titulo = $1`,
    // createUser: `INSERT INTO users (nombre, apellidos, email, password) 
    // VALUES ($1, $2, $3, $4)`,
    // updateUser: `UPDATE users
    // SET nombre = $1 , apellidos = $2, email = $3, password = $4
    // WHERE email = $3`,
    // deleteUser: `DELETE FROM users
    // WHERE email = $1`, 
}
module.exports = queries;