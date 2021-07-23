import { useEffect, useState } from 'react';

const BugSort = ({sort}) => {
    const [sortAttr, setSortAttr] = useState('');
    const [byDesc, setByDesc] = useState(false);
    useEffect(() => {
        sort(sortAttr, byDesc);
    },[sortAttr, byDesc, sort])
    return (
        <section className="sort">
            <label htmlFor="">Order By :</label>
            <select onChange={ evt => setSortAttr(evt.target.value)}>
                <option value="">--- Select --- </option>
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
                <option value="projectId">Project</option>
            </select>
            <label htmlFor="">Descending ? :</label>
            <input type="checkbox"  onChange={ evt => setByDesc(evt.target.checked) } />
        </section>
    );
}
export default BugSort;