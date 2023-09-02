import React, {Component} from "react";
import './Hello.css';

function Hello(props) {
    return (
        <div>
            <div className="tc">
                <h1 className='f1 ttc bg-orange bb justify-around'>First react component</h1>
                <p className="f2">{props.greetings}This is your first React component</p>
            </div>
            <div className="items-center-ns">
                <p>This is what we learned:-</p>
                <li>Install 'create-react-app' component</li>
                <li>Create first React component</li>
                <li>How to use props</li>
                <li>Using list component</li>
                <li>Using tachyons</li>
                <li>Navigation between component</li>
            </div>
        </div>
    );
}

export default Hello;
