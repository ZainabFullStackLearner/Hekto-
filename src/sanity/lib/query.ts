import { defineQuery } from "next-sanity";

export const allProducts  = defineQuery(
    `*[_type == "product"]{
        _id,
        name,
        image {
          asset -> {
            _id,
            url
          }
        },
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
      }`
      
)