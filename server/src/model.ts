import mongoose,{Schema} from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    password:String
})

const contentTypes = ['video','audio','blog','tweet','article','other']

const ContentSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    type:{type:String,enum:contentTypes,required:true},
    link:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId, ref:'User'},
    tags:{type:Schema.Types.ObjectId, ref:'Tag'},
    bundleId:{type:Schema.Types.ObjectId,ref:'Bundle',required:true}
})

const TagSchema = new mongoose.Schema({
    tagName:{type:String,required:true}
})

const BundleSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,required:true,ref:'User'}
})

const LinkSchema = new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId,required:true,ref:'User'},
    bundleId:{type:Schema.Types.ObjectId,required:true,unique:true,ref:'Bundle'}
})

export const UserModel = mongoose.model('User',UserSchema)
export const ContentModel = mongoose.model('Content',ContentSchema)
export const TypeModel = mongoose.model('Tag',TagSchema)
export const BundleModel = mongoose.model('Bundle',BundleSchema)
export const LinkModel = mongoose.model('Link',LinkSchema)