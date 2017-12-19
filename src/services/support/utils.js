import { convertStringToNumber } from '../utils';

export const initialState = {
  guides: [],
  selectedModelGuides: []
};

export const mapGuidesFromApi = ({ id, model, total_instructive }) => ({
  id: convertStringToNumber(id),
  name: model,
  quantity: convertStringToNumber(total_instructive)
});

export const mapModelGuidesFromApi = guide => ({
  ...guide,
  categoryId: convertStringToNumber(guide.categoryId),
  idInstructive: convertStringToNumber(guide.idInstructive)
});
