const mongoose=require('mongoose');
const driver_details=new mongoose.Schema({
    driver_id:{
        type:String,
        required:[true, 'A passenger must have an ID'],
        unique:true
    },
    driver_name:{
        type: String,
        required:[true,'A passenger must have an Name']
    },
    driver_age:{
        type:Number,
        required:[true,'Age is must']
    },
    driver_gender:{
       type:String,
       required:[true,'Gender is mandatory'],
       enum:['Male','Female']
    },
    driver_licenseno:{
        type:String,
        required:[true],
        unique:true
    },
    driver_mobile_no:{
        type: String,
        require:[true,'Mobile No. is Mandatory']
    },
    driver_email:{
        type:String,
        require:[true,'Emails is mandatory']
    },
    driver_experience:{
          type:Number,
          requrire:[true]
    },
    driver_address:{
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
const Driver=mongoose.model('driver_details',driver_details);
module.exports=Driver;