import express from 'express';
import { connectDB } from './config/db.js'; 
import productRoute from './routes/product.route.js'; // Import the product route  

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
try {
  connectDB();
} catch (err) {
  console.error('DB Connection Failed', err);
}

app.use('/api/product', productRoute); 

//UmHaFkFum02tEtVu

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
