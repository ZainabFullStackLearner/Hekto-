const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'h21s50x0', // Replace with your actual project ID
  dataset: 'production', // Adjust dataset if needed
  useCdn: false, 
  apiVersion: '2024-02-11',
  token: 'sk7qU0z8veNMtiDYdjVG2013bbdLQOWQKLLOf9m2mT0FW0VcmkEzSknbzjMX8TG93VbhqpPOj2tmUWqlDIA0sEMbNE38mgBY7ecCvvfdUn3YF5LrgrZnGn3R2xiYEO0pKGa96Xp7JFvKFEEGkDKU3mbyUfSDnp3F3ShtPmZ6uRYt10Yb0hBl' // Replace with your API token
});

async function deleteDuplicates() {
  try {
    const products = await client.fetch('*[_type == "product"] | order(_createdAt asc)');

    const seenTitles = new Map();
    const duplicatesToDelete = [];

    for (const product of products) {
      if (seenTitles.has(product.title)) {
        duplicatesToDelete.push(product._id);
      } else {
        seenTitles.set(product.title, product._id);
      }
    }

    for (const id of duplicatesToDelete) {
      await client.delete(id);
      console.log(`Deleted duplicate product with _id: ${id}`);
    }

    console.log(`✅ Deleted ${duplicatesToDelete.length} duplicate products.`);
  } catch (error) {
    console.error('❌ Error deleting duplicates:', error);
  }
}

deleteDuplicates();
