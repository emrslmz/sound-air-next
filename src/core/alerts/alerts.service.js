import Notify from 'handy-notification';

export const notify = (value) => {
  if (value) {
    Notify({
      value,
    });
  }
};
