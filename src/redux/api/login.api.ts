import {LOGIN} from '../../env';
import {urlEncoded} from '../networking/urlEncoded';

export default function PostVerify(email: string, password: string) {
  return urlEncoded(LOGIN, {
    email: email,
    password: password,
  });
}
