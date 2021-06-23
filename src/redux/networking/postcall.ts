import {BEARER_TOKEN} from '../../heleper/Keys';
import {API, BASE_URL} from '../../env';
import DefaultPreference from 'react-native-default-preference';
import GlobalFunctions from '../../heleper/Global';
import Strings from '../../heleper/Strings';
export async function PostCall(path: string, params: JSON) {
  let options = {};
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await DefaultPreference.get(BEARER_TOKEN)}`,
    },
    method: 'POST',
    body: params,
  };
  var final = '';
  if (path.includes('http') == true) {
    final = path;
  } else {
    final = BASE_URL + API + path;
  }
  if (GlobalFunctions.isInternetOn == false) {
    return {status: 400, error: Strings.No_Internet_Error};
  }
  return fetch(final, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
