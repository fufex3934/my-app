export function ProductCard() {
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
  const style = {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
  };
  return (
    <article style={style}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
        <li>{product.specification[3]}</li>
      </ul>
      <button>Buy (From {product.price})</button>
    </article>
  );
}
