import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes.mjs';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use('/users', userRoutes);