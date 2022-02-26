// create user from front end
export const postUser = (user) =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });

export const showUser = (id) =>
  $.ajax({
    url: `api/users/${id}`,
    method: "GET",
  })

// login user
export const postSession = (user) =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user },
  });

// logout user
export const deleteSession = () =>
  $.ajax({
    url: "api/session",
    method: "DELETE",
  });
