import express from 'express';
import appRouting from './appRouting';

const app = express();

app.use(express.static('public'));

app.use(appRouting);

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`L I S T E N I N G  A T: ${PORT}`);
});

module.exports = {
  app,
  server,
};
