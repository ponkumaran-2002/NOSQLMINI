const mongoose=require('mongoose');
const report_collection=new mongoose.Schema({
    report_id:{
        type:String,
        required:[true, 'A place must have an ID'],
        unique:true
    },
    schedule_id:{
        type: String,
        required:[true,'A Place must have an Name']
    },
    place_id:{
        type:String,
        required:[true,'Place is must']
    },
    bus_id:{
        type:String,
        required:[true]
    }
})
const Report=mongoose.model('report_details',report_collection);
module.exports=Report;