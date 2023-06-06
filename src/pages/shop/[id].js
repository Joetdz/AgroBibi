function Product({ id }) {
  return <div>{id}</div>;
}

export function getServerSideProps(context) {
  const id = context.params;

  return {
    props: id,
  };
}
export default Product;
