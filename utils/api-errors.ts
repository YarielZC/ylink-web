const HTTP_ERROR_MESSAGES: Record<number, string> = {
  400: 'Datos incorrectos. Revisa la información enviada.',
  401: 'Usuario o contraseña incorrectos.',
  403: 'Tu cuenta está deshabilitada. Contacta con soporte.',
  404: 'El recurso solicitado no existe.',
  422: 'Datos inválidos. Revisa los campos del formulario.',
  429: 'Demasiados intentos. Espera un momento antes de volver a intentarlo.',
  500: 'Error interno del servidor. Inténtalo más tarde.',
}

export function getApiErrorMessage(status: number, data: any): string {
  if (HTTP_ERROR_MESSAGES[status]) {
    return HTTP_ERROR_MESSAGES[status]
  }

  return 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.'
}
