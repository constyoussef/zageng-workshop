export function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img src={props.auther.avatarUrl} alt={props.auther.name} />
        <h1>{props.auther.name}</h1>
      </div>
      <p>{props.auther.description}</p>
    </div>
  );
}
