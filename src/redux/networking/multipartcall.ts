import {BEARER_TOKEN} from '../../heleper/Keys';
import {API, BASE_URL} from '../../env';
import DefaultPreference from 'react-native-default-preference';
import GlobalFunctions from '../../heleper/Global';
import Strings from '../../heleper/Strings';
function objToFormData(obj: any) {
  var form = new FormData();
  for (const key in obj) {
    form.append(key, obj[key]);
  }
  return form;
}
export async function MultipartCall(path: string, params: any) {
  const formParams = objToFormData(params);
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${await DefaultPreference.get(BEARER_TOKEN)}`,
      'Content-Type': 'multipart/form-data',
    },
    method: 'POST',
    body: formParams,
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
