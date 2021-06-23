import {REGISTER} from '../../env';
import {urlEncoded} from '../networking/urlEncoded';

export default function PostVerify(email: string, password: string) {
  return urlEncoded(REGISTER, {
    email: email,
    password: password,
  });
}
