var http = require('http');
var url= require('url');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
var path=require('path');
var fs=require('fs');
var express=require('express');
const app=express();
const bodyParser = require('body-parser');
var random = require('random-string-alphanumeric-generator');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencodednpm
const Driver_model = require('./driver_model');
const Passenger_model = require('./passenger_model');
const Place_model = require('./place_model');
const Toll_model = require('./tollgate_model');
const Bus_model = require('./bus_model');
const Route_model=require('./route_model');
const Company_model=require('./company_model');
const Schedule_model=require('./schedule_model');
const Report_model=require('./report_model');
const Payment_model=require('./payment_model')
const Ticket_model=require('./ticket_model')
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views")))
//mongoose.set('useNewUrlParser', true);
app.use(express.json())
app.use(express.static(path.join(__dirname,'Html')))
//var createht=
mongoose.connect(process.env.DATABASE_LOCAL,{
}).then(con=>{
    console.log(con.connections);
    console.log('DB Connection Successful');
})
inde= async (req,res)=>{
       res.sendFile(__dirname+'/Html/home.html');
      //res.sendFile('Html/home.html')
}
getalldetails = async(req,res)=>{
    try{
        const passenger_de= await Passenger_model.find();
        console.log(passenger_de)
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}
insert_pass = async(req,res)=>{
     try{
          const pass= await Passenger_model.find({},{id:1,_id:0});
          var ran=random.randomAlphanumeric(4, "uppercase")
          while(pass.includes(ran))
          {
             ran=random.randomAlphanumeric(4, "uppercase");
          } 
              await Passenger_model.insertMany({
                "id": ran,
                "name": req.body.name,
                "age": req.body.age*1,
                "gender": req.body.gender,
                "purpose": req.body.purpose,
                "mobile_no": req.body.phone_num,
                "email": req.body.email,
                "address":{
                    "doorno":req.body.doorno*1,
                    "street_name":req.body.street_name,
                    "city": req.body.city,
                    "state":req.body.state,
                    "pincode": req.body.pincode*1
                }

            }) 
               const pass1=await Passenger_model.find();
               res.render('passenger_display',{data:pass1})
            console.log("Inserted Successfully");
    }catch(err){
        res.status(404).send("Error 404 found")
        console.log(err)
    }
}
insert_place=async(req,res)=>{
    try{ 
       const plac=await Place_model.find({},{place_id:1,_id:0});
       var ran=random.randomAlphanumeric(5, "uppercase")
       while(plac.includes(ran))
       {
          ran=random.randomAlphanumeric(5, "uppercase");
       }

             await Place_model.insertMany({
              "place_id": ran,
              "place_name": req.body.name,
              "place_state": req.body.state,
          })
             const plac2=await Place_model.find();
             res.render('place_display',{data:plac2})  
          console.log("Inserted Successfully");
         
  }catch(err){
      res.status(404).send("Error 404 found")
      console.log(err)
  }
}
insert_toll=async(req,res)=>{
    try{ 
        const toll=await Toll_model.find({},{toll_id:1,_id:0});
        var ran=random.randomAlphanumeric(6, "uppercase")
        while(toll.includes(ran))
        {
           ran=random.randomAlphanumeric(6, "uppercase");
        }
             console.log(req.body.name)
             await Toll_model.insertMany({
              "tollgate_id": ran,
              "tollgate_price":{
                    "LMV":req.body.lmv,
                    "Truck":req.body.truck
              },
              "toll_place_id": req.body.place_type,
          })
              const toll2=await Toll_model.find();
              res.render('tollgate_display',{data:toll2})
              console.log("Inserted Successfully");
  }catch(err){
      res.status(404).send("Error 404 found")
      console.log(err)
  }
}
insert_driv = async(req,res)=>{
    try{ 
         const drive=await Driver_model.find({},{driver_id:1,_id:0});
         var ran=random.randomAlphanumeric(7, "uppercase")
         while(drive.includes(ran))
         {
            ran=random.randomAlphanumeric(7, "uppercase");
         }
         //console.log(pass)
           //console.log(req.body.name)
               await Driver_model.insertMany({
               "driver_id": ran,
               "driver_name": req.body.name,
               "driver_age": req.body.age*1,
               "driver_licenseno":req.body.licenseno,
               "driver_gender": req.body.gender,
               "driver_mobile_no": req.body.phone_num,
               "driver_email": req.body.email,
               "driver_experience":req.body.driver_experience,
               "driver_address":{
                   "doorno":req.body.doorno*1,
                   "street_name":req.body.street_name,
                   "city": req.body.city,
                   "state":req.body.state,
                   "pincode": req.body.pincode*1
               }

           }) 
              const drive1=await Driver_model.find();
              res.render('driver_display',{data:drive1})  
           console.log("Inserted Successfully");
        }catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_bus = async(req,res)=>{
    try{ 
         const bus=await Bus_model.find({},{bus_id:1,_id:0});
         var ran=random.randomAlphanumeric(8, "uppercase")
         while(bus.includes(ran))
         {
            ran=random.randomAlphanumeric(8, "uppercase");
         }
         
            //console.log(req.body.name)
               await Bus_model.insertMany({
               "bus_id": ran,
               "bus_name": req.body.name,
               "bus_regn_no": req.body.regno,
               "bus_capacity":req.body.capacity,
               "bus_seats": {
                   "sleeper_seats":req.body.sleeper_seats,
                   "pushback_seats":req.body.pushback_seats,
                   "men_seats":req.body.men_seats,
                   "women_seats":req.body.women_seats
               },
              "driver_experience": req.body.experience,
               "bus_diesel_capacity": req.body.diesel_capacity,
               "bus_mileage": req.body.mileage,
               "last_fc_done":req.body.last_fc_done,
               "years_of_bus":req.body.years_of_bus,
               "no_of_fcs_done":req.body.total_fcs

           }) 
              const bus1=await Bus_model.find();
              res.render('inserted')
              console.log("Inserted Successfully");        
                  }        catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_route = async(req,res)=>{
    try{ 
         const route=await Route_model.find({},{route_id:1,_id:0});
         var ran=random.randomAlphanumeric(9, "uppercase")
         while(route.includes(ran))
         {
            ran=random.randomAlphanumeric(9, "uppercase");
         }
        await Route_model.insertMany({
               "route_id": ran,
               "from": req.body.from,
               "destination": req.body.destination,
               "via":req.body.via,
               "tollgate": req.body.tollgate,
               "totaltime": req.body.time,
               "totalkm": req.body.km,
              // "fare":req.body.fare,
              }) 
           const rt=await Route_model.find({}).sort({_id:-1}).limit(1);
           console.log("inserted");
           console.log(rt[0].tollgate.length);
           console.log(rt)
      //     const rt2=[];
           sum=0;
           for(i=0;i<rt[0].tollgate.length;i++)
           {
            const rt2=await Toll_model.find({tollgate_id:rt[0].tollgate[i]},{_id:0, tollgate_price:1})
            console.log(rt2)
             sum=sum + rt2[0].tollgate_price.Truck;
           }
           console.log(sum)
           await Route_model.findOneAndUpdate({_id:rt[0]._id},{toll_fare:sum})
           
           //console.log(rt.tollgate.length);
         // const rt=await Route_model.aggregate([{
        //         $unwind:"$tollgate"
        //       }
        //     ])
              const r1=await Route_model.find();
              console.log(r1)
              res.render('inserted')
          
        }catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_comp = async(req,res)=>{
    try{ 
         const comp=await Company_model.find({},{route_id:1,_id:0});
         var ran=random.randomAlphanumeric(10, "uppercase")
         while(comp.includes(ran))
         {
            ran=random.randomAlphanumeric(10, "uppercase");
         }
        await Company_model.insertMany({
               "company_id": ran,
               "company_name": req.body.name,
               "company_started": req.body.company_started,
               "company_buses":req.body.busid,
               "company_drivers": req.body.driverid,
               "company_routes": req.body.routeid,
               "office": req.body.placeid
              }) 
              //const r1=await Route_model.find();
              res.render('inserted')
             
           //console.log(r1);
          
        }catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_schedule = async(req,res)=>{
    try{ 
         const sched=await Schedule_model.find({},{sched_id:1,_id:0});
         var ran=random.randomAlphanumeric(11, "uppercase")
         while(sched.includes(ran))
         {
            ran=random.randomAlphanumeric(11, "uppercase");
         }
        await Schedule_model.insertMany({
               "schedule_id": ran,
               "s_route_id": req.body.routeid,
               "s_company_id": req.body.companyid,
               "s_bus_id": req.body.busid,
               "bus_driver": req.body.driverid,
               "expected_arrival_time": req.body.e_arrivaltime,
               "expected_departure_time": req.body.e_departuretime,
               "bus_fare": req.body.fare,
               "placetype":req.body.placetype,
               "delay":{
                "actual_arrival_time": "",
                "actual_departure_time": ""
               }
              }) 
              const r1=await Schedule_model.find();
              res.render('inserted')
             
           console.log(r1);
          
        }catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_report = async(req,res)=>{
    try{ 
         const rep=await Report_model.find({},{report_id:1,_id:0});
         var ran=random.randomAlphanumeric(12, "uppercase")
         while(rep.includes(ran))
         {
            ran=random.randomAlphanumeric(12, "uppercase");
         }
        await Report_model.insertMany({
               "report_id": ran,
               "place_id": req.body.placeid,
               "schedule_id": req.body.scheduleid,
               "bus_id":req.body.busid
              }) 
              const r1=await Report_model.find();
              res.render('inserted')
             
           console.log(r1);
          
        }catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_payment = async(req,res)=>{
    try{ 
         const pay=await Payment_model.find({},{payment_id:1,_id:0});
         var ran=random.randomAlphanumeric(13, "uppercase")
         while(pay.includes(ran))
         {
            ran=random.randomAlphanumeric(13, "uppercase");
         }
        await Payment_model.insertMany({
               "payment_id": ran,
               "payment_mode": req.body.mode,
               "sender_accountno": req.body.accountno,
               "amount":req.body.amount
              }) 
              const r1=await Payment_model.find();
              res.render('inserted')
             
           console.log(r1);
          
        }catch(err){
       res.status(404).send("Error 404 found")
       console.log(err)
   }
}
insert_ticket=async(req,res)=>{
     try{
        const tic=await Ticket_model.find({},{ticket_id:1,_id:0});
        var ran=random.randomAlphanumeric(14, "uppercase")
        while(tic.includes(ran))
        {
           ran=random.randomAlphanumeric(14, "uppercase");
        }
        var len=req.body.passenger;
       await Ticket_model.insertMany({
              "ticket_id": ran,
              "schedule_id": req.body.schid,
              "no_passenger": req.body.passenger.length,
              "passenger_id":req.body.passenger,
              "payment_id":req.body.paymentid,
              "cancelled":req.body.cancelled
             }) 
        console.log(req.body.passengernum)
             const r1=await Ticket_model.find();
             res.render('inserted')
            
          console.log(r1);
         
      }catch(err){
       res.status(404).send('Not found')
       console.log(err)
   }
}
query1=async(req,res)=>{
  const getplac1=await Place_model.find({place_id:req.body.from},{place_name:1,_id:0})
  const getplac2=await Place_model.find({place_id:req.body.destination},{place_name:1,_id:0});
  const getrtid=await Route_model.find({from:req.body.from,destination:req.body.destination},{route_id:1,_id:0});
  const getplacestatefrom=await Place_model.find({place_id:req.body.from},{place_state:1,_id:0});
  const getplacestatedest=await Place_model.find({place_id:req.body.destination},{place_state:1,_id:0});
  console.log(getplacestatefrom)
  console.log(getplacestatedest)
  console.log(getplacestatefrom[0].place_state)
  if(getplacestatefrom[0].place_state!==getplacestatedest[0].place_state){
    console.log(getplacestatedest)
    const getnopass=await Ticket_model.aggregate([
      { $lookup:{
        from:"schedule_details",
        localField:"schedule_id",
        foreignField:"schedule_id",
        as:"scheduledetails"
      }
      },
      {
        $unwind:"$scheduledetails"
      },
        //  }])
    //   }]),
      { $match:{
        "sheduledetails.s_route_id":getrtid.route_id,
       }
       },
       {
        $group:{
          _id:"null",
          count:{$sum:"$no_passenger"}
        }
      }
    ])
    console.log(getnopass);
    res.render('query1disp',{from:getplac1[0].place_name,destination:getplac2[0].place_name,count:getnopass[0].count})
  }

  }
query2=async(req,res)=>{
  const routekm=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"route_details",
        localField:"s_route_id",
        foreignField:"route_id",
        as:"routedetails"
      }
    },
    {
        $unwind:"$routedetails"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    }
  ])
  const bus=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"bus_details",
        localField:"s_bus_id",
        foreignField:"bus_id",
        as:"busdetails"
      }
    },
    {
        $unwind:"$busdetails"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    }
  ])
  console.log(routekm)
  const rtkm=routekm[0].routedetails.totalkm
  const mil=bus[0].busdetails.bus_mileage
  console.log(routekm[0].routedetails.totalkm)
  console.log(bus[0].busdetails.bus_mileage)
  const fuelcost=(rtkm/mil)*req.body.fcost;
  console.log(fuelcost)
  res.render('query2disp',{scid:req.body.scid,cost:fuelcost})

}
query3=async(req,res)=>{
  const qdriver=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"driver_details",
        localField:"bus_driver",
        foreignField:"driver_id",
        as:"driverdetails"
      }
    },
    {
        $unwind:"$driverdetails"
    },
    {
      $match:{
        "placetype":"Hills"
      }
    },
    {
      $group:{
        _id:"$driverdetails.driver_id",
        count:{$sum:1}
      }
    },
    {
      $match:{
        "count":{
          $gte:10
        }
      }
    }
  ])
  console.log(qdriver.length)
  res.render('query3disp',{data:qdriver})
}
query4=async(req,res)=>{
  const rm=await Report_model.aggregate([
    {
      $lookup:{
        from:"place_details",
        localField:"place_id",
        foreignField:"place_id",
        as:"placedetails"
      }
    },
    {
        $unwind:"$placedetails"
    },
    {
      $group:{
        _id:"$placedetails.place_id",
        count:{$sum:1}
      }
    },
    {
      $sort:{
        count:-1
      }
    }
  ])
  console.log(rm)
  const p=await Place_model.find({place_id:rm[0]._id})
  console.log(p)
  res.render('query4disp',{data:p})
}
query5=async(req,res)=>{
 const pm=await Passenger_model.find({purpose:"Medical"},{id:1,_id:0});
  const tc=await Ticket_model.aggregate([
 {
 $unwind:"$passenger_id"
 }
])
var emp=[]
for(var i=0;i<pm.length;i++)
{
  emp.push(pm[i].id)
}
var emp4=[]
var sch=[]
for(var i=0;i<tc.length;i++)
{
  if(emp.includes(tc[i].passenger_id))
  {       console.log(tc[i].passenger_id)
          sch.push(tc[i].schedule_id)
          emp4.push(tc[i])

  }
}
const getFrequency = (array) => {
  const map = {};
  array.forEach(item => {
     if(map[item]){
        map[item]++;
     }else{
        map[item] = 1;
     }
  });
  return map;
};
var sch2=getFrequency(sch)
console.log(sch2)
Object.entries(sch2).sort((a,b)=>b[1]-a[1])
const passcount=Object.keys(sch2)[0]
console.log(sch2)
console.log(passcount)
const sh=await Schedule_model.find({schedule_id:passcount})
console.log(sh)
const rl=await Route_model.find({route_id:sh[0].s_route_id})
const frm=await Place_model.find({place_id:rl[0].from},{place_name:1,_id:0})
const dest=await Place_model.find({place_id:rl[0].destination},{place_name:1,_id:0})
console.log(rl)
res.render('query5disp',{data:rl,data1:frm,data2:dest})
}
query6=async(req,res)=>{
  const routekm=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"route_details",
        localField:"s_route_id",
        foreignField:"route_id",
        as:"routedetails"
      }
    },
    {
        $unwind:"$routedetails"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    }
  ])
  const bus=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"bus_details",
        localField:"s_bus_id",
        foreignField:"bus_id",
        as:"busdetails"
      }
    },
    {
        $unwind:"$busdetails"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    }
  ])
  console.log(routekm)
  const rtkm=routekm[0].routedetails.totalkm
  const mil=bus[0].busdetails.bus_mileage
  console.log(routekm[0].routedetails.totalkm)
  console.log(bus[0].busdetails.bus_mileage)
  const fuelcost=(rtkm/mil)*req.body.fcost;
  console.log(fuelcost)
  var totalcost=parseFloat(fuelcost)+parseFloat(routekm[0].routedetails.toll_fare)+parseFloat(req.body.amcost);
  console.log(totalcost)
  res.render('query6disp',{scid:req.body.scid,cost:totalcost})
}
query7=async(req,res)=>{
  const routekm=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"route_details",
        localField:"s_route_id",
        foreignField:"route_id",
        as:"routedetails"
      }
    },
    {
        $unwind:"$routedetails"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    }
  ])
  const bus=await Schedule_model.aggregate([
    {
      $lookup:{
        from:"bus_details",
        localField:"s_bus_id",
        foreignField:"bus_id",
        as:"busdetails"
      }
    },
    {
        $unwind:"$busdetails"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    }
  ])
  console.log(routekm)
  const rtkm=routekm[0].routedetails.totalkm
  const mil=bus[0].busdetails.bus_mileage
  console.log(routekm[0].routedetails.totalkm)
  console.log(bus[0].busdetails.bus_mileage)
  const fuelcost=(rtkm/mil)*req.body.fcost;
  console.log(fuelcost)
  var totalcost=parseFloat(fuelcost)+parseFloat(routekm[0].routedetails.toll_fare)+parseFloat(req.body.amcost);
  console.log(totalcost)
  const tc=await Ticket_model.aggregate([
    {
    $unwind:"$passenger_id"
    },
    {
      $match:{
        "schedule_id":req.body.scid
      }
    },
    {
      $group:{
        _id:"$schedule_id",
        count:{
          $sum:"$no_passenger"
        }
      }
    }
   ])

   var earned=tc[0].count*routekm[0].bus_fare
   if(totalcost>earned)
   {
    res.render('query7disp',{scid:req.body.scid,cost:totalcost,cost2:earned,loss:(totalcost-earned)})
   }
   else   {
    res.render('query7disp',{scid:req.body.scid,cost:totalcost,cost2:earned,gain:(earned-totalcost)})
   }
   console.log(tc)
   console.log(earned)
}
uquery1=async(req,res)=>{
  var oldname=await Passenger_model.find({id:req.body.pid},{_id:0,name:1})
  const uq1=await Passenger_model.findOneAndUpdate({id:req.body.pid},{name:req.body.name})
  var newname=await Passenger_model.find({id:req.body.pid},{_id:0,name:1})
  console.log(oldname)
  res.render('uquery1disp',{data:oldname,data2:newname})
}
uquery2=async(req,res)=>{
  var oldmobile_no=await Passenger_model.find({id:req.body.pid},{_id:0,mobile_no:1})
  const uq1=await Passenger_model.findOneAndUpdate({id:req.body.pid},{mobile_no:req.body.phone_num})
  var newmobile_no=await Passenger_model.find({id:req.body.pid},{_id:0,mobile_no:1})
  res.render('uquery2disp',{data:oldmobile_no,data2:newmobile_no})
}
uquery3=async(req,res)=>{
  var oldtid_p=await Toll_model.find({tollgate_id:req.body.tid},{_id:0,tollgate_price:1})
  const uq1=await Toll_model.findOneAndUpdate({tollgate_id:req.body.tid},{ "tollgate_price.Truck":req.body.p})
  var newtid=await Toll_model.find({tollgate_id:req.body.tid},{_id:0,tollgate_price:1})
  res.render('uquery3disp',{data:oldtid_p,data2:newtid})
}
uquery4=async(req,res)=>{
  var oldmail=await Passenger_model.find({id:req.body.pid},{_id:0,email:1})
  const uq1=await Passenger_model.findOneAndUpdate({id:req.body.pid},{email:req.body.email})
  console.log(oldmail)
  var newmail=await Passenger_model.find({id:req.body.pid},{_id:0,email:1})
  res.render('uquery4disp',{data:oldmail,data2:newmail})
}
uquery5=async(req,res)=>{

  const uq1=await Passenger_model.findOneAndUpdate({id:req.body.pid},{"address.doorno":req.body.doorno,"address.street_name":req.body.street_name,
                                                    "address.state":req.body.state,"address.pincode":req.body.pincode})
  res.render('uquery5disp')
}
dquery1=async(req,res)=>{
  console.log(req.body.pid)
  await Schedule_model.findOneAndDelete({schedule_id:req.body.pid})
  res.render('dquery')
}
dquery2=async(req,res)=>{
  console.log(req.body.pid)
  await Place_model.findOneAndDelete({place_id:req.body.pid})
  res.render('dquery')
}
dquery3=async(req,res)=>{
  console.log(req.body.pid)
  await Place_model.findOneAndDelete({driver_id:req.body.pid})
  res.render('dquery')
}
dquery4=async(req,res)=>{
  console.log(req.body.pid)
  await Toll_model.findOneAndDelete({tollgate_id:req.body.pid})
  res.render('dquery')
}
dquery5=async(req,res)=>{
  console.log(req.body.pid)
  await Passenger_model.findOneAndDelete({id:req.body.pid})
  res.render('dquery')
}
gettollgate=async(req,res)=>{
  const plac=await Place_model.find();
  res.render('tollgate',{data:plac})
}
 
