import "./Input.css";
const Input = ({ style, ...props }) => {
  return (
    <div className="input1">
      <span className={props.textClass}>{props.text}</span>
      <label>
        {props.labelText}
        <input style={style} type="text" placeholder={props.placeholder} />
      </label>
      <span>{props.underText}</span>
    </div>
  );
};

export default Input;
