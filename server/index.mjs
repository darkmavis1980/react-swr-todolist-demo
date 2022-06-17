import express from 'express';
import cors from 'cors';
import { createClient } from 'redis';
import { validateList, delay } from './lib/utils.mjs';

const client = createClient({
  url: `redis://redis:6379`
});

const app = express();

app.use(express.json());
app.use(cors());

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

app.get('/todo', async (req, res) => {
  // await delay(3000);// artificially add a delay to show the loading
  const data = await client.get('list');
  const todo = validateList(JSON.parse(data));
  res.status(200).json({todo});
});

app.post('/todo', async (req, res) => {
  const { task } = req.body;
  try {
    if (!task) {
      throw new Error('you did not pass any task');
    }

    const data = await client.get('list');
    const list = validateList(JSON.parse(data));

    const todoList = new Set(list);
    todoList.add(task);
    const response = await client.set('list', JSON.stringify(Array.from(todoList)));

    if (response !== 'OK') {
      throw new Error(`we couldn't add it to the list!`);
    }

    res.status(200).json({todo: Array.from(todoList)});
  } catch (error) {
    console.log(error);
    res.status(500).end('something went wrong!');
  }
});

app.delete('/todo', async (req, res) => {
  const { task } = req.body;
  try {
    if (!task) {
      throw new Error('you did not pass any task');
    }

    const data = await client.get('list');
    const list = validateList(JSON.parse(data));

    const todoList = new Set(list);
    todoList.delete(task);
    const response = await client.set('list', JSON.stringify(Array.from(todoList)));

    if (response !== 'OK') {
      throw new Error(`we couldn't deleted it from the list!`);
    }

    res.status(200).json({todo: Array.from(todoList)});
  } catch (error) {
    console.log(error);
    res.status(500).end('something went wrong!');
  }
});

const { SERVER_PORT: port = 7878 } = process.env;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});
