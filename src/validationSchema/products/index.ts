import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  brand: yup.string().required(),
  price: yup.number().integer().required(),
  size: yup.string().required(),
  color: yup.string().required(),
  retailer_id: yup.string().nullable().required(),
});
