import './styles.css';

const Input = ({value, onChange}) => {
    return (
        <input type="text" name="user" value={value} onChange={onChange} placeholder="@user"></input>
    )
}

export {Input};