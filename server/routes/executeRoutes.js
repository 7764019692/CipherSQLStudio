const express = require('express');
const router = express.Router();
const pool = require('../db/postgres');

// POST /api/execute
router.post('/', async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'SQL query is required' });
  }

  try {
    const result = await pool.query(query);
    res.json({
      columns: result.fields?.map(f => f.name) || [],
      rows: result.rows,
      rowCount: result.rowCount,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
