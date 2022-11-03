const mongoose=require('mongoose');
const place_collection=new mongoose.Schema({
    place_id:{
        type:String,
        required:[true, 'A place must have an ID'],
        unique:true
    },
    place_name:{
        type: String,
        required:[true,'A Place must have an Name']
    },
    place_state:{
        type: String,
        required:[true,'A Place must be located in some state']
    }
})
const Place=mongoose.model('place_details',place_collection);
module.exports=Place;