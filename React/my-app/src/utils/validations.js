export const validateSize = password =>
  7 < password.length && password.length < 53;

export const validateOnlyLetters = fields =>
  fields.every(field => !/[0-9]/i.test(field));

export const validateNumberAndLetter = password =>
  !/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/i.test(
    password
  );

export const validateEmail = mail =>
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    mail
  );

export const formComplete = fields => fields.every(field => field.length);
