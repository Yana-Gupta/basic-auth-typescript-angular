import userInterface from "../interfaces/user"

import { Schema, model} from "mongoose"

const userSchema = new Schema<userInterface>({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

export default model<userInterface>("user", userSchema)