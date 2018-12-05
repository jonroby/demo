import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGithubRepo } from "../redux/actions/creators";

class Repo extends Component {
  render() {
    return (
        <div>
        </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  fetchGithubRepo
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
