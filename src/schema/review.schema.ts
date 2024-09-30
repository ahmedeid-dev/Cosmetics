import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Review {

    @Prop({
        type: String,
        minlength: 3,
    })
    comment: string;
    @Prop({
        type: Types.ObjectId,
        ref: "User",
    })
    user: string;
    @Prop({
        type: Types.ObjectId,
        ref: "Product",
    })
    product: string;
    @Prop({
        type: Number,
        min: 0,
        max: 5,
        default: 5
    })
    rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review)