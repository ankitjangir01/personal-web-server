import { IBrowsingData } from "browsingData.interface";
import mongoose, { Schema } from "mongoose";

const BrowsingDataSchema = new Schema({
    name: {
        type: String
    }
})

export const BrowsingDataModel = mongoose.model<IBrowsingData>('BrowsingDataModel', BrowsingDataSchema);