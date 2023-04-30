import { selectOtherEmails } from "@features/auth/authSelector";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import useUpdateMe from "@hooks/useUpdateMe";

const DeleteEmail = ({ email }: { email: string }) => {
    const otherEmails = selectOtherEmails();
    const { updateMe, isLoading } = useUpdateMe();

    const handleDelete = () => {
        if (otherEmails && email) {
            updateMe({
                otherEmails: otherEmails.filter(item => item.email !== email),
            });
        }
    };

    return (
        <button onClick={handleDelete} disabled={isLoading}>
            <TrashIcon className="w-7" />
        </button>
    );
};

export default DeleteEmail;
