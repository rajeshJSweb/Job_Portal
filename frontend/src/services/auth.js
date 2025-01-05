export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const [, payload] = token.split(".");
    if (!payload) return false;

    const { exp } = JSON.parse(atob(payload));
    const currentTime = Date.now() / 1000; 

    return exp > currentTime;
  } catch (error) {
    console.error("Invalid token structure", error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const getToken = () => {
  return localStorage.getItem("token");
};
