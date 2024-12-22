import express from 'express';
import cors from 'cors';

import productRoutes from './routes/productRoutes';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // Allow only your frontend origin

app.use(express.json());
app.use('/api/v1', [productRoutes]);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
