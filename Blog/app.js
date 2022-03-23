const express = require('express');
const dotenv = require('dotenv');
const hbs= require('express-handlebars').engine;
const app = express();
const postRoutes = require('./routes/post');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const colors = require('colors');
dotenv.config({ path: "./config/config.env" });



// Connect to DB 
connectDB();

const PORT = process.env.PORT || 8080;

app.engine(
	"hbs",
	hbs({
		partialsDir: __dirname + "/views/partials",
		extname: "hbs",
		runtimeOptions: {
      allowProtoMethodsByDefault: true, 
			allowProtoPropertiesByDefault: true
		},
	})
);

app.set("view engine", "hbs");
app.use(express.urlencoded({extended:false}))

// add the routes 
app.use(postRoutes)



app.listen(PORT, () => console.log(`server is running on port ${PORT}`.blue.underline))