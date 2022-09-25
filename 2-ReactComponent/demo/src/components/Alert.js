export default function Alert(props) {
    return (
        <div class="alert alert-warning" role="alert">
            {props.text}
        </div>
    )
}