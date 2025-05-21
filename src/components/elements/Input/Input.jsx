function Input({ placeholder, type, name, id, onChange, value, ref}) {
  return (
    <input type={type} ref={ref} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} className="rounded-3" style={{paddingLeft: "4px", paddingTop: "2px", paddingBottom: "2px"}} />
  );
}

export default Input;
