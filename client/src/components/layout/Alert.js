// This creates a component called Alert that we can use in the main app.js for rendering alerts.
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  // Do this instead of passing in props to Alert and having to do this.props.alerts
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  //take the alert prop from the main (state)"store" and map it as a prop for the Alert component.
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert); //export the Alert component with the "store" data
