import { Router } from 'express';
import multer from 'multer';
import { bookingController } from '../controllers/booking.controller.js';
import { messageController } from '../controllers/message.controller.js';
import { propertyController } from '../controllers/property.controller.js';
import { userController } from '../controllers/user.controller.js';
import { wishlistController } from '../controllers/wishlist.controller.js';
// import { jwtMiddleware } from '../middlewares/jwt.middleware.js';
// import { errorMiddleware } from '../middlewares/error.middleware.js';
import { bookingBodySchema } from '../validations/booking.body.schema.js';
import { messageBodySchema } from '../validations/message.body.schema.js';
import { propertyBodySchema } from '../validations/property.body.schema.js';
import { userBodySchema } from '../validations/user.body.schema.js';
import { wishlistBodySchema } from '../validations/wishlist.body.schema.js';
import { validationMiddleware } from '../middlewares/validation.middleware.js';
import { loginBodySchema } from '../validations/login.body.schema.js';
import { loginController } from '../controllers/login.controller.js';
import { bookingUpdateBodySchema } from '../validations/bokking_update.body.schema.js';
import { propertyUpdateBodySchema } from '../validations/property_update.body.schema.js';
import { userUpdateBodySchema } from '../validations/user_update.body.schema.js';

const upload = multer({ dest: './uploads/' });

export const routes = Router();

// User routes
routes.route('/users')
    .get(userController.getUsers)
    .post(validationMiddleware(userBodySchema), userController.createUser);

routes.route('/users/:id')
    .get(userController.getUserById)
    .put(validationMiddleware(userUpdateBodySchema), userController.updateUser)
    .delete(userController.deleteUser);

// Property routes
routes.route('/properties')
    .get(propertyController.getProperties)
    .post(upload.single('image'), validationMiddleware(propertyBodySchema), propertyController.createProperty);

routes.route('/properties/:id')
    .get(propertyController.getPropertyById)
    .put(upload.single('image'), validationMiddleware(propertyUpdateBodySchema), propertyController.updateProperty)
    .delete(propertyController.deleteProperty);

// Wishlist routes
routes.route('/wishlist')
    .get(wishlistController.getWishlists)
    .post(validationMiddleware(wishlistBodySchema), wishlistController.createWishlist);

routes.route('/wishlist/:id')
    .get(wishlistController.getWishlistById)
    .put(validationMiddleware(wishlistBodySchema), wishlistController.updateWishlist)
    .delete(wishlistController.deleteWishlist);

// Booking routes
routes.route('/booking')
    .get(bookingController.getBookings)
    .post(validationMiddleware(bookingBodySchema), bookingController.createBooking);

routes.route('/booking/:id')
    .get(bookingController.getBookingById)
    .put(validationMiddleware(bookingUpdateBodySchema), bookingController.updateBooking)
    .delete(bookingController.deleteBooking);

// Message routes
routes.route('/message')
    .get(messageController.getMessages)
    .post(validationMiddleware(messageBodySchema), messageController.createMessage);

routes.route('/message/:id')
    .get(messageController.getMessageById)
    .delete(messageController.deleteMessage);

// Login route
routes.route('/login')
    .post(validationMiddleware(loginBodySchema), loginController.login);

// search route
routes.route('/search')
    .get(propertyController.searchProperty);