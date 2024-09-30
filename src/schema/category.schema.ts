import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
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
    image: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)