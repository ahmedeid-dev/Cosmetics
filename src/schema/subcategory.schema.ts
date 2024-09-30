import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Subcategory {
    @Prop({
        type: String,
        required: true,
        trim: true,
        unique: true
    })
    name: string
    @Prop({
        type: String,
        required: true,
        unique: true,
        trim: true,
    })
    slug: string
    @Prop({
        type: Types.ObjectId,
        ref: "Category"
    })
    category: string
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory)