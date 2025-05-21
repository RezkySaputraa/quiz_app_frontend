
function Label({children, htmlFor}) {
    return (
        <label htmlFor={htmlFor} className="form-label m-0">
            {children}
        </label>
    )
}

export default Label