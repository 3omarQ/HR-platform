import express, { Request, Response } from 'express';

const app = express();
const port = 8000;
const connectToDataBase = require("./connectToDataBase/ConnectToDataBase");


//----------------------connect with dataBase-------------------------------------------//
connectToDataBase();
 
app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World!');
  });
  
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
