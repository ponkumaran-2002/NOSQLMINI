const mongoose=require('mongoose');
const ticket_collection=new mongoose.Schema({
    ticket_id:{
        type:String,
        required:[true, 'A place must have an ID'],
        unique:true
    },
    schedule_id:{
        type: String,
      //  required:[true,'A Place must have an Name']
    },
    no_passenger:{
        type:Number,
        //required:[true,'Place is must']
    },
    passenger_id:{
         type:Array,
         required:true
    },
    payment_id:{
        type:String,
        required:[true]
    },
    cancelled:{
        type:String
    }
})
const Ticket=mongoose.model('ticket_details',ticket_collection);
module.exports=Ticket;