# login-api

**LOGIN API**
----

* **URL**
  
  /login

* **Method**

  `POST`

* **Data Params**

  **Required**
    `username=[string]`
    `password=[string]`

* **Success Response**

  * **Code:** 200 (Ok)
    **Data:** {
      code,
      access_token
    }

* **Error Response:**

  * **Name:** Username field aint filled
    **Code:** 400 (Bad Request)
    **Data:** {
      code: 400,
      message: `Please fill your username`
    }

  * **Name:** Username aint registered
    **Code:** 401 (Unauthorized)
    **Data:** {
      code: 401,
      message: `Username isn't registered yet`
    }
  
  * **Name:** Wrong Password
    **Code:** 401 (Unautorized)
    **Data:** {
      code: 401,
      message: `Wrong password`
    }