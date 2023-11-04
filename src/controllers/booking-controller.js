const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index');

const bookingService = new BookingService();

const create = async(req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        // console.log("From booking controller", response);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully booked a flight',
            success: true,
            data: response,
            err: {}
        });
    } catch (error) {
        // console.log("From Booking Controller", error);
        return res.status(error.statusCode).json({
            message: error,
            success: false,
            error: error.explanation,
            data: {}
        })
    }
}

module.exports = {
    create
}
