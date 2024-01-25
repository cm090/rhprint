class ApiRequest {
  #PAPERCUT_URL = "https://print.rose-hulman.edu:9192/rpc/api/rest/internal/";
  #endpoints = {
    print: {
      url: `${
        this.#PAPERCUT_URL
      }mobilerelease/api/held-jobs/release?username=[USERNAME]`,
      method: "POST",
    },
    login: {
      url: `${this.#PAPERCUT_URL}webclient/users/[USERNAME]/log-in`,
      method: "POST",
    },
  };

  constructor() {
    document.addEventListener("chromeStorageCallback", this.#runCall);
    document.dispatchEvent(
      new CustomEvent("chromeStorageGet", { detail: { data: "request" } })
    );
  }

  /**
   * Checks request data to prepare API call
   *
   * @param request request headers
   */
  #runCall = ({
    detail: {
      res: { request },
    },
  }) => {
    if (request === null || !request.isRequest) {
      return;
    } else if (request.method === "logout") {
      this.#performLogOut();
    } else {
      this.#apiRequest(request);
    }
  };

  /**
   * Performs log out request
   */
  #performLogOut = () => {
    let responseData;
    try {
      client.logOut(true);
      responseData = { success: true };
    } catch (e) {
      responseData = { success: false };
    }

    if (
      document.dispatchEvent(
        new CustomEvent("chromeStorageSet", {
          detail: { data: { request: responseData } },
        })
      )
    ) {
      window.close();
    }
  };

  /**
   * Performs API call from a predefined endpoint
   *
   * @param request request headers
   */
  #apiRequest = (request) => {
    const apiCall = this.#endpoints[request.method];
    if (apiCall.url.includes("[USERNAME]")) {
      apiCall.url = apiCall.url.replace("[USERNAME]", request.data.username);
      delete request.data.username;
    }
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(request.data)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          params.append(`${key}[]`, item);
        }
      } else {
        params.append(key, value);
      }
    }
    fetch(apiCall.url, {
      method: apiCall.method,
      body: params,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (
          document.dispatchEvent(
            new CustomEvent("chromeStorageSet", {
              detail: { data: { request: res } },
            })
          )
        ) {
          window.close();
        }
      });
  };
}

new ApiRequest();
