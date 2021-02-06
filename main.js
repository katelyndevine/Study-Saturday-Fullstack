const { green, blue, red } = require("chalk"); // colrizes our console code
const server = require("./server/app");
const db = require("./server/db/db");
const PORT = 3000;

//syncing our database ans listening to our port
const init = async () => {
  try {
    await db.sync();
    console.log(green("Database synced"));

    server.listen(PORT, () =>
      console.log(blue("Listening on http://localhost:3000"))
    );
  } catch (err) {
    console.log(red(`There was an error starting up!`, err));
  }
};

init();
