import mongoose, { model, Model, Schema } from "mongoose";

export interface IJob extends Document {
    title : string ,
    position : string ,
    description : string ,
    salaryRange: [ number , number ],
    contractType: { type:string , duration ?: string},
    Benefits : string[],
}

const JobSchema: Schema<IJob> = new Schema<IJob>({
        title : { type: String , required : true },
        position : { type : String , required : true },
        description : { type : String , required : true },
        salaryRange : [{ type : Number , required : true}] , 
        contractType : { 
            type : {type : String , required : true },
            duration : { type : String }
        },
        Benefits : [{ type:  String } ]
})


const Job : Model<IJob> = model<IJob>('Job',JobSchema)

export default Job