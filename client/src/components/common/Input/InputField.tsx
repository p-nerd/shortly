type Props = {
    value: any;
    setValue: (_: any) => void;
    label?: string;
    placeholder?: string;
    type?: string;
    containerStyle?: string;
    labelStyle?: string;
    isRequired?: boolean;
};

const InputField = ({
    value,
    setValue,
    type,
    label,
    placeholder,
    containerStyle,
    labelStyle,
    isRequired,
}: Props) => {
    return (
        <div className={`${containerStyle} form-control w-full `}>
            {label && (
                <label className="label">
                    <span
                        className={`label-text text-base text-base-content ${labelStyle}`}
                    >
                        {label}
                    </span>
                </label>
            )}
            <input
                required={isRequired}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
                className="input-bordered  input w-full "
            />
        </div>
    );
};

InputField.defaultProps = {
    placeholder: "",
    type: "text",
    containerStyle: "",
    labelStyle: "",
    isRequired: false,
};

export default InputField;
