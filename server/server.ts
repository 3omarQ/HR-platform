const express = require('express')
const app = express();
const port = 4000;

app.get('/', (req: any, res: any) => {
    return res.send('Hello World!');
  });
  
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
