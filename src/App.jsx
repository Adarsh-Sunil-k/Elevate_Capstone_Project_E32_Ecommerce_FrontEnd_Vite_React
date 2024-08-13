import Navbar from "./components/Navbar.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Footer from "./components/Footer.jsx";
function App() {

  return (
    <>
    <div>
      <nav>
        <Navbar/>
      </nav>
    <div className="flex justify-center">
      <h1 className="red text-4xl flex justify-center">Welcome To The Ecommerce Web Site</h1>
    </div>
    <div className="flex justify-center"><h2>This Is Your Home Page</h2></div>
    </div>
    <ProductsPage/>
    <Footer/>

    </>
  )
}

export default App;
