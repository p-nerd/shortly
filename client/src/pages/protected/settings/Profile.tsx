import TitleCard from "@components/common/Cards/TitleCard";
import AccessHistory from "@components/pages/Profile/AccessHistory";
import Preferences from "@components/pages/Profile/Preferences";
import SecurityAuthentication from "@components/pages/Profile/SecurityAuthentication";
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
