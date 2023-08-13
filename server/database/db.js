
import mongoose from 'mongoose'

const DBConnection = async() =>{

    const MONGODB_URI =  `mongodb://neema:neema123@ac-sfxn3ii-shard-00-00.nvf4yn6.mongodb.net:27017,ac-sfxn3ii-shard-00-01.nvf4yn6.mongodb.net:27017,ac-sfxn3ii-shard-00-02.nvf4yn6.mongodb.net:27017/?ssl=true&replicaSet=atlas-xosycu-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log('database connected successfully');
        
    } catch (error) {

        console.error('error while connection with the database', error.message);
        
    }

}

export default DBConnection;