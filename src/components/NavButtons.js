import React from 'react';

export default class NavButtons extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <a href="https://tsangela.github.io/" target="_blank">
                    <i className="fas fa-user-astronaut fa-3x nav-btn"/>
                </a>
                <a href="https://github.com/tsangela/" target="_blank">
                    <i className="fab fa-github fa-3x nav-btn"/>
                </a>
                <a href="https://github.com/tsangela/connect-four" target="_blank">
                    <i className="fas fa-code-branch fa-3x nav-btn"/>
                </a>
                <a href="mailto:?subject=Play%20Connect%20Four%21&body=Check%20out%20this%20awesome%20online%20connect%20four%20game%3A%20https%3A//tsangela.github.io/connect-four/">
                    <i className="fas fa-share-alt fa-3x nav-btn"/>
                </a>
            </div>
        );
    }
}