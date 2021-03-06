import { useState } from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState(0)
    return (
        <section className="edit">
            <label htmlFor="">Bug Name : </label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label htmlFor=""> Project : </label>
            <select onChange={evt => setSelectedProjectId(evt.target.value)}>
                { projects.map(project => (<option value={project.id} key={project.id}>{project.name}</option>))}
            </select>
            <input type="button" value="Add New" onClick={() => addNew(newBugName, selectedProjectId)} />
        </section>
    )
};
export default BugEdit;