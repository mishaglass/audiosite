export const validations = {
  commonInput(value) {
    if (!value) return false;

    let isValid = /^[a-zA-Z]+$/.test(value);

    if (!isValid) {
      return false;
    }
    return true;
  },
};
