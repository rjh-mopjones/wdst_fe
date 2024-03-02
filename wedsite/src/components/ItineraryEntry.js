import React from 'react';

class ItineraryEntry extends React.Component {
    render() {
        return (
        <div className={"itinerary-entry"}>
            <div className={"itinerary-entry-child white-border-right"}>
                    <h2 className={"itinerary-entry-time"}>{this.props.time}</h2>
            </div>
            <div className={"itinerary-entry-child white-border-left"}>
                    <h2 className={"itinerary-entry-entry"}>{this.props.entry}</h2>
            </div>
        </div>
    );
    }
}

export default ItineraryEntry;