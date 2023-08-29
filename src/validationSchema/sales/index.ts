import * as yup from 'yup';

export const saleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  discount_percentage: yup.number().integer().required(),
  product_id: yup.string().nullable().required(),
});
