//
const express=require('Express');
const app=express();
//we are craeting api link for employee
const apiProductRouter=express.Router();
//we are importing employee schema
let Product=require('./product');


//get all employee
apiProductRouter.route('/allProduct').get((req,resp)=>
{
    Product.find((err,data)=>{
        if(err){
            resp.send("failure");
    }
    resp.send(data);
        });

//resp.send("<h1>called all employee</h1>")
});


//get employee by empId
apiProductRouter.route('/:prodId').get((req,resp)=>{
    // resp.send("<h1>called getby empId</h1>")
    let p_prodId=req.params.prodId;
    Product.find({prodId:p_prodId},(err,data)=>{
        if(err){
            resp.send("failed to load data for:"+p_prodId);
        }
        
        resp.send(data);
    });
    });


//get employee by empName
apiProductRouter.route('/pname/:prodName').get((req,resp)=>{
    // resp.send("<h1>called getby empName</h1>")
    let p_prodName=req.params.empName;
    Product.find({prodName:p_prodName},(err,data)=>{
        if(err){
            resp.send("failed to load data for:"+p_prodName);
        }
        resp.send(data);
    });
    });


//add employee
apiProductRouter.route('/add').post((req,resp)=>{
    let p_product=new Product(req.body);
    p_product.save().then(()=>send("new order added to database"),(err)=>resp.send("fail to add new order"));
    
    });


//delete employee
apiProductRouter.route('/delete/:prodId').delete((req,resp)=>{
    // resp.send("<h1>called delete by empId</h1>")
    let p_prodId=req.params.prodId;
    Product.findOneAndDelete({prodId:p_prodId},(err,data)=>{
        if(err){
            resp.send("failed to load data for:"+p_prodId);
        }
        resp.send(p_prodId+ ":removed");
    });
    });


//update employee
apiProductRouter.route('/update/:prodId/:price').put((req,resp)=>{
    let p_prodId=req.params.prodId;
    let p_price=req.params.price;
    Product.findOneAndUpdate({prodId:p_prodId},{price:p_price},(err,data)=>{
    if(err){
        resp.send("failed to update");
    }
    resp.send("update records for"+p_prodId+" as "+p_price);
});
});
module.exports=apiProductRouter;