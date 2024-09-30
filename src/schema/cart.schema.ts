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
    orderItems: [{
        product: string,
        quantity: number,
        price: number
    }];
    @Prop({
        type: [{
            street: String,
            city: String,
            governorate: String,
            country: String
        }],
        default: []
    })
    shippingAddress: [{
        street: string,
        city: string,
        governorate: string,
        country: {
            type: String,
            enum: ['egypt', 'turkey', 'kurdistan', 'usa', 'uk', 'japan'],
            default: 'egypt'
        }
    }];
    @Prop({
        type: String,
        enum: ['cash', 'card'],
        default: 'cash'
    })
    paymentMethod: string;
    @Prop({
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    })
    paymentResult: string;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    shippingPrice: number;
    @Prop({
        type: Number,
        min: 0,
        default: 0
    })
    totalPrice: number;
    @Prop({
        type: Boolean,
        default: false
    })
    isPaid: boolean;
    @Prop({
        type: Date
    })
    paidAt: Date;
    @Prop({
        type: Boolean,
        default: false
    })
    isDelivered: boolean;
    @Prop({
        type: Date
    })
    deliveredAt: Date;
}

export const CartSchema = SchemaFactory.createForClass(Cart)