import TitleCard from "@components/common/Cards/TitleCard";
import AccessHistory from "@components/pages/profile/AccessHistory";
import Preferences from "@components/pages/profile/Preferences/Preferences";
import SecurityAuthentication from "@components/pages/profile/SecurityAuthentication";
import useSetPageTitle from "@hooks/useSetPageTitle";

const Profile = () => {
    useSetPageTitle("Profile Settings");

    return (
        <div>
            <TitleCard title="Preferences" topMargin="mt-0">
                <Preferences />
            </TitleCard>
            <TitleCard title="Security Authentication">
                <SecurityAuthentication />
            </TitleCard>
            <TitleCard title="Access History">
                <AccessHistory />
            </TitleCard>
        </div>
    );
};

export default Profile;