getpass=async(req,res)=>{
    const plac=await Place_model.find();
    res.render('passenger_details')
}
getplace=async(req,res)=>{
    res.render('place')
}
getdriver=async(req,res)=>{
    res.render('driver_details')
}
getbus = async(req,res)=>{
    res.render('bus_details')
}
getroute=async(req,res)=>{
    const plac=await Place_model.find();
    const toll=await Toll_model.find();
    const da=await Toll_model.aggregate([{
        $lookup:{
            from:"place_details",
            localField:"toll_place_id",
            foreignField:"place_id",
            as:"Tolldetails"
        }
    },
    {
            $unwind:"$Tolldetails"
        }
]);
    console.log(da);
    res.render('route_details',{data:plac,data2:da})
}
getcompany=async(req,res)=>{
    const plac=await Place_model.find();
    const route=await Route_model.find();
    const drive=await Driver_model.find();
    const bus=await Bus_model.find();
   // console.log(da);
    res.render('company_details',{data:bus,data2:drive,data3:route,data4:plac});
}
getschedule=async(req,res)=>{
    const comp=await Company_model.find();
    const route=await Route_model.find();
    const bus=await Bus_model.find();
    const drive=await Driver_model.find();
   // console.log(da);
    res.render('schedule_details',{data:route,data1:comp,data2:bus,data3:drive});
}
getreport=async(req,res)=>{
    const sched=await Schedule_model.find();
    const place=await Place_model.find();
    const bus=await Bus_model.find();
    res.render('report_details',{data:place,data1:sched,data2:bus});    
}
getpayment=async(req,res)=>{
    res.render('payment_detail');
}
gettickets=async(req,res)=>{
    const pass=await Passenger_model.find();
    const sched=await Schedule_model.find();
  //  const bus=await Payment_model.find();
    res.render('ticket_details',{data:sched,data1:pass})
}
getquery1=async(req,res)=>{
  const pm=await Place_model.find();
  res.render('query1',{data:pm});
}
getquery2=async(req,res)=>{
  const sc=await Schedule_model.find();
  res.render('query2',{data:sc});
}
getquery6=async(req,res)=>{
  const sc=await Schedule_model.find();
  res.render('query6',{data:sc});
}
getquery7=async(req,res)=>{
  const sc=await Schedule_model.find();
  res.render('query7',{data:sc});
}
getuquery1=async(req,res)=>{
  const pa=await Passenger_model.find();
  res.render('uquery1',{data:pa});
}
getuquery2=async(req,res)=>{
  const pa=await Passenger_model.find();
  res.render('uquery2',{data:pa});
}
getuquery3=async(req,res)=>{
  const ti=await Toll_model.find();
  res.render('uquery3',{data:ti});
}
getuquery4=async(req,res)=>{
  const pa=await Passenger_model.find();
  res.render('uquery4',{data:pa});
}
getuquery5=async(req,res)=>{
  const pa=await Passenger_model.find();
  res.render('uquery5',{data:pa});
}
getdquery1=async(req,res)=>{
  const pk=await Schedule_model.find();
  res.render('dquery1',{data:pk})
}
getdquery2=async(req,res)=>{
  const pk=await Place_model.find();
  res.render('dquery2',{data:pk})
}
getdquery3=async(req,res)=>{
  const pk=await Driver_model.find();
  res.render('dquery3',{data:pk})
}
getdquery4=async(req,res)=>{
  const pk=await Toll_model.find();
  res.render('dquery4',{data:pk})
}
getdquery5=async(req,res)=>{
  const pk=await Passenger_model.find();
  res.render('dquery5',{data:pk})
}
app
  .route('/')
  .get(inde)
