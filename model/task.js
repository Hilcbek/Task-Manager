import mongoose from 'mongoose'
let {Schema,model} = mongoose;
let TaskSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
}, {timestamps : true });
export default model('Task',TaskSchema);