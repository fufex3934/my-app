export function ProductCard(props) {
  
  const style = {
    border: "1px solid white",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
  };
  return (
    <article style={style}>
      <h2>{props.product.title}</h2>
      <img
        src={props.product.imageSrc}
        alt={props.product.title}
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>{props.product.specification[0]}</li>
        <li>{props.product.specification[1]}</li>
        <li>{props.product.specification[2]}</li>
        <li>{props.product.specification[3]}</li>
      </ul>
      <button>Buy (From {props.product.price})</button>
    </article>
  );
}
