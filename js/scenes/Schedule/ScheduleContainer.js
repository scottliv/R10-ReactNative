import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../helpers";
import Gradient from "../../components/Gradient";
import style from "./style";

// import PropTypes from 'prop-types'
import List from "../../components/List";
class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      renderBackground: () => <Gradient />
    }
  };
  favouriteFilter = schedule => {
    const keys = Object.keys(this.props.faves).map(key => {
      return this.props.faves[key].id;
    });
    return this.props.schedule.reduce((acc, item) => {
      if (keys.includes(item.session_id)) {
        item.isFave = true;
      } else {
        item.isFave = false;
      }
      acc.push(item);
      return acc;
    }, []);
  };

  componentDidMount() {
    this.props.dispatch(fetchFaves());
    this.props.dispatch(fetchSchedule());
  }
  render() {
    return (
      <List
        data={formatSessionData(this.favouriteFilter(this.props.schedule))}
        loading={this.props.loading}
        error={this.props.error}
        currentUID={this.props.currentUID}
        style={style}
      />
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves,
  schedule: state.schedule.schedule,
  error: state.schedule.error,
  loading: state.schedule.loading,
  currentUID: state.navigation.currentNavigatorUID
});

export default connect(mapStateToProps)(ScheduleContainer);
