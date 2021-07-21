export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&");
}

export function getbearertoken() {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  }
  else{
    return null
  }
}
