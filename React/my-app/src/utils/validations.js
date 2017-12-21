export const validateSize = password =>
  7 < password.length && password.length < 53;

export const validateOnlyLetters = fields =>
  fields.every(field => !/[0-9]/i.test(field));

export const validateNumberAndLetter = password =>
  /[a-zA-Z]/i.test(password) && /[0-9]/i.test(password);

export const validateEmail = mail =>
  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(mail);

export const formComplete = fields => fields.every(field => field.length);
