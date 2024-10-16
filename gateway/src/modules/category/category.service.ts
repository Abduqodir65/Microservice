import { Injectable } from '@nestjs/common';
import { CategoryClient } from './category.client';

@Injectable()
export class CategoryService {
  constructor(private categoryClient: CategoryClient) {}

  getCategoryList() {
    return this.categoryClient.getAllCategories();
  }
  getSingleCategory(id:number) {
    return this.categoryClient.getSingleCategory(id);
  }

  updateCategory(id:number,payload: { name :string }) {
    return this.updateCategory(id,payload)
  }

  createCategory(name: string) {
    return this.categoryClient.createCategory(name);
  }

  deleteCategory(id: number) {
    return this.categoryClient.deleteCategory(id)
  }
}
