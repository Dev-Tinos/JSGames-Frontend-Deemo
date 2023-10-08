function ExplanationBox({description}){
    return(
        <div style={{
            width: "1006px",
            height: "217px",
            backgroundColor: "#FAFAFA",
            borderRadius: "15px",
            padding: "30px 0 0 30px"
        }}>
            <p style={{
                fontSize: "24px"
            }}>{description}</p>
        </div>
    )
}

export default ExplanationBox;