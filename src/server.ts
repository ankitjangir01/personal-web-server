import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './database';

dotenv.config();

const app: Application = express();

// Connect to Database
connectDB();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const browsingDataRoutes = require('./routes/browsingData.route');

app.use('/api/browsingData', browsingDataRoutes());

app.get('/', (req, res) => {
  res.send("Server is up!");
})

// Catch-all handler for routes not matched
app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});