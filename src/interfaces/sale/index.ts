import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface SaleInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  discount_percentage: number;
  product_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface SaleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  product_id?: string;
}
