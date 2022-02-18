export const getProducts = () => $.ajax({
  url: 'api/products'
});

export const getSingleProduct = (id) =>
  $.ajax({
    url: `api/products/${id}`,
  });

export const postProduct = (product) => 
  $.ajax({
    url: 'api/products',
    method: "POST",
    data: { product }
  })
