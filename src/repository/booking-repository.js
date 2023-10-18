const { StatusCodes } = require("http-status-codes");
const { Booking } = require("../models/index");
const { ValidationError, AppError } = require("../utils/errors/index");

class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error.name === "sequelizeValidationError")
        throw new ValidationError(error);
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Booking",
      "There was some isssue creating the bookking ,please try again",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = BookingRepository;
