import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Brand {
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
        type: String,
        required: true,
    })
    logo: string
}

export const BrandSchema = SchemaFactory.createForClass(Brand)