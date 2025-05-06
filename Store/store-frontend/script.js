document.getElementById('productForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const form = e.target;
    const imageFile = form.image.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);
  
    try {
      // 1. Upload the image
      const uploadRes = await fetch('http://localhost:3000/api/products/upload', {
        method: 'POST',
        body: formData
      });
  
      const uploadData = await uploadRes.json();
  
      if (!uploadData.imageUrl) {
        return alert('Image upload failed');
      }
  
      // 2. Send product data
      const product = {
        name: form.name.value,
        price: parseFloat(form.price.value),
        description: form.description.value,
        imageUrl: uploadData.imageUrl
      };
  
      const productRes = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
      const productData = await productRes.json();
      alert('Product added successfully!');
      form.reset();
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  });
  