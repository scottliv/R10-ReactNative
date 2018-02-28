import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";
import { formatSessionData } from "../../helpers";

// import PropTypes from 'prop-types'
import List from "../../components/List";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSchedule());
  }
  render() {
    return (
      <List
        data={this.props.schedule}
        loading={this.props.loading}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = state => ({
  schedule: state.schedule.schedule,
  error: state.schedule.error,
  loading: state.schedule.loading
});

export default connect(mapStateToProps)(ScheduleContainer);
