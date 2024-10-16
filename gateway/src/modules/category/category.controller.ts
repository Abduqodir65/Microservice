import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dtos';
import { Payload } from '@nestjs/microservices';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  getCategories() {
    return this.service.getCategoryList();
  }

  @Get("/:id")
  getSingleCategory(id:number) {
    return this.service.getSingleCategory(id)
  }

  @Patch()
  updateCategory(id:number, payload: {name:string}) {
    return this.service.updateCategory(id,payload)
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.service.createCategory(payload.name);
  }

  @Delete("/:id")
  deleteCategory(@Param("id", ParseIntPipe) id: number) {
    return this.service.deleteCategory(id);
  }
}
