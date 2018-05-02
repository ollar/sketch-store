import { all } from 'rsvp';

export default function destroyModel(model, relations) {
  if (!model) return;

  let relatedModels = [];

  if (relations && relations.length) {
    relations.forEach((rel) => {
      relatedModels = relatedModels.concat(model.get(rel).toArray());
    });
  }

  return all(relatedModels.map((model) => model.destroyRecord()))
    .then(() => model.destroyRecord());
}
