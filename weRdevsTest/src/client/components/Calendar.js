import React, {Component} from "react";
import moment from 'moment';
import CalendarDay from '../components/CalendarDay';


const day = {
    color:"#FFFFFF",
    fontSize:"20px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    marginRight:"55px",
    marginTop:"20px",

}
 const cMonth = {
     color:"#DFDFDF",
     opacity:"1",
     fontSize:"23px",
     fontFamily: 'Rubik, sans-serif',
     fontWeight: "500",
     textTransform:"uppercase",
 }


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: moment(),
            selected: moment().startOf('day'),
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }


    previous() {
        const {
            month,
        } = this.state;

        this.setState({
            month: month.subtract(1, 'month'),
        });
    }

    next() {
        const {
            month,
        } = this.state;

        this.setState({
            month: month.add(1,'month'),
        });
    }

    select(day) {
        this.setState({
            selected: day.date,
            month: day.date.clone(),
        });
    }

    renderWeeks() {
        let weeks = [];
        let done = false;
        let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
        let count = 0;
        let monthIndex = date.month();

        const {
            selected,
            month,
        } = this.state;

        while (!done) {
            weeks.push(
                <Week key={date}
                      date={date.clone()}
                      month={month}
                      select={(date)=>this.props.select(date)}
                      selected={selected} />
            );

            date.add(1, "w");

            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    };

    renderMonthLabel() {
        const {
            month,
        } = this.state;

        return <span style={cMonth}>{month.format("MMMM YYYY")}</span>;
    }

    render() {
        return (
            <section>
                <div style={{ marginTop:"40px",paddingBottom:"15px", borderBottom:"1px solid grey"}}>
                    <header>
                        <div className="month-display row">
                            <div onClick={this.previous}><img style={{width: "100%", height: "auto"}} src="/assets/arrowLeft.png"/></div>
                            <div style={{margin:"0 auto"}}>
                                {this.renderMonthLabel()}
                            </div>
                            <div onClick={this.next}><img style={{width: "100%", height: "auto"}} src="/assets/arrowRight.png"/></div>
                        </div>
                    </header>
                </div>
                <div>
                    {this.renderWeeks()}
                </div>
                <div style={{borderTop:"1px solid grey", borderBottom:"1px solid grey"}}>
                    <div style ={{margin:"10px"}}>
                        <span style={day}>S</span>
                        <span style={day}>M</span>
                        <span style={day}>T</span>
                        <span style={day}>W</span>
                        <span style={day}>T</span>
                        <span style={day}>F</span>
                        <span style={day}>S</span>
                    </div>
                </div>

            </section>
        );
    }
}


class Week extends Component {
    render() {
        let days = [];
        let {
            date,
        } = this.props;

        const {
            month,
            selected,
            select,
        } = this.props;

        for (let i = 0; i < 7; i++) {
            let day = {
                name: date.format("dddd"),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date.format('MMMM')
            };
            days.push(
                <CalendarDay day={day}
                     select={(date)=>{this.props.select(date)}}
                />
            );

            date = date.clone();
            date.add(1, "day");
        }

        return (
            <div className="row week" key={days[0]}>
                {days}
            </div>
        );
    }

}



export default Calendar
