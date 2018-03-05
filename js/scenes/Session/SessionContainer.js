import React, { Component } from "react";
import endpoints from "../../config/endpoints";
import realm from "../../config/model";
import { titleBarStyle } from "../../config/style";

// import PropTypes from 'prop-types'
import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    realm.addListener("change", this._forceUpdate);
  }

  componentWillUnmount() {
    realm.removeListener("change", this._forceUpdate);
  }

  _forceUpdate = () => this.forceUpdate();

  static route = {
    navigationBar: {
      title: "Session",
      titleStyle: titleBarStyle
    }
  };

  getSpeaker = () => {
    fetch(`${endpoints.singleSpeaker}"${this.props.route.params.item.speaker}"`)
      .then(r => r.json())
      .then(data =>
        Object.keys(data).map(key => this.setState({ data: data[key] }))
      )
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.getSpeaker();
  }

  render() {
    return (
      <Session item={this.props.route.params.item} speaker={this.state.data} />
    );
  }
}

export default SessionContainer;
