import { Router, Request, Response} from "express";
import User from "./schemas/user"

const router = Router()


router.post("/", async (req: Request, res: Response):Promise<any> => {

    const foundUser = await User.findOne({ email: req.body.email })
    if ( foundUser ) {
        res.status(400).json({
            msg: "User already exits!"
        })
        return;
    }

    try{
        const newUser = await new User({ email: req.body.email, password: req.body.password })
        newUser.save()
         res.status(201).json({
            msg: "User created"
        })
        return;
    } catch(err) {
        console.log("Error Creating user", err)
         res.send(400).json({
            msg: "User cannot be created"
        })
        return;
    }
})


export default router;