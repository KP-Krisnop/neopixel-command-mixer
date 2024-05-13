export default function ColorPicker(props) {
  return (
    <div className="color-box" style={{ backgroundColor: props.color }}>
      <h1>{props.color}</h1>
      <input type="color" value={props.color} onChange={props.onChange} />
    </div>
  );
}
