export const getCartitems = (user_id) =>
  $.ajax({
    url: `api/users/${user_id}/cartitems`,
  });
