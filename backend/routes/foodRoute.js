import express from "express"
import { addFood, listFood, removeFood} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

//foodRouter.post("/add", addFood) 

//Image Storage Engine
const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        //To make file name unique
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:Storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood);

export default foodRouter;