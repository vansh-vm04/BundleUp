import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { BundleModel, ContentModel, LinkModel, UserModel } from "./model";
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
router.post('/content',authMiddleware,async (req:Request,res:Response)=>{
    const content = req.body;
    try {
        const contentData = new ContentModel(content);
        await contentData.save();
        res.status(ResponseCode.Success).json({message:"Resource saved successfully"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.get('/content/:bundleId',authMiddleware,async (req:Request,res:Response)=>{
    const bundleId = req.params.bundleId;
    try {
        const content = await ContentModel.find({bundleId:bundleId});
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
router.delete('/content',authMiddleware,async (req:Request,res:Response)=>{
    const {contentId} = req.body;
    try {
        await ContentModel.deleteOne({_id:contentId})
        res.status(ResponseCode.Success).json({message:"Resource deleted successfully"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.post('/bundle',authMiddleware,async (req:Request,res:Response)=>{
    const {name} = req.body;
    try {
        //@ts-ignore
        const userId = req.userId;
        const bundle = new BundleModel({
            name:name,
            userId:userId
        });
        await bundle.save();
        res.status(ResponseCode.Success).json({message:"Bundle created"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.get('/bundle',authMiddleware,async (req:Request,res:Response)=>{
    //@ts-ignore
    const userId = req.userId;
    try {
        const bundles = await BundleModel.find({userId:userId})
        res.status(ResponseCode.Success).json({message:"Success",bundle:bundles})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.delete('/bundle',authMiddleware,async (req:Request,res:Response)=>{
    const {bundleId} = req.body;
    try {
        await BundleModel.deleteOne({_id:bundleId});
        res.status(200).json({message:"Bundle deleted successfully"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.patch('/bundle',authMiddleware,async (req:Request,res:Response)=>{
    const {bundleName,bundleId} = req.body;
    try {
        await BundleModel.findByIdAndUpdate(bundleId,{name:bundleName});
        res.status(ResponseCode.Success).json({message:"Bundle Updated Successfully"})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.post('/share',authMiddleware,async (req:Request,res:Response)=>{
    const {bundleId} = req.body;
    //@ts-ignore
    const userId = req.userId;
    try {
        const linkExist = await LinkModel.findOne({bundleId:bundleId});
        if(linkExist) return res.status(ResponseCode.Success).json({message:"Link Created",link:linkExist._id})
        const link = new LinkModel({
            userId:userId,
            bundleId:bundleId
        })
        await link.save()
        res.status(ResponseCode.Success).json({message:"Link created",link:link._id})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})
router.get('/open/:link',authMiddleware,async (req:Request,res:Response)=>{
    const link = req.params.link;
    try {
        const linkExist = await LinkModel.findById(link);
        if(!linkExist) return res.status(ResponseCode.NotFound).json({message:"Link not available"})
        const content = await ContentModel.find({bundleId:linkExist.bundleId})
        res.status(ResponseCode.Success).json({message:"Content loaded successfully",content:content})
    } catch (error) {
        res.status(ResponseCode.ServerError).json({message:"Internal server error"})
        console.log(error)
    }
})

export default router;
