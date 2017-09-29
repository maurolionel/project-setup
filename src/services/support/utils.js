import { replaceMiddleDashWithSpace } from '../utils';

export const initialState = {
  guides: [],
  selectedModelGuides: []
};

export const mapGuidesFromApi = ({ id, product_id, name, quantity }) => ({
  id: parseInt(id, 10),
  productId: parseInt(product_id, 10),
  name,
  quantity: parseInt(quantity, 10)
});

export const mapModelGuidesFromApi = ({
  id, product_id, guide_class, category, brand, model, guide_type, url
}) => ({
  id: parseInt(id, 10),
  productId: parseInt(product_id, 10),
  category: replaceMiddleDashWithSpace(category),
  brand: replaceMiddleDashWithSpace(brand),
  model,
  guideClass: guide_class,
  guideType: guide_type,
  url
});
