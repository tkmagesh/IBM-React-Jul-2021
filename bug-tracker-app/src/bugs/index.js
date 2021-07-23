import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import bugActionCreators from './actions';

import './index.css';
import BugStats from './components/bug-stats';
import BugEdit from './components/bug-edit';
import BugSort from './components/bug-sort';
import BugList from './components/bug-list';

const BugTracker = ({bugs, addNew, toggle, remove, load, removeClosed, projects, sort}) => {
    useEffect(() => {
        load();
    }, [load])
    return (
        <Fragment>
            <h3>Bugs</h3>
            <hr/>
            <BugStats bugs={bugs} />
            <BugSort sort={sort}/>
            <BugEdit addNew={addNew} projects={projects} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </Fragment>
    );
}

function mapStateToProps(storeState){
    //extract the data from the storeState to be passed as props to the component
    const bugs = storeState.bugsState;
    const projects = storeState.projectsState;
    return { bugs : bugs, projects : projects };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);