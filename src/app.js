import express, { json } from "express";
import expressAsyncErrors from 'express-async-errors';
import cors from 'cors';
import { sequelize } from "../src/db.js";
import { Booking } from "./models/booking.model.js";
import { Message } from "./models/message.model.js";
import { Property } from "./models/property.model.js";
import { User } from "./models/user.model.js";
import { Wishlist } from "./models/wishlist.model.js";
import { routes } from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(cors())

app.use(express.static('./uploads '));

app.use(express.json());

app.use(routes);

// app.use(jwtMiddleware);

// app.use(errorMiddleware)

// sequelize.sync({ force: true })
//   .then(() => console.log('Database & tables created!'))
//   .catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
