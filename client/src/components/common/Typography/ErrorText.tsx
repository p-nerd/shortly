type Props = {
    message: string;
    styleClass?: string;
};

const ErrorText = ({ styleClass, message }: Props) => {
    return <p className={`text-error ${styleClass}`}>{message}</p>;
};

ErrorText.defaultProps = {
    styleClass: "",
};

export default ErrorText;
