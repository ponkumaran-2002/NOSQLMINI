const mongoose=require('mongoose');
const company_collection=new mongoose.Schema({
    company_id:{
        type:String,
        required:[true, 'A passenger must have an ID'],
        unique:true
    },
    company_name:{
        type: String,
        required:[true,'A passenger must have an Name']
    },
    company_started:{
        type:Date,
        required:[true,'Age is must']
    },
    company_buses:{
       type:Array,
       required:[true,'Gender is mandatory'],
    },
    company_drivers:{
        type:Array,
        require:[true,'Purpose in Mandatory'],
        },
    company_routes:{
        type: Array,
        require:[true,'Mobile No. is Mandatory']
    },
    office:{
        type:Array,
        require:[true,'Emails is mandatory']
    }
})
const Company=mongoose.model('company_details',company_collection);
module.exports=Company;