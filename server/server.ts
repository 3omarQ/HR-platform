import express, { Request, Response } from 'express';

const app = express();
const connectWithDataBase = require("./connect-with-dataBase/connect-with-dataBase");
const port = 8000;


//----------------------json form-------------------------------------------//
app.use(express.json());

//----------------------connect with dataBase-------------------------------//
connectWithDataBase();
 


const SignIn = require('./routes/sign-in')
const SignUp = require('./routes/sign-up')


app.use('/signUp',SignUp)
app.use('/signIn',SignIn)


app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World!');
  });
  
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
