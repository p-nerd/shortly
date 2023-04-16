import { useAppDispatch } from "@app/hooks";
import TitleCard from "@components/common/Cards/TitleCard";
import InputText from "@components/common/Input/InputText";
import TextAreaInput from "@components/common/Input/TextAreaInput";
import ToggleInput from "@components/common/Input/ToggleInput";
import { showNotification } from "@features/layouts/headerSlice";
import useSetPageTitle from "@hooks/useSetPageTitle";

function InternalPage() {
    useSetPageTitle("Settings");

    const dispatch = useAppDispatch();

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({ message: "Profile Updated", status: 1 }));
    };

    const updateFormValue = ({ updateType, value }: any) => {
        console.log(updateType);
    };

    return (
        <>
            <TitleCard title="Profile Settings" topMargin="mt-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputText
                        labelTitle="Name"
                        defaultValue="Alex"
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        labelTitle="Email Id"
                        defaultValue="alex@dashwind.com"
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        labelTitle="Title"
                        defaultValue="UI/UX Designer"
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        labelTitle="Place"
                        defaultValue="California"
                        updateFormValue={updateFormValue}
                    />
                    <TextAreaInput
                        labelTitle="About"
                        defaultValue="Doing what I love, part time traveler"
                        updateFormValue={updateFormValue}
                    />
                </div>
                <div className="divider"></div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputText
                        labelTitle="Language"
                        defaultValue="English"
                        updateFormValue={updateFormValue}
                    />
                    <InputText
                        labelTitle="Timezone"
                        defaultValue="IST"
                        updateFormValue={updateFormValue}
                    />
                    <ToggleInput
                        updateType="syncData"
                        labelTitle="Sync Data"
                        defaultValue={true}
                        updateFormValue={updateFormValue}
                    />
                </div>

                <div className="mt-16">
                    <button
                        className="btn-primary btn float-right"
                        onClick={() => updateProfile()}
                    >
                        Update
                    </button>
                </div>
            </TitleCard>
        </>
    );
}

export default InternalPage;
