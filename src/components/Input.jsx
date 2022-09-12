import Form from 'react-bootstrap/Form';

const Input = (props) => {
    return (
        <div>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

export default Input;


