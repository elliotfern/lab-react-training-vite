function IdCard(props) {
  console.log(props);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="card">
      <div className="img">
        <img src={props.data.picture} widh="150px"></img>
      </div>
      <div className="text">
        <p><span>Firt name: </span>{props.data.firstName}</p>
        <p><span>Last name: </span>{props.data.lastName}</p>
        <p><span>Gender: </span>{props.data.gender}</p>
        <p><span>Height: </span>{props.data.height}</p>
        <p><span>Birth: </span>{formatDate(props.data.birth)}</p>
        </div>
    </div>
  );
}

export default IdCard;
