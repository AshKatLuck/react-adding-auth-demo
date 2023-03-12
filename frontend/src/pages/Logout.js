import { redirect } from "react-router-dom";

export function action() {
  console.log("Inside logout action");
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}
