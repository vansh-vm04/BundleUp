import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import {ContentModel, UserModel } from "./model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware";
import * as z from "zod";

enum ResponseCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
  UnAuthorized = 401,
  Conflict = 409,
}
const JWT_SECRET = process.env.JWT_SECRET as string;
const saltRounds = 10;

const ZodUser = z.object({
  username: z.string().min(4).max(20),
  password: z.string().min(8).max(20)
});

router.post("/sign-up", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const validation = ZodUser.safeParse({username:username,password:password});
    if(!validation.success) return res.status(ResponseCode.UnAuthorized).json({
        message:"Invalid credentials"
    })
    const userExist = await UserModel.findOne({ username: username });
    if (userExist) {
      return res
        .status(ResponseCode.Conflict)
        .json({ message: "User already exist" });
    }
    const hash = bcrypt.hashSync(password, saltRounds);
    const user = new UserModel({
      username: username,
      password: hash,
    });
    await user.save();
    // console.log(user)
    const token = jwt.sign(
      { id: user._id },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    res
      .status(ResponseCode.Success)
      .json({ message: "Sign Up successful", token: token });
  } catch (error) {
    res
      .status(ResponseCode.ServerError)
      .json({ message: "Internal server error" });
    console.log(error);
  }
});
router.post("/sign-in", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const validation = ZodUser.safeParse({username:username,password:password});
    if(!validation.success) return res.status(ResponseCode.UnAuthorized).json({
        message:"Invalid credentials"
    })
    const user = await UserModel.findOne({ username: username });
    if (!user)
      return res
        .status(ResponseCode.NotFound)
        .json({ message: "User does not exist" });
    const result = await bcrypt.compare(password, user.password as string);
    if (!result){
        return res
        .status(ResponseCode.UnAuthorized)
        .json({ message: "Wrong Password" });
    }
    const token = jwt.sign(
      { id: user._id },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    res
      .status(ResponseCode.Success)
      .json({ message: "Sign in successful", token: token });
  } catch (error) {
    res
      .status(ResponseCode.ServerError)
      .json({ message: "Internal server error" });
    console.log(error);
  }
});
router.get('/verify',authMiddleware,async (req:Request,res:Response)=>{
    //@ts-ignore
    const userId = req.userId;
    try {
        const user = await UserModel.findById(userId);
        res.status(ResponseCode.Success).json({message:"Success",user:{username:user?.username,sharing:user?.share}});
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.post('/content',authMiddleware,async (req:Request,res:Response)=>{
    const content = req.body;
    try {
      //@ts-ignore
      content.userId = req.userId;
        const contentData = new ContentModel(content);
        await contentData.save();
        res.status(ResponseCode.Success).json({message:"Resource saved successfully"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.get('/content/:type',authMiddleware,async (req:Request,res:Response)=>{
    const contentType = req.params.type;
    //@ts-ignore
    const userId = req.userId;
    try {
        let content;
        if(contentType === 'all'){
            content = await ContentModel.find({userId:userId});
        }else{
            content = await ContentModel.find({userId:userId,type:contentType});
        }
        res.status(ResponseCode.Success).json({message:"Success",content:content})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"}) 
        console.log(error)   }
})
router.patch('/content',authMiddleware,async (req:Request,res:Response)=>{
    const {content,contentId} = req.body;
    try {
        await ContentModel.findByIdAndUpdate(contentId,content);
        res.status(ResponseCode.Success).json({message:"Resource saved"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.delete('/content/:contentId',authMiddleware,async (req:Request,res:Response)=>{
    const {contentId} = req.params;
    try {
        await ContentModel.deleteOne({_id:contentId})
        res.status(ResponseCode.Success).json({message:"Resource deleted successfully"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.patch('/share',authMiddleware,async (req:Request,res:Response)=>{
    //@ts-ignore
    const userId = req.userId;
    const sharing = req.body.sharing;
    try {
        const response = await UserModel.findByIdAndUpdate(userId,{share:sharing},{new:true});
        res.status(ResponseCode.Success).json({message:"Success",sharing:response?.share,userId:userId})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.get('/open/:username',async (req:Request,res:Response)=>{
    const username = req.params.username;
    try {
        const user = await UserModel.findOne({username});
        if(!user?.share) return res.status(ResponseCode.Success).json({message:"Content Private",username:user?.username,content:[]});
        const content = await ContentModel.find({userId:user._id});
        res.status(ResponseCode.Success).json({message:"Content found",username:user?.username,content:content});
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})

export default router;
