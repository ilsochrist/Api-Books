import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ilso:123@ilso.khelv.mongodb.net/ilso-node");

let db = mongoose.connection;

export default db;