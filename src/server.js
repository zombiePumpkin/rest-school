import App from './app';

const port = process.env.APP_PORT;

App.listen(port, () => {
  console.log(`Listenning in port ${port}`);
  console.log(`CTRL + left click to http://localhost:${port}`);
});
