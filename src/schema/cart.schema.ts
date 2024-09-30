import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Cart {
    @Prop({
        type: Types.ObjectId,
        ref: "User",
    })
    user: string;
    @Prop({
        type: [{
            product: String,
            quantity: Number,
            price: Number
        }],
        default: []
    })
    cartItems: [{
        product: string,
        quantity: number,
        price: number
    }];
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    totalPrice: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    discount: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    totalPriceAfterDiscount: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart)