import DisplayName from "./DisplayName";
import EmailAddresses from "./EmailAddresses";

const Preferences = () => {
    return (
        <div>
            <div className="space-y-14">
                <DisplayName />
                <EmailAddresses />
            </div>
        </div>
    );
};

export default Preferences;
