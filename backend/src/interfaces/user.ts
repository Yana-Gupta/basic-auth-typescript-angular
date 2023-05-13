import { Document } from "mongodb"

export default interface user extends Document {
    email: string
    password: string
    time: Date
}
