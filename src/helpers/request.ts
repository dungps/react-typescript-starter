import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import _ from "lodash"
import qs from "query-string"
import { API_URL, API_REQUEST_TIMEOUT } from "./constants"
import storage from "./storage"
import { Store } from "redux"
// import { API_REFRESH_TOKEN } from "modules/users/apis/url"
// import { ACCOUNT_LOGOUT } from "modules/users/redux/types"

let onRefreshToken: any = null
let token = storage.getAccessToken()
const headers = {
  "Content-Type": "application/json",
  "Accept-Language": storage.get("locale", "en")
}

if (token) {
  Object.assign(headers, {
    Authorization: `Bearer ${token}`
  })
}

const client = axios.create({
  baseURL: API_URL,
  timeout: API_REQUEST_TIMEOUT,
  headers,
  responseType: "json"
})

client.interceptors.request.use(
  (config: any) => {
    if (config.ignoreAuth) {
      config.validateStatus = (status: any) => {
        return status >= 200 && status < 300 // default
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

function setupInterceptors(store: Store) {
  client.interceptors.response.use(
    (response) => {
      return response
    }
    // this function handle error
    // async error => {
    //   if (error.response) {
    //     const originRequest = error.config;
    //     const errorType = _.get(error.response, "data.data", "");

    //     if (errorType === "invalid_token") {
    //       if (!onRefreshToken) {
    //         onRefreshToken = client.post(API_REFRESH_TOKEN, {
    //           refresh_token: storage.getRefreshToken()
    //         });

    //         return onRefreshToken.then((res: AxiosResponse) => {
    //           Request.setAccessToken(res.data);
    //           onRefreshToken = undefined;
    //           originRequest.headers["Authorization"] = `Bearer ${
    //             res.data.token
    //           }`;
    //           return client.request(originRequest);
    //         });
    //       } else {
    //         return onRefreshToken.then((res: AxiosResponse) => {
    //           originRequest.headers["Authorization"] = `Bearer ${
    //             res.data.token
    //           }`;
    //           return client.request(originRequest);
    //         });
    //       }
    //     } else if (errorType === "invalid_refresh_token") {
    //       Request.clearToken();
    //       store.dispatch({
    //         type: ACCOUNT_LOGOUT
    //       });
    //     } else {
    //       throw error.response;
    //     }
    //   } else if (error.request) {
    //     const err = {
    //       data: { message: "network.error" }
    //     };
    //     throw err.data;
    //   } else {
    //     throw error;
    //   }
    // }
  )
}

function transformSuccess(response: AxiosResponse) {
  return response.data
}

const Request = {
  request: (configs: AxiosRequestConfig = {}) => {
    return client.request(configs).then(transformSuccess)
  },

  get: (url: string, params: any = {}, configs: AxiosRequestConfig = {}) => {
    return client.get(url, { params, ...configs }).then(transformSuccess)
  },

  post: (url: string, data: any = {}, config: AxiosRequestConfig = {}) => {
    return client.post(url, data, config).then(transformSuccess)
  },

  postEndcode: (url: string, data: any = {}, configs: AxiosRequestConfig = {}) => {
    return client
      .post(url, qs.stringify(data), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        ...configs
      })
      .then(transformSuccess)
  },

  put: (url: string, data: any = {}, configs: AxiosRequestConfig = {}) => {
    return client.put(url, data, configs).then(transformSuccess)
  },

  patch: (url: string, data: any = {}, configs: AxiosRequestConfig = {}) => {
    return client.patch(url, data, configs).then(transformSuccess)
  },

  delete: (url: string, data: any = {}, configs: AxiosRequestConfig = {}) => {
    return client.request({
      url,
      method: "delete",
      data,
      ...configs
    })
  },

  upload: (url: string, file: File, configs: AxiosRequestConfig = {}) => {
    configs = _.omit(configs, ["Content-Type"])

    const data = new FormData()
    data.append("file", file)

    return client.post(url, data, configs).then(transformSuccess)
  },

  download: (url: string, params: any = {}, configs: AxiosRequestConfig = {}) => {
    return client.get(url, { params, responseType: "blob", ...configs })
  },

  setAccessToken: ({ accessToken, refreshToken }: any) => {
    client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
    client.defaults.headers["Authorization"] = `Bearer ${accessToken}`
    storage.setAccessToken(accessToken)
    storage.setRefreshToken(refreshToken)
  },
  clearToken: () => {
    storage.removeToken()
  },
  setupInterceptors: setupInterceptors
}

export default Request
