import {BEARER_TOKEN} from '../../heleper/Keys';
import {API, BASE_URL} from '../../env';
import DefaultPreference from 'react-native-default-preference';
import GlobalFunctions from '../../heleper/Global';
import Strings from '../../heleper/Strings';
function urlSearch(obj: any) {
  var formBody = [];
  for (var property in obj) {
    if (typeof obj[property] == 'object') {
      for (var property1 in obj[property]) {
        var encodedKey = encodeURIComponent(property + '[]');
        var encodedValue = encodeURIComponent(obj[property][property1]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
    } else {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(obj[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
  }
  return formBody.join('&');
}
export async function urlEncoded(path: string, params: any) {
  const urlEncoded1 = urlSearch(params);
  let options = {};
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${await DefaultPreference.get(BEARER_TOKEN)}`,
    },
    method: 'POST',
    body: urlEncoded1,
    redirect: 'follow',
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
