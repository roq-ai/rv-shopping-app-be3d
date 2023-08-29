import axios from 'axios';
import queryString from 'query-string';
import { SaleInterface, SaleGetQueryInterface } from 'interfaces/sale';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSales = async (query?: SaleGetQueryInterface): Promise<PaginatedInterface<SaleInterface>> => {
  const response = await axios.get('/api/sales', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSale = async (sale: SaleInterface) => {
  const response = await axios.post('/api/sales', sale);
  return response.data;
};

export const updateSaleById = async (id: string, sale: SaleInterface) => {
  const response = await axios.put(`/api/sales/${id}`, sale);
  return response.data;
};

export const getSaleById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sales/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSaleById = async (id: string) => {
  const response = await axios.delete(`/api/sales/${id}`);
  return response.data;
};
