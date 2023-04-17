import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

type TOption = {
    name: string;
    value: string;
};

type Props = {
    options: TOption[];
    value: string;
    setValue: (_: string) => void;
    label?: string;
    description?: string;
    placeholder?: string;
    containerStyle?: string;
    labelStyle?: string;
};

const SelectOption = ({
    value,
    setValue,
    label,
    placeholder,
    options,
    containerStyle,
    labelStyle,
    description,
}: Props) => {
    return (
        <div className={`inline-block ${containerStyle}`}>
            <label className={`label  ${labelStyle}`}>
                <div className="label-text">
                    {label}
                    {description && (
                        <div className="tooltip tooltip-right" data-tip={description}>
                            <InformationCircleIcon className="h-4 w-4" />
                        </div>
                    )}
                </div>
            </label>

            <select
                className="select-bordered select w-full"
                value={value}
                onChange={e => setValue(e.target.value)}
            >
                <option>{placeholder}</option>
                {options.map((o, k) => {
                    return (
                        <option value={o.value || o.name} key={k}>
                            {o.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectOption;
