const mongoose=require('mongoose');
const tollgate_collection=new mongoose.Schema({
    tollgate_id:{
        type:String,
        required:[true, 'A toll gate must have an ID'],
        unique:true
    },
    tollgate_price:{
        LMV:{
            type: Number,
            required:[true,'LMV must have an price']
        },
        Truck:{
            type: Number,
            required:[true,'Truck must have an price']
        }
        
    },
    toll_place_id:{
        type:String,
        required:[true, 'A place must have an ID']
    }
})
const Tollgate=mongoose.model('tollgate_details',tollgate_collection);
module.exports=Tollgate;