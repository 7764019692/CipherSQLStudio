const express = require('express'); 
const router = express.Router(); 
const OpenAI = require('openai'); 
 
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); 
 
router.post('/', async (req, res) => { 
  const { question, schema } = req.body; 
 
  try { 
    const prompt = `You are an SQL tutor. Give a helpful hint, NOT the solution. Question: ${question}. Tables: ${schema}. Avoid writing SQL code.`; 
 
    const response = await client.chat.completions.create({ 
      model: 'gpt-4o-mini', 
      messages: [{ role: 'user', content: prompt }], 
    }); 
 
    res.json({ hint: response.choices[0].message.content }); 
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  } 
}); 
 
module.exports = router;
