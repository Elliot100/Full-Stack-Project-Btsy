export const getProducts = () => $.ajax({
  url: 'api/products'
});

export const getSingleProduct = (id) =>
  $.ajax({
    url: `api/products/${id}`,
  });


