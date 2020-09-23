import React from "react";
import Calendar from "../components/Calendar";
import Form from "../components/Form";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {OPEN_MODAL, CLOSE_MODAL } from "../actions";

const calendar = {
    color: "white",
    backgroundColor: "#272829",
    width: "40%",
    height: "100%",
    zIndex: "120",
    position: "absolute",
    top: "0",
    right: "0",
}
const hText = {
    color:"#FDD000",
    fontSize:"32px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    textTransform:"uppercase",
    width: "40%",
    position: "absolute",
    top: "29%",
    left:"40%",
}
const pText = {
    color:"#DFDFDF",
    fontSize:"30px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "300",
    textAlign:"right",
    position: "absolute",
    top: "46%",
    left:"30%"

}

const  HomePage = ({modal, openModal, closeModal }) => {

    function head(){
        return(
            <Helmet>
                <title>We Are Devs - Web Studio</title>
                <meta property="og:title" content="We Are Devs - Web Studio"/>
            </Helmet>
        );
    }
    return (
        <div style={{position:"relative", zIndex:"100"}}>
            {head}
            <div><img style={{width: "100%", height: "auto"}} src="/assets/mainImg.jpeg"/>
            <div>
                <h2 style={hText}> Choose the day <br/> for the meeting </h2>
                <p style={pText}> We encourage you to book your <br/> appointment online. <br/> This will save you time. </p>
            </div>
                <div style={calendar}>
                    <div style={{width:"460px", height:"490px", margin:"20% auto"}}>
                        <Calendar select={(date)=>{openModal(date)}}/>
                    </div>
                </div>
                {modal.opened === true ? <Form props={modal.props} close={()=>{closeModal()}}/>: false}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        modal: state.modal,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (date)=>
            dispatch({
                type: OPEN_MODAL,
                payload:{
                    props: {date}
                }
            }),
        closeModal: ()=>
            dispatch({
                type: CLOSE_MODAL
            })
    };
};

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(HomePage),
};
