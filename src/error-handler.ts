import { RequestValidationError, ResponseValidationError } from './errors';

export function defaultHandleValidationError(
  error: RequestValidationError | ResponseValidationError,
): void {
  const { requestOptions } = error.metadata;

  console.error(
    `zoxios - [${error.name}] - ${error.message}
    timeout: ${requestOptions?.timeout}
    method: ${requestOptions?.method}
    url: ${requestOptions?.url}

    body:
    ${JSON.stringify(requestOptions?.data)}

    query params:
    ${JSON.stringify(requestOptions?.params)}

    issues:
    ${JSON.stringify(error.zodError.issues)}`,
  );

  throw error;
}

export function defaultRequestValidationHandler(
  error: RequestValidationError,
): void {
  defaultHandleValidationError(error);
}

export function defaultResponseValidationHandler(
  error: ResponseValidationError,
): void {
  defaultHandleValidationError(error);
}
