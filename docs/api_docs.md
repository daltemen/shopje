# shop API REST docs

This api will allow you to manage our shop

EndPoints

## Products Endpoints
* Ping: `GET /health`
* Create Products : `POST /api/v1/products/`
* Get All Products: `GET /api/v1/products/shop/{shop_id}`
* Get Product : `GET /api/v1/products/{id}`
* Modify Product : `PUT /api/v1/products/{id}`
* Delete Product : `DELETE /api/v1/products/{id}`

## Sales Endpoints
* Create Sale : `POST /api/v1/sales/`
* Get All Sales: `GET /api/v1/sales/shop/{shop_id}`
* Get Sale: `GET /api/v1/sales/{id}`

## Shops Endpoints
* Get All Shops : `GET /api/v1/shops`
* Create Shops: `POST /api/v1/shops`
* Get Shop: `GET /api/v1/shops/{id}`


# Create Products
**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide fields of Product

**Data example** All fields must be sent.

```json
{
  "name": "mouse", 
  "price": 3201, 
  "quantity": 5, 
  "shop_id": 1
}
```

**Response** Brakes Example

```json
{
  "id": 3,
  "name": "mouse",
  "price": 3201,
  "quantity": 5,
  "shop_id": 1
}
```

# Get All Products
**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints**


**Data example**

`http://localhost:5000/api/v1/products/1`

**Response** Brakes Example

```json
{
  "products": [
    {
      "id": 1,
      "name": "phone",
      "price": 3000,
      "quantity": 4,
      "shop_id": 1
    },
    {
      "id": 2,
      "name": "keyboard",
      "price": 3200,
      "quantity": 4,
      "shop_id": 1
    },
    {
      "id": 3,
      "name": "mouse",
      "price": 1000,
      "quantity": 3,
      "shop_id": 1
    }
  ]
}
```

# Get Product
**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints**


**Data example**

`http://localhost:5000/api/v1/products/shop/1`

**Response** Brakes Example

```json
{
  "id": 1,
  "name": "phone",
  "price": 3000,
  "quantity": 4,
  "shop_id": 1
}
```

# Modify Product
**Method** : `PUT`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide fields of Product

**Data example** All fields must be sent.

```json
{
  "quantity": 6
}
```

**Response** Brakes Example

```json
{
  "id": 1,
  "name": "phone",
  "price": 3000,
  "quantity": 6,
  "shop_id": 1
}
```

# Delete Product
**Method** : `DELETE`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

**Data example** All fields must be sent.

`http://localhost:5000/api/v1/products/3`

**Response** Brakes Example

```json
{
  "ok": true
}
```

# Create Sale
**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide fields of Sale

**Data example** All fields must be sent.

```json
{
  "client": "Fernando Lopez",
  "phone": "3246669009",
  "price": 6200,
  "products": [
    {
      "id": 1,
      "quantity": 1
    },
    {
      "id": 2,
      "quantity": 1
    }
  ],
	"shop_id": 1
}
```

**Response** Brakes Example

```json
{
  "client": "Fernando Lopez",
  "id": 2,
  "phone": "3246669009",
  "price": 6200,
  "products": [
    {
      "id": 1,
      "name": "phone",
      "price": 3000,
      "quantity": 4,
      "shop_id": 1
    },
    {
      "id": 2,
      "name": "keyboard",
      "price": 3200,
      "quantity": 4,
      "shop_id": 1
    }
  ],
  "shop_id": 1
}
```

# Get All Sales
**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints**


**Data example** All fields must be sent.

`http://localhost:5000/api/v1/sales/shop/1`

**Response** Brakes Example

```json
{
  "sales": [
    {
      "client": "Daniel Mendoza",
      "id": 1,
      "phone": "3124567890",
      "price": 6200,
      "products": [
        {
          "id": 1,
          "name": "phone",
          "price": 3000,
          "quantity": 4,
          "shop_id": 1
        },
        {
          "id": 2,
          "name": "keyboard",
          "price": 3200,
          "quantity": 4,
          "shop_id": 1
        }
      ],
      "shop_id": 1
    }
  ]
}
```

# Get Sale
**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints**


**Data example** All fields must be sent.

`http://localhost:5000/api/v1/sales/2`

**Response** Brakes Example

```json
{
  "client": "Fernando Lopez",
  "id": 2,
  "phone": "3246669009",
  "price": 6200,
  "products": [
    {
      "id": 1,
      "name": "phone",
      "price": 3000,
      "quantity": 4,
      "shop_id": 1
    },
    {
      "id": 2,
      "name": "keyboard",
      "price": 3200,
      "quantity": 4,
      "shop_id": 1
    }
  ],
  "shop_id": 1
}
```

# Get All Shops
**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints**


**Data example** All fields must be sent.

`http://localhost:5000/api/v1/shops`

**Response** Brakes Example

```json
{
  "shops": [
    {
      "id": 1,
      "name": "shop test 1"
    },
    {
      "id": 2,
      "name": "shop test 2"
    },
    {
      "id": 3,
      "name": "adriana shop"
    }
  ]
}
```

# Create Shops
**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide fields of Shop

**Data example** All fields must be sent.

```json
{
	"name": "adriana shop"
}
```

**Response** Brakes Example

```json
{
  "id": 3,
  "name": "adriana shop"
}
```
