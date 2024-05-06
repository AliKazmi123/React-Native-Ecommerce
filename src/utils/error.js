import { showMessage } from 'react-native-flash-message';
import { strings } from '../res';
export function handleError(e) {
  showMessage({
    message: e && e.message ? e.message : strings.call_fail_error,
    type: 'danger',
  });
}

export function notificationMessage(data) {
  const type = data && data.type ? data.type : 'error';
  const message = data && data.message ? data.message : 'Fail';
  const errors = data && data.errors ? data.errors : {};
  return {
    type,
    message,
    errors,
  };
}
