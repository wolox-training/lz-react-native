export const validarTamanio = password =>
  7 < password.length && password.length < 53;

export const validarNumeroYLetra = password =>
  /[a-zA-Z]/i.test(password) && /[0-9]/i.test(password);

export const formatoMailValido = mail =>
  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(mail);
