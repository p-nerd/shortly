type Props = {
    message: string;
    styleClass?: string;
};

const ErrorText = ({ styleClass, message }: Props) => {
    if (typeof message !== "string") message = "";
    return <p className={`text-error ${styleClass}`}>{message}</p>;
};

ErrorText.defaultProps = {
    styleClass: "",
};

export default ErrorText;
