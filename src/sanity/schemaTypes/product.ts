export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: any) => Rule.required().error("Name is required"),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      description: "Upload an image of the product.",
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      validation: (Rule: any) => Rule.required().error("Price is required"),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: any) =>
        Rule.max(150).warning("Keep the description under 150 characters."),
    },
    {
      name: "product_id",
      type: "string",
      title: "stripe-Product_id",
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
      validation: (Rule: any) =>
        Rule.min(0).max(100).warning("Discount must be between 0 and 100."),
    },
    {
      name: "isFeaturedProduct",
      type: "boolean",
      title: "Is Featured Product",
    },
    {
      name: "istrendingProduct",
      type: "boolean",
      title: "Is Trending Product",
    },
    {
      name: "shopGrid",
      type: "boolean",
      title: "Is Shop Grid",
    },
    {
      name: "isLatestProduct",
      type: "boolean",
      title: "Is Latest Product", // Added Latest Product field
    },
    {
      name: "stockLevel",
      type: "number",
      title: "Stock Level",
      validation: (Rule: any) =>
        Rule.min(0).error("Stock level must be a positive number."),
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Chair", value: "Chair" },
          { title: "Sofa", value: "Sofa" },
          { title: "Trending", value: "Trending" },
          { title: "Electronics", value: "electronics" },
          { title: "Latest", value: "latest" }, // Added Latest category
        ],
      },
      validation: (Rule: any) => Rule.required().error("Category is required"),
    },
  ],
};
