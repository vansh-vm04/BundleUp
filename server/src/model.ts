import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    password:{type:String},
    share:{type:Boolean,required:false,default:false}
})

const contentTypes = ['video','audio','blog','tweet','other']

const ContentSchema = new mongoose.Schema({
    title:{type:String,required:true,maxLength:30},
    type:{type:String,enum:contentTypes,required:true},
    link:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true},
})

export const UserModel = mongoose.model('User',UserSchema)
export const ContentModel = mongoose.model('Content',ContentSchema)