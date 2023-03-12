import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const duration = getTokenDuration();
  if (duration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getToken();
}

export function checkAuthLoader() {
  const token = getToken();
  if (!token) {
    return redirect("/auth");
  } else {
    return null;
  }
}
