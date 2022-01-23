// create user from front end
export const postUser = (user) =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });

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
