import app from "./app";

const port = process.env.PORT || 4000;

const startApp = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is ready at: localhost:${port} 🐶`);
    });
  } catch (e) {
    console.error(`Failed to start app with error 💣: ${e}`);
  }
};

startApp();
