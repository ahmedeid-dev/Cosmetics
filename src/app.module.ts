import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/product/product.module';
import { CategoryModule } from './module/category/category.module';
import { SubcategoryModule } from './module/subcategory/subcategory.module';
import { BrandModule } from './module/brand/brand.module';
import { CartModule } from './module/cart/cart.module';
import { OrderModule } from './module/order/order.module';
import { CouponModule } from './module/coupon/coupon.module';
import { ReviewModule } from './module/review/review.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [UserModule, ProductModule, CategoryModule, SubcategoryModule, BrandModule, CartModule, OrderModule, CouponModule, ReviewModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