app
  .route('/passenger')
  .get(getpass)
app
  .route('/tollgate')
  .get(gettollgate)
app
  .route('/place')
  .get(getplace)
app
  .route('/driver_details')
  .get(getdriver)
app
  .route('/bus_details')
  .get(getbus)
app
  .route('/route_details')
  .get(getroute)
app
  .route('/company_details')
  .get(getcompany)
app
  .route('/schedule_details')
  .get(getschedule)
app
  .route('/report_details')
  .get(getreport)
app
  .route('/payment_details')
  .get(getpayment)
app
  .route('/ticket_collection')
  .get(gettickets)
app
  .route('/create/passenger_collection')
  .post(insert_pass);
app
  .route('/create/place_collection')
  .post(insert_place)
app
  .route('/create/tollgate_collection')
  .post(insert_toll);
app 
  .route('/create/driver_collection')
  .post(insert_driv)
app
  .route('/create/Bus_collection')
  .post(insert_bus)
app
  .route('/create/route_collection')
  .post(insert_route)
app
  .route('/create/company_collection')
  .post(insert_comp)
app
  .route('/create/schedule_collection')
  .post(insert_schedule)
app
  .route('/create/report_collection')
  .post(insert_report)
app
  .route('/create/payment_collection')
  .post(insert_payment)
