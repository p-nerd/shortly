import useUpdateMe from "@hooks/useUpdateMe";

const MakePrimaryEmail = ({
    primaryEmail,
    currentEmail,
}: {
    primaryEmail: string;
    currentEmail: string;
}) => {
    const { updateMe, isLoading } = useUpdateMe();

    const handleChangePrimaryEmail = () => {
        updateMe({ email: currentEmail });
    };

    return (
        <input
            disabled={isLoading}
            checked={primaryEmail === currentEmail}
            onChange={handleChangePrimaryEmail}
            type="checkbox"
            className="checkbox-primary checkbox"
        />
    );
};

export default MakePrimaryEmail;
