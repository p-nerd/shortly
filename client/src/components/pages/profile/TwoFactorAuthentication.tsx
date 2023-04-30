import InputField from "@components/common/Input/InputField";
import SelectOption from "@components/common/Input/SelectOption";
import { useState } from "react";

const TwoFactorAuthentication = () => {
    const [countryCode, setCountryCode] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <div className="flex w-1/2 flex-col gap-2">
            <h3 className="text-lg font-semibold">2-Factor authentication</h3>
            <SelectOption
                options={[
                    { name: "Bangladesh", value: "+088" },
                    { name: "India", value: "+077" },
                ]}
                value={countryCode}
                setValue={setCountryCode}
                placeholder="Select country code"
                label="Country Code"
                description="Select Country Code"
            />
            <InputField
                label="Mobile number"
                value={mobileNumber}
                setValue={setMobileNumber}
            />
            <button className="btn-wide btn">Send verification code</button>
        </div>
    );
};

export default TwoFactorAuthentication;
