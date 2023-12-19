import { observable, action, makeObservable } from 'mobx';
import { IProduct } from '../../../types/IProduct';
import { ICartItem } from '../../../types/ICartItem';

class CartStore {
  @observable orders: ICartItem[] = [];
  @observable ordersCount: number = 0;
  @observable totalSum: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action addToCart(product: IProduct) {
    const existingCartItem = this.orders.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingCartItem) {
      this.incrementCartItem(existingCartItem);
    } else {
      this.addNewCartItem(product);
    }

    this.countOrders();
    this.countTotalSum();
  }

  @action deleteItemFromCart(productId: string) {
    const newOrders = this.orders.filter(
      (cartItem) => cartItem.id !== productId
    );

    this.orders = [...newOrders];
    this.countOrders();
    this.countTotalSum();
  }

  @action decrementCartItem(cartItem: ICartItem) {
    cartItem.count -= 1;
    this.orders = [...this.orders];
    this.countOrders();
    this.countTotalSum();
  }

  @action emptyOrders() {
    this.orders = [];
    this.countOrders();
    this.countTotalSum();
  }

  private incrementCartItem(cartItem: ICartItem) {
    cartItem.count += 1;
    this.orders = [...this.orders];
  }

  private addNewCartItem(product: IProduct) {
    const newCartItem: ICartItem = { ...product, count: 1 };
    this.orders = [...this.orders, newCartItem];
  }

  private countOrders() {
    this.ordersCount = this.orders.reduce(
      (count, cartItem) => (count += cartItem.count),
      0
    );
  }

  private countTotalSum() {
    this.totalSum = +this.orders
      .reduce((sum, cartItem) => (sum += cartItem.count * cartItem.price), 0)
      .toFixed(2);
  }
}

export default new CartStore();
