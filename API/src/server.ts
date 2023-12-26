import  express  from 'express';
const app = express();

app.use(express.json());
const port = 8000;

app.get('/', (req,res) => {
  return res.send({message: 'Hello World'});
});

app.listen(port, () => console.log(`Server is running ${port}`));