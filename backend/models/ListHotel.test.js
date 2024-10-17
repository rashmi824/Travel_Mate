const mongoose=require("mongoose");
const listhotel=require("../models/ListHotel");

describe('ListHotel model',()=>{
    it('should be able to create a new Hotel Listing',()=>{
        const newHotelList = new listhotel({
            accomId:"AID1001",
            name:"Hilton",
            type:"Hotel",
            city:"Colombo",
            price:"20000.00",
            images:"https://images.unsplash.com/photo-1668714298663-1b0227a4ae65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            

        });
        expect(newHotelList.accomId).toBe("AID1001");
        expect(newHotelList.name).toBe("Hilton");
        expect(newHotelList.type).toBe("Hotel");
        expect(newHotelList.city).toBe("Colombo");
        expect(newHotelList.price).toBe("20000.00");
        expect(newHotelList.images).toBe("https://images.unsplash.com/photo-1668714298663-1b0227a4ae65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60");
       

    });
});