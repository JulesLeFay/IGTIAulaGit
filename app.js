//imports
import mongoose from 'mongoose';
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';

dotenv.config();
//conectando ao mongodb pelo mongoose
await mongoose.connect(
  `mongodb+srv://${process.env.USER_DB}:${process.env.PWD_DB}@learning.mbug9.mongodb.net/grades?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log('Conectado com Sucesso')
);

const app = express();
app.use(express.json());
app.use(studentRouter);
mongoose.set('useFindAndModify', false);

app.listen(process.env.PORT, () => {
  console.log('API iniciada');
});
