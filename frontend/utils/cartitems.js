export const getCartitems = (user_id) =>
  $.ajax({
    url: `api/users/${user_id}/cartitems`,
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