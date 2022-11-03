const mongoose=require('mongoose');
const payment_collection=new mongoose.Schema({
    payment_id:{
        type:String,
        required:[true, 'A place must have an ID'],
        unique:true
    },
    payment_mode:{
        type: String,
        required:[true,'A Place must have an Name'],
        enum:['Online','Offline']
     },
    sender_accountno:{
        type:Number,
        required:[true,'Place is must']
    },
    amount:{
        type:Number,
        require:[true]
    }
})
const Payment=mongoose.model('payment_details',payment_collection);
module.exports=Payment;