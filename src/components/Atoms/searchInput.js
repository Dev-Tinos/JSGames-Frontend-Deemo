function Input ({type, value,placeholder}) {
    return(
        <input type={type} value={value} placeholder={placeholder} style={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "10px",
            fontSize: "24px",
            height: "70px",
            width: "540px",
        }}/>
    )
}

export default Input