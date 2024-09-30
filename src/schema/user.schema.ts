import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class User {
    @Prop({
        trim: true,
        type: String,
        minlength: 3,
        maxlength: 30
    })
    name: string;
    @Prop({
        trim: true,
        type: String,
        unique: true
    })
    email: string;
    @Prop({
        type: String,
        minlength: 6,
        maxlength: 100
    })
    password: string;
    @Prop({
        type: String,
        length: 11,
        unique: true
    })
    phone: string;
    @Prop({
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    })
    role: string;
    @Prop({
        type: Boolean,
        default: false
    })
    isVerified: boolean;
    @Prop({
        type: Date
    })
    verifiedAt: Date;
    @Prop({
        type: Boolean,
        default: true
    })
    isActive: boolean;
    @Prop({
        type: [{
            street: String,
            city: String,
            governorate: String,
            country: {
                type: String,
                enum: ['egypt', 'turkey', 'sa'],
                default: 'egypt'
            }
        }]
    })
    address: [{
        street: string,
        city: string,
        governorate: string,
        country: string
    }];
    @Prop({
        type: [Types.ObjectId],
        ref: 'Product',
    })
    wishList: [{
        type: string,
    }];
}

export const UserSchema = SchemaFactory.createForClass(User);
