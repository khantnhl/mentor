const express = require('express');
const router = express.Router();
const pool = require('../db')

// GET
//route to fetch all 
router.get('/mentors', async(req, res) => {
  try{
      console.log('FETECHED.')
      const result = await pool.query('SELECT * FROM mentors');
      res.status(200).json(result.rows)
  } catch (e)
  {
      console.error(e);
      res.status(500).send('Server Error!');
  }
});

//get a mentor
router.get('/mentors', async(req, res) => {
  try{
    const {id} = req.params;
    const data = await pool.query('SELECT * FROM mentors WHERE id = $1', [id]);

    res.json(data.rows[0]);
  } catch(e){
    console.error(e)
    res.status(500).send('Server Error!')
  }
});

//POST: Add a new mentor
router.post('/mentors', async(req, res) => {
  const { name, school, bio, job } = req.body;
  try{
    const result = await pool.query(
      'INSERT INTO mentors (name, school, bio, job) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, school, bio, job]);
      res.status(201).json(result.rows[0])
  } catch(e){
    console.error(e, "ERROR POST METHOD. ADDING NEW MENTOR");
    res.status(500).send('Server Error!');
  }
});


//remove a mentor
router.delete('/mentors', async(req, res)=> {
  try{
    const {id} = req.params;
    const deletethisid = await pool.query('DELETE FROM WHERE id = $1', [id]);
    res.json('id successfully removed.')
  } catch(e){
    console.error(e.message);
  }
});

module.exports = router