import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

let db_UserName = 'GamingKarthik'
let db_password = 'Y2j2oOR4ngm9pC6H'
let db_Name = 'Charles-UTurn'
let db_Cluster = 'cluster0.5fc7k.mongodb.net'

const cloudURL = `mongodb+srv://${db_UserName}:${db_password}@${db_Cluster}/${db_Name}?retryWrites=true&w=majority`;
const connectDB = async () => {

    await mongoose.connect(cloudURL);
    console.log('MongoDB Connected');

}
export default connectDB