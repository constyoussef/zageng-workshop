export const Counter = (props) => {
  console.log(props);
  return (
    <h3>
      {props.name ? props.name : "Counter"}: {props.num}
    </h3>
  );
};
