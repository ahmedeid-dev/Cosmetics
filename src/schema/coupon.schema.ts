import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Coupon { 
    @Prop({
        type: String,
        unique: true
    })
    code: string
    @Prop({
        type: Number,
        min: 0,
        max: 100,
        default: 0
    })
    discount: number
    @Prop({
        type: Date
    })
    expireDate: Date
}

export const CouponSchema = SchemaFactory.createForClass(Coupon)