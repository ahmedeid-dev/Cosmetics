import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Product {
    @Prop({
        type: String,
        required: true
    })
    title: string;
    @Prop({
        type: String,
        trim: true,
        unique: true
    })
    slug: string;
    @Prop({
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000
    })
    description: string;
    @Prop({
        type: String,
        required: true
    })
    imageCover: string;
    @Prop({
        type: [String]
    })
    images: string[];
    @Prop({
        type: Number,
        required: true,
        min: 0
    })
    price: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    priceAfterDiscount: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    quantity: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    sold: number;
    @Prop({
        type: Number,
        min: 0,
        max: 5,
        default: 0
    })
    rateAverage: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    rateQuantity: number;
    @Prop({
        type: Types.ObjectId,
        ref: 'Category'
    })
    category: string;
    @Prop({
        type: Types.ObjectId,
        ref: 'Subcategory'
    })
    subcategory: string;
    @Prop({
        type: Types.ObjectId,
        ref: 'Brand'
    })
    brand: string;
    @Prop({
        type: Boolean,
        default: false
    })
    isFeatured: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product)