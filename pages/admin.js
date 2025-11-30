import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Admin(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  if (!user) return <div>Please <a href="/login">login first</a>.</div>;

  // Replace with your email
  if (user.email !== "your.email@example.com") return <div>Access Denied</div>;

  return <h1>Welcome Admin — secure access</h1>;
}
