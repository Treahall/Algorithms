import { React, Component } from 'react';

export default class MainBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            information: 'main'
        }
    }

    render() {
        return(
            <div>
                <p>
                    Hello from MainBody
                </p>
            </div>
        )
    }
}