import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products = [
    { id: '1', title: 'Apple', imageURL: '', description: 'Apple description', price: 1 },
    { id: '2', title: 'Banana', imageURL: '', description: 'Banana description', price: 2 },
  ]

  identify(index: number, item: { id: string }) {
    return item.id
  }
}
