/**
 * @param entity
 * @returns if any errors exist in errors array, reject promise; otherwise send resolve with validated data.
 */
const entityController = (entity: { errors: any[]; }) => {
  if (entity.errors && entity.errors.length > 0) {
    const errors = {};
    entity.errors.forEach((error) => {
      if (errors[error.field]) {
        errors[error.field].push(error);
      } else {
        errors[error.field] = [];
        errors[error.field].push(error);
      }
    });
    throw errors;
  }
  delete entity.errors;
  return entity;
};

export default (Entity, data) => {
  const result = new Entity(data, []);
  return entityController(result).data;
};
