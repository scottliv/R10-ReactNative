import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFaves } from "../../redux/modules/faves";
// import PropTypes from 'prop-types'
import List from "../../components/List";
import { fetchSchedule } from "../../redux/modules/schedule";
import { formatSessionData } from "../../helpers";
import style from "./style";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(fetchFaves());
    this.props.dispatch(fetchSchedule());
  }

  favouriteFilter = schedule => {
    const keys = Object.keys(this.props.faves).map(key => {
      return this.props.faves[key].id;
    });
    return this.props.schedule.reduce((acc, item) => {
      if (keys.includes(item.session_id)) {
        item.isFave = true;
        acc.push(item);
      } else {
        item.isFave = false;
      }
      return acc;
    }, []);
  };

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  render() {
    return (
      <List
        data={formatSessionData(this.favouriteFilter(this.props.schedule))}
        loading={this.props.loading}
        currentUID={this.props.currentUID}
        error={this.props.error}
        style={style}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.about.loading,
  schedule: state.schedule.schedule,
  faves: state.faves.faves,
  currentUID: state.navigation.currentNavigatorUID,
  error: state.about.error
});

export default connect(mapStateToProps)(FavesContainer);