app
  .route('/create/ticket_collection')
  .post(insert_ticket)
app
  .route('/query1')
  .get(getquery1)
app
  .route('/query1/ans')
  .post(query1)
app
  .route('/query2')
  .get(getquery2)
app
  .route('/query2/ans')
  .post(query2)
app
  .route('/query3')
  .get(query3)
app
  .route('/query4')
  .get(query4)
app
  .route('/query5')
  .get(query5)
app
  .route('/query6')
  .get(getquery6)
app
  .route('/query6/ans')
  .post(query6)
app
  .route('/query7')
  .get(getquery7)
app
  .route('/query7/ans')
  .post(query7)
app
  .route('/uquery1')
  .get(getuquery1)
app
   .route('/uquery1/ans')
   .post(uquery1)
app
   .route('/uquery2')
   .get(getuquery2)
app
   .route('/uquery2/ans')
   .post(uquery2)
app
   .route('/uquery3')
   .get(getuquery3)
app
   .route('/uquery3/ans')
   .post(uquery3)
app
   .route('/uquery4')
   .get(getuquery4)
app
   .route('/uquery4/ans')
   .post(uquery4)
app
   .route('/uquery5')
   .get(getuquery5)
app
   .route('/uquery5/ans')
   .post(uquery5)
app
  .route('/dquery1')
  .get(getdquery1)
app 
  .route('/dquery1/ans')
  .post(dquery1)
app
  .route('/dquery2')
  .get(getdquery2)
app 
  .route('/dquery2/ans')
  .post(dquery2)
app
  .route('/dquery3')
  .get(getdquery3)
app 
  .route('/dquery3/ans')
  .post(dquery3)
app
  .route('/dquery4')
  .get(getdquery4)
app 
  .route('/dquery4/ans')
  .post(dquery4)
app
  .route('/dquery5')
  .get(getdquery5)
app 
  .route('/dquery5/ans')
  .post(dquery5)
app.listen(process.env.PORT||3000,()=>{
    console.log('Server running successfully')
})


