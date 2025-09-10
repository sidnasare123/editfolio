import { useState } from "react";
import Wrapper from "./wrapper";
import Auth from "./auth";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <header>
        <h1>Editfolio</h1>
        <h4>Edit your portfolio now. No Coding required.</h4>
      </header>
      {!isLogin ? <Auth setIsLogin={setIsLogin} /> : <Wrapper />}
    </>
  );
}
