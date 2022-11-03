const mongoose=require('mongoose');
const passenger_collection=new mongoose.Schema({
    id:{
        type:String,
        required:[true, 'A passenger must have an ID'],
        unique:true
    },
    name:{
        type: String,
        required:[true,'A passenger must have an Name']
    },
    age:{
        type:Number,
        required:[true,'Age is must']
    },
    gender:{
       type:String,
       required:[true,'Gender is mandatory'],
       enum:['Male','Female']
    },
    purpose:{
        type:String,
        require:[true,'Purpose in Mandatory'],
        enum:['Medical','Education','Marriage','Business','Others']
    },
    mobile_no:{
        type: String,
        require:[true,'Mobile No. is Mandatory']
    },
    email:{
        type:String,
        require:[true,'Emails is mandatory']
    },
    address:{
        doorno:{
            type:Number,
            required:[true]
        },
        street_name:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        }
    }

})
const Passenger=mongoose.model('passenger_details',passenger_collection);
module.exports=Passenger;