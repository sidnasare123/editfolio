import { useEffect, useState } from "react";
import axios from "axios";

import Wrapper from "./wrapper";
import Auth from "./auth";
import Loader from "./Loader";
import { JWT_TOKEN_KEY } from "./constants";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem(JWT_TOKEN_KEY);
        if (token) {
          await axios.post("/api/auth", null, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setIsLogin(true);
        }
      } catch (_) {
        localStorage.removeItem(JWT_TOKEN_KEY);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <header>
        <h1>Editfolio</h1>
        <h4>Edit your portfolio now. No Coding required.</h4>
      </header>
      {loading ? (
        <Loader />
      ) : isLogin ? (
        <Auth setIsLogin={setIsLogin} />
      ) : (
        <Wrapper />
      )}
    </>
  );
}
