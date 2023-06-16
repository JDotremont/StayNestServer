import express, { json } from "express";
import expressAsyncErrors from 'express-async-errors';
import cors from 'cors';
import { sequelize } from "../src/db.js";
import { Booking } from "./models/booking.model.js";
import { Message } from "./models/message.model.js";
import { Property } from "./models/property.model.js";
import { User } from "./models/user.model.js";
import { Wishlist } from "./models/wishlist.model.js";
import { Availability } from "./models/availability.model.js";
import { routes } from "./routes/routes.js";
import "./models/associations.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors())

app.use(express.static('./uploads '));

app.use(express.json());

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(jwtMiddleware);

// app.use(errorMiddleware)

// sequelize.sync({ force: false })
//   .then(() => console.log('Database & tables created!'))
//   .catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
