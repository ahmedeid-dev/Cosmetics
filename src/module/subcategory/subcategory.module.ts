import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Subcategory } from 'src/schema/subcategory.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Subcategory.name, schema: SubcategorySchema }])],
  controllers: [SubcategoryController],
  providers: [SubcategoryService],
})
export class SubcategoryModule {}
