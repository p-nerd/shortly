type Props = {
    label: string;
    value: any;
    setValue: (_: any) => void;
    placeholder?: string;
    type?: string;
    containerStyle?: string;
    labelStyle?: string;
};

const InputField = ({
    label,
    value,
    type,
    placeholder,
    setValue,
    containerStyle,
    labelStyle,
}: Props) => {
    return (
        <div className={`${containerStyle} form-control w-full `}>
            <label className="label">
                <span className={`label-text text-lg text-base-content ${labelStyle}`}>
                    {label}
                </span>
            </label>
            <input
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
};

export default InputField;
