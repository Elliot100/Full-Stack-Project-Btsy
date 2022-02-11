export const getProducts = () => $.ajax({
  url: 'api/products'
});

export const getSingleProduct = (id) =>
  $.ajax({
    url: `api/products/${id}`,
  });

export const postCartitem = (id) =>
  $.ajax({
    url: "/api/cartitems",
    method: "POST",
    data: { id },
  });

export const deleteCartitem = (id) =>
  $.ajax({
    url: "/api/cartitems",
    method: "DELETE",
    data: { id },
  });
