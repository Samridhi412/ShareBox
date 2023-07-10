import mongoose from "mongoose";
const DBConnection = async () => {
    const DB_URL = `mongodb://EagerCoder:EagerCoder123123@ac-9uabfny-shard-00-00.xc4lsmw.mongodb.net:27017,ac-9uabfny-shard-00-01.xc4lsmw.mongodb.net:27017,ac-9uabfny-shard-00-02.xc4lsmw.mongodb.net:27017/?ssl=true&replicaSet=atlas-ihvasx-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(DB_URL, { useNewUrlParser: true });
        console.log('Database connected successfully')
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;

