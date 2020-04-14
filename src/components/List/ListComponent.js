

export const list = (obj, type) => (
    <ul>
        {Object.keys(obj).map(e => <ListItem key={e} name={obj[e][type]}/>)}
    </ul>);
