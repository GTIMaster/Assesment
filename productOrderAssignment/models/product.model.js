const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    isDeleted:{type:Boolean,default:false}

},{timestamps:true,versionKey:false})

const productModel=mongoose.model('product',productSchema)

module.exports=productModel;
