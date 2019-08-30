const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllMembers = (req, res) => {
  pool.query("SELECT * FROM members", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getMemberById = (req, res) => {
  let sql = "SELECT * FROM members WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createMember = (req, res) => {
  const { username, email, phone, picture } = req.body
  let sql = "INSERT INTO members (username, email, phone, picture) VALUES (?, ?, ?, ?)"
  sql = mysql.format(sql, [ username, email, phone, picture ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateMemberById = (req, res) => {
  const { username, email, phone, picture } = req.body
  let sql = "UPDATE members SET username = ?, email = ?, phone = ?, picture = ? WHERE id = ?"
  sql = mysql.format(sql, [ username, email, phone, picture, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteMemberById = (req, res) => {
  let sql = "DELETE FROM members WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} member(s)` });
  })
}

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMemberById,
  deleteMemberById
}