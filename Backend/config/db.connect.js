const mongoose = require("mongoose");

const initializeDBConnection = () => {
  mongoose
    .connect("mongodb+srv://satyam123:satyam278@cluster0.iod5nx6.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected To Database!"))
    .catch((error) => console.error("Connection To Database failed.", error));
};

module.exports = initializeDBConnection;
