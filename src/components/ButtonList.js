import Button from "./Button";

//use map function and make scroll right
//const list = ["All", "Live", "cricket"];
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Scoccer" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Valentines" />
    </div>
  );
};
export default ButtonList;
