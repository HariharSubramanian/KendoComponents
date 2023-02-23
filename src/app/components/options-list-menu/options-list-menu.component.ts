import { Component } from '@angular/core';

@Component({
  selector: 'demo-kendo-options-list-menu',
  templateUrl: './options-list-menu.component.html',
  styleUrls: ['./options-list-menu.component.css']
})
export class OptionsListMenuComponent {
  public isDisabledProducts = true;
  public isDisabledOrders = true;

  public defaultItemCategories: { categoryName: string; categoryId: number } = {
    categoryName: "Select category",
    categoryId: 0,
  };

  public defaultItemProducts: { productName: string; productId: number } = {
    productName: "Select product",
    productId: 0,
  };

  public defaultItemOrders: { orderName: string; orderId: number } = {
    orderName: "Select order",
    orderId: 0,
  };

  public dataCategory: Array<{ categoryName: string; categoryId: number }> = [
    { categoryName: "Beverages", categoryId: 1 },
    { categoryName: "Condiments", categoryId: 2 },
    { categoryName: "Seafood", categoryId: 3 },
  ];

  public dataProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [
    { productName: "Chai", productId: 1, categoryId: 1 },
    { productName: "Chang", productId: 2, categoryId: 1 },
    { productName: "Aniseed Syrup", productId: 3, categoryId: 2 },
    { productName: "Genen Shouyu", productId: 4, categoryId: 2 },
    { productName: "Ikura", productId: 5, categoryId: 3 },
    { productName: "Konbu", productId: 6, categoryId: 3 },
  ];

  public dataOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> = [
    { orderName: "Cunewalde", orderId: 1, productId: 1 },
    { orderName: "Albuquerque", orderId: 2, productId: 1 },
    { orderName: "Geneva", orderId: 3, productId: 2 },
    { orderName: "Graz", orderId: 4, productId: 2 },
    { orderName: "London", orderId: 5, productId: 3 },
    { orderName: "I. de Margarita", orderId: 6, productId: 3 },
    { orderName: "Barquisimeto", orderId: 7, productId: 4 },
    { orderName: "Brandenburg", orderId: 8, productId: 4 },
    { orderName: "Cunewalde", orderId: 9, productId: 5 },
    { orderName: "Mexico D.F.", orderId: 10, productId: 5 },
    { orderName: "Mexico D.F.", orderId: 11, productId: 6 },
    { orderName: "Rio de Janeiro", orderId: 12, productId: 6 },
  ];

  public dataResultProducts!: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }>;

  public dataResultOrders!: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }>;

  public selectedCategory!: { categoryName: string; categoryId: number };
  public selectedProduct!: { productName: string; productId: number };
  public selectedOrder!: { orderName: string; orderId: number };

  handleCategoryChange(value: any) {
    this.selectedCategory = value;
    this.selectedProduct = value;
    this.selectedOrder = value;

    if (value.categoryId === this.defaultItemCategories.categoryId) {
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataProducts.filter(
        (s) => s.categoryId === value.categoryId
      );
    }

    this.isDisabledOrders = true;
    this.dataResultOrders = [];
  }

  handleProductChange(value: any) {
    this.selectedProduct = value;
    this.selectedOrder = value;

    if (value.productId === this.defaultItemProducts.productId) {
      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    } else {
      this.isDisabledOrders = false;
      this.dataResultOrders = this.dataOrders.filter(
        (s) => s.productId === value.productId
      );
    }
  }

  handleOrderChange(value: any) {
    this.selectedOrder = value;
  }
}
