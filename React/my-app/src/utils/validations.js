export const validateSize = password =>
  7 < password.length && password.length < 53;

export const validateOnlyLetters = field => !/[0-9]/i.test(field);

export const validateNumberAndLetter = password => true; // /^[a-zA-Z]$/i.test(password);

export const validateEmail = mail =>
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(mail);

export const formComplete = fields => fields.every(field => field.length);

export const validateCommentSize = text => text.length < 255;

export const notEmpty = text => text.length;

export const validateComment = comment => {
  return validateCommentSize(comment) && notEmpty(comment);
};
