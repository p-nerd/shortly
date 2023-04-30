import ChangePassword from "./ChangePassword";
import TwoFactorAuthentication from "./TwoFactorAuthentication";

const SecurityAuthentication = () => {
    return (
        <div>
            <div className="space-y-14">
                <ChangePassword />
                <TwoFactorAuthentication />
            </div>
        </div>
    );
};

export default SecurityAuthentication;
