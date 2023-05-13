import mongoose from "mongoose"

mongoose.set("strictQuery", false)

export default async (): Promise<any> => {
    try {
        await mongoose.connect(
            "mongodb+srv://new_user:new_password@cluster0.fubxi8b.mongodb.net/?retryWrites=true&w=majority",
            {}
        )
        console.log("Connected to the DB!")
    } catch (err) {
        console.log("Error connecting to the Database!", err)
    }
}
