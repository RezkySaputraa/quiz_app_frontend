import Label from "./Label";
import Input from "./Input";

function InputForm({placeholder, label, type, htmlFor, name, id, onChange, value, ref}) {
    return (
     <div className="d-flex flex-column gap-2">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input name={name} id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} ref={ref}></Input>
     </div>   
    )
}

export default InputForm