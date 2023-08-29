const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-items': 'cart_item',
  products: 'product',
  retailers: 'retailer',
  sales: 'sale',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
