import Button from 'react-bootstrap/Button';

const Boton = (props) => {
    return (
        <Button variant={props.variant}>{props.text}</Button>
    );
}

export default Boton;
