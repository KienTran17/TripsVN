import React, { Component } from 'react';

export default class ScrollUp extends Component {
    render() {
        return (
            <div className="toolbar-scrollup">
            <div className="item-wrap layout">
              <div className="item layout-button">
                <i className="ion-navicon-round" />
              </div>
            </div>
            <div className="item-wrap scrollup">
              <a href="#" className="item">
                <i className="ion-chevron-up" />
              </a>
            </div>
          </div>
        );
    }
}
