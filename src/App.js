import { ProductCard } from './components/ProductCard';
import { Children } from './components/Children';


function App() {
  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6 core",
      "A17 Pro chip with 7 core",
      "A17 Pro chip with 8 core",
      "A17 Pro chip with 9 core",
    ],
    price: 999,
  };
  return (
    <div className="App">
      <ProductCard product={product}/>
        <Children/>
    </div>
  );
}

export default App;
