import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is online!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
