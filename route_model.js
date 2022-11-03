const mongoose=require('mongoose');
const route_collection=new mongoose.Schema({
    route_id:{
        type:String,
        required:[true, 'A place must have an ID'],
        unique:true
    },
    from:{
        type: String,
        required:[true,'A Place must have an Name']
    },
    destination:{
        type:String,
        required:[true,'Place is must']
    },
    via:{
        type:Array,
        required:true
    },
    tollgate:{
        type:Array,
        required:true
    },
    totalkm:{
        type:Number,
        required:true,
    },
    totaltime:{
        type:Number,
        required:true
    },
    toll_fare:{
        type:Number,
        required:false
    }
})
const Route=mongoose.model('route_details',route_collection);
module.exports=Route;