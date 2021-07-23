import { Fragment } from 'react';
import './index.css';
import BugStats from './components/bug-stats';
import BugEdit from './components/bug-edit';
import BugSort from './components/bug-sort';
import BugList from './components/bug-list';

const BugTracker = ({bugs, addNew, toggle, remove, removeClosed}) => (
    <Fragment>
        <h3>Bugs</h3>
        <hr/>
        <BugStats bugs={bugs} />
        <BugSort/>
        <BugEdit addNew={addNew} />
        <BugList {...{bugs, toggle, remove, removeClosed}} />
    </Fragment>
);
export default BugTracker;