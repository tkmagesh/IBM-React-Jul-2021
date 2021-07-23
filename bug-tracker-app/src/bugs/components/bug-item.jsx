const BugItem = ({bug, toggle, remove}) => (
    <li >
        <span
            className={"bugname " + (bug.isClosed ? 'closed' : '')}
            onClick={() => toggle(bug)}
        >{bug.name}</span>
        <div>Project Id : [project id]</div>
        <div className="datetime">{bug.createdAt}</div>
        <input type="button" value="Remove" onClick={() => remove(bug)} />
    </li>
);
export default BugItem;