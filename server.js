const express = require('express');
const hey = require("give-me-a-joke");
const app = express();
const PORT = process.env.PORT || 8080;;

// Route 1: Simple Hello
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Route 2: JSON API
app.get('/api/data', (req, res) => {
  res.json({
    message: 'API is working!',
    time: new Date().toISOString()
  });
});

app.get('/joke', (req, res) =>{
  hey.getRandomDadJoke((joke) => {
    res.json({ joke })
  }) 
})

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/hello`);
});
