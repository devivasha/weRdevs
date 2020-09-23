import React from 'react';

const wrapper = {
    width:'510px',
    height:'140px',
    backgroundColor: "#FBFBFB",
    position:"absolute",
    top:"40%",
    left:"10%",
    zIndex:"500"
}
const input = {
    border:"2px solid #FDD000",
    marginLeft:"25px",
    marginRight:"20px",
    color:'rgba(61, 61, 61, 0.6)',
    fontSize:"16px",
    fontWeight:'500',
    fontFamily:"Rubik",
}

const cross = {
    backgroundColor: "#FDD000",
    width:"28px",
    height: "28px",
    textAlign:"center",
    position:"absolute",
    top:"0",
    right:"0",
    cursor:"pointer"
}
const span = {
    position:"absolute",
    top:"-24px",
    right:"217px",
    color:"rgba(61, 61, 61, 0.4)",

}
const span2 = {
    position:"absolute",
    top:"-24px",
    right:"436px",
    color:"rgba(61, 61, 61, 0.4)",
}

const Form = ({close, props})=> {
        return(
            <div style={wrapper}>
                <div style={{marginTop:"50px", position:"relative"}}>
                    <form >
                        <label>
                            <span style={span2}> Month </span>
                            <input style={input} type="text" name="month" value={"  "+props.date.date} />
                        </label>
                        <label>
                            <span style={span}> Day </span>
                            <input style={input} type="text" name="day"  value={"  "+props.date.number + "th " + props.date.name  } />
                        </label>
                    </form>
                </div>
                <div style={cross} onClick={()=>{close()}}>X</div>
            </div>
        );
}
export default Form;

