const mongoose=require("mongoose");
const booking=require("../models/Booking");

describe('Booking model',()=>{
    it('should be able to create a new Booking',()=>{
        const newBooking = new booking({
           accomoId:"AID1000",
            name:"Rashmi",
            email:"rashmi@gmail.com",
            phone:"0776544321",
            rooms:"2",
            days:"1",
            price:"25000.00",
            arrivedDate:"2023-02-09",
        });

       expect(newBooking.accomoId).toBe("AID1000");
        expect(newBooking.name).toBe("Rashmi");
        expect(newBooking.email).toBe("rashmi@gmail.com");
        expect(newBooking.phone).toBe("0776544321");
        expect(newBooking.rooms).toBe("2");
        expect(newBooking.days).toBe("1");
        expect(newBooking.price).toBe("25000.00");
        expect(newBooking.arrivedDate).toBe("2023-02-09");

    });
});