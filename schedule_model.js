const mongoose=require('mongoose');
const schedule_collection=new mongoose.Schema({
    schedule_id:{
        type:String,
        required:[true, 'A place must have an ID'],
        unique:true
    },
    s_route_id:{
        type: String,
        required:[true,'A Place must have an Name']
    },
    s_company_id:{
        type:String,
        required:[true,'Place is must']
    },
    s_bus_id:{
        type:String,
        required:true
    },
    bus_driver:{
        type:String,
        required:true
    },
    expected_arrival_time:{
        type:Date,
        required:true
    },
    expected_departure_time:{
        type:Date,
        required:true,
    },
    bus_fare:{
        type:Number,
        required:true
    },
    delay:{
        actual_arrival_time:{
            type:Date
        },
        actual_departure_time:{
            type:Date
        },
        reason:{
            type:Date
        }
    },
    placetype:{
        type:String,
        required:true
    }
})
const Schedule=mongoose.model('schedule_details',schedule_collection);
module.exports=Schedule;