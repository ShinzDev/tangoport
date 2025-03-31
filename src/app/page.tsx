// components import
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";

// styling import
import "./globals.css";

export default function Home() {
  return (
    <main  className=" flag  m-1.5">
      <div > 
        {/* <Navbar /> */}
        <Header/>
        {/* <Body/> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
