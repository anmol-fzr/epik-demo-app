const baseURL = "http://192.168.29.57:3000"

type IProduct = {
  brand: string;
  product_name: string;
  price: number;
  category: string;
  description: string;
}

const fetchConfig = {
  headers: { "Content-Type": "application/json" },
}

export const API = {
  PRODUCTS: {
    RECOMMEND: async (query: string) => {
      const url = `${baseURL}/recommend?query=${encodeURI(query)}`
      const resp = await fetch(url, fetchConfig)
      if (!resp.ok) {
        return Promise.reject("Product Recommend API Failed")
      }
      return resp
    },
    ALL: async () => {
      const url = `${baseURL}/products`
      const resp = await fetch(url, fetchConfig)
      if (!resp.ok) {
        return Promise.reject("Get Product API Failed")
      }
      return resp
    }
  }
} as const;

export type { IProduct }
