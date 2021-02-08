import Input from "../Components/Input";
// placeholder,labelText,text,underText
const Inputs = () => {
  return (
    <div>
      <h1>Inputs</h1>
      <div className="input1">
        <Input
          placeholder="Placeholder"
          labelText="test1"
          text="text"
          textClass="hover"
          underText="underText"
          style={{ borderColor: "red" }}
        />
      </div>
      <div className="input2"></div>
    </div>
  );
};

export default Inputs;
