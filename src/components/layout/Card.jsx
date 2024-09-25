const Card = (props) => {
  const classes = `flex flex-col justify-center  my-5 border rounded-md p-5 ${
    props.className ? props.className : "w-4/5 md:w-2/3"
  }`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
