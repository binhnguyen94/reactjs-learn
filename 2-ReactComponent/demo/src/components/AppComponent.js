import { Component } from "react";

class AppComponent extends Component {
    render() {
        return (
            <div>
                Class Component total: {this.props.num1 + this.props.num2}
            </div>
        )
    }
}

export default AppComponent