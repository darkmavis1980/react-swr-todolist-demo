# Todo List app in React 18

This is a simple demo app written in React 18 to demo how to use mutations with the [SWR](https://swr.vercel.app/) hook and Suspense.

## Backend

The backend API is a simple [Express.js](https://expressjs.com/) application with [Redis](https://redis.io/) as a database, code is stored in the `server` folder.
To run it you will need [docker](https://www.docker.com/products/docker-desktop/), once docker is installed just run the following command:

```bash
# Running in background
docker-compose up -d

# Or in verbose mode
docker-compose up
```

To stop the backend API simply run `docker-compose down`.

### Services

- `server`: the backend API available at `http://localhost:7878`
- `redis`: Redis database available at `redis://localhost:6379`
- `redis-commander`: A Redis web GUI to view the data in the Redis container, available at `http://localhost:8081`

## React application

### Install dependencies

Just install dependencies with `npm install`.

### Run the application

Once the Backend API is up and running, just run the command `npm run dev`.
The the application will be available at `http://localhost:3000`.
