import React , {Component} from "react";

const cDate = {
    fontSize:"16px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    width:"52px",
    height:"51px",
    margin:"8px",
    textAlign:"center",
    lineHeight:"3em",

}
class CalendarDay extends Component {
    render() {
        const {
            day,
            day: {
                date,
                isCurrentMonth,
                isToday,
                number
            }
        } = this.props;
        function hoverOn(e) {
            e.target.style.color = '#FDD000';
            if(isToday){
                e.target.style.color = '#3D3D3D';
            }

        }
        function hoverOff(e) {
            e.target.style.color = '#DFDFDF';
            if(!isCurrentMonth){
                e.target.style.color = '#3D3D3D';
            }
            if(isToday){
                e.target.style.color = '#3D3D3D';
            }
        }

        return (
            <div  style={cDate}>
                <div style = { isToday ? {backgroundColor:'#FDD000'}:{backgroundColor:'#272829'}}>
                    <span onMouseOver={hoverOn} onMouseLeave={hoverOff}
                          key={date.toString()}
                          style = { isCurrentMonth ? { color:'white',   cursor:"pointer"} : {color:'rgba(223, 223, 223, 0.4)', cursor:"pointer"}}
                          onClick={()=>{this.props.select(day)}}>
                  {number}</span>
                </div>
            </div>
        );
    }
}

export default CalendarDay;