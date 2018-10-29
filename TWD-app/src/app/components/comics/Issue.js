import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleIssue, handleErrors } from '../../action-creators/actions';
import './Issue.css';
import Loader from '../../partials/Loader';
import PropTypes from 'prop-types';

class Issue extends Component {

    componentDidMount() {
        const { name, id } = this.props.match.params;
        this.props.fetchSingleIssue(name, id);
    }

    render() {
        const { issue, error } = this.props;
        return (
            <div className="wrapper">
                {
                    error ? error
                        : !issue ? <Loader />
                            : <div>
                                <h1> {issue.title} </h1>
                                <div>
                                    <img src={issue.photo} alt={issue.title} />
                                </div>
                                <div>
                                    <span className="bold-title">Release date:   </span>
                                    <span>{issue.release_date}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Creator, Writer:   </span>
                                    <span>{issue.creator_writer}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Penciler, Inker:   </span>
                                    <span>{issue.penciler_inker}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Volume:   </span>
                                    <span>{issue.volume}</span>
                                </div>
                                <div>
                                    <span className="bold-title"> Part:   </span>
                                    <span>{issue.part}</span>
                                </div>
                            </div>
                }
            </div>
        );
    }
}
Issue.propTypes = {
    fetchSingleIssue: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    issue: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        issue: state.issue,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleIssue, handleErrors })(Issue);