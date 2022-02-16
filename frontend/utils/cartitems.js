export const getCartitems = (user_id) =>
  $.ajax({
    url: `api/users/${user_id}/cartitems`,
  });

export const postCartitem = (id, qty = 1) =>
  $.ajax({
    url: "/api/cartitems",
    method: "POST",
    data: { id, qty },
  });

export const deleteCartitem = (id) =>
  $.ajax({
    url: "/api/cartitems",
    method: "DELETE",
    data: { id },
  });

export const updateCartitem = (id, qty) =>
  $.ajax({
    url: `/api/cartitems/${id}`,
    method: "PATCH",
    data: { id, qty },
  });