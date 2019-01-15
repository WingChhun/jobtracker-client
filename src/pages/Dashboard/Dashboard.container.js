import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DashboardView from "./Dashboard.view";

const mapStateToProps = state => ({})

const mapDispatchToProps = (ownProps, dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
