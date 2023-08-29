import { CartItemInterface } from 'interfaces/cart-item';
import { SaleInterface } from 'interfaces/sale';
import { RetailerInterface } from 'interfaces/retailer';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  color: string;
  retailer_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  sale?: SaleInterface[];
  retailer?: RetailerInterface;
  _count?: {
    cart_item?: number;
    sale?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  brand?: string;
  size?: string;
  color?: string;
  retailer_id?: string;
}
