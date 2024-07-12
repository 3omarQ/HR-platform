import express, { Request, Response } from 'express';

const app = express();
const port = 8000;
const connectWithDataBase = require("./connect-with-dataBase/connect-with-dataBase");


//----------------------connect with dataBase-------------------------------------------//
connectWithDataBase();
 
app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World!');
  });
  
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
