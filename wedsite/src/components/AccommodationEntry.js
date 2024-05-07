import React from "react";
import {Link} from "react-router-dom";

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}

class AccommodationEntry extends React.Component {


    render() {
        if (isMob()){
            return (
                <div className={"accommodation-entry-outer-mob"}>
                    <Link to={this.props.link} target="_blank" className={"link"}>
                        <div className={"accommodation-entry-mob"}>
                            <h1 className={"accommodation-entry-entry-mob"}>{this.props.entry}</h1>
                            <img className={"acommo-photo-mob"} src={require('../static/accommodation/' +
                                this.props.entry.toString().toLowerCase().replaceAll(" ", "-") +
                                ".jpeg")}/>
                            <p className={"accommodation-entry-notes-mob"}>{this.props.notes}</p>
                        </div>
                    </Link>
                </div>
            )

        }
        return (
            <div className={"accommodation-entry-outer"}>
                <Link to={this.props.link} target="_blank" className={"link"}>
                    <div className={"accommodation-entry"}>
                        <div className={"accommodation-entry-entry-div"}>
                            <h1 className={"accommodation-entry-entry"}>{this.props.entry}</h1>
                        </div>
                        <div className={"accommodation-entry-photo-and-text"}>
                            <img className={"acommo-photo"} src={require('../static/accommodation/' +
                                this.props.entry.toString().toLowerCase().replaceAll(" ", "-") +
                                ".jpeg")}/>
                            <p className={"accommodation-entry-notes"}>{this.props.notes}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default AccommodationEntry;
