const Card = (props) => {
  return (
    <div className="flex flex-col justify-center  my-5 border rounded-md p-5 w-4/5 md:w-2/3">
      {props.children}
    </div>
  );
};

export default Card;
