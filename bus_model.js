const mongoose=require('mongoose');
const bus_details=new mongoose.Schema({
    bus_id:{
        type:String,
        required:[true, 'A passenger must have an ID'],
        unique:true
    },
    bus_name:{
        type: String,
        required:[true,'A passenger must have an Name']
    },
    bus_regn_no:{
        type:String,
        required:[true,'Age is must'],
        unique:true
    },
    bus_capacity:{
       type:Number,
       required:[true,'Gender is mandatory'],
        },
    bus_seats:{
        sleeper_seats:{
            type:Number
        },
        pushback_seats:{
            type:Number
        },
        men_seats:{
            type:Number
        },
        women_seats:{
            type:Number
        }
    },
    bus_diesel_capacity:{
        type: Number,
        require:[true,'Mobile No. is Mandatory']
    },
    bus_mileage:{
        type:Number,
        require:[true,'Emails is mandatory']
    },
   last_fc_done:{
     type:Date        
},
years_of_bus:{
    type:Number
},
no_of_fcs_done:{
    type:Number
}
})
const Passenger=mongoose.model('bus_details',bus_details);
module.exports=Passenger;