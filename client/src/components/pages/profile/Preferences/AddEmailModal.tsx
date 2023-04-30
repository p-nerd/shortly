import InputField from "@components/common/Input/InputField";
import { selectOtherEmails } from "@features/auth/authSelector";
import useUpdateMe from "@hooks/useUpdateMe";
import { useEffect, useState } from "react";

const AddEmailModal = () => {
    const otherEmails = selectOtherEmails();
    const [email, setEmail] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const { updateMe, isLoading, isSuccess } = useUpdateMe();

    const handleAddEmail = () => {
        if (otherEmails && email) {
            updateMe({
                otherEmails: [...otherEmails, { email, isEmailVerified: false }],
            });
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setEmail("");
            setModalOpen(false);
        }
    }, [isSuccess]);

    return (
        <>
            <label
                htmlFor="add-email"
                onClick={() => setModalOpen(true)}
                className="btn-outline btn-wide btn"
            >
                Add New Email
            </label>
            {modalOpen ? (
                <>
                    <input type="checkbox" id="add-email" className="modal-toggle" />
                    <label
                        htmlFor="add-email"
                        className="modal  modal-bottom cursor-pointer sm:modal-middle"
                    >
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">Add a new email address</h3>
                            <p className="py-4">
                                A verification email will be sent to this address after
                                clicking Save. New email addresses cannot be designated as
                                primary until they have been verified.
                            </p>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    handleAddEmail();
                                }}
                            >
                                <InputField
                                    label="Email Address"
                                    value={email}
                                    setValue={setEmail}
                                    type="text"
                                />

                                <div className="flex justify-end gap-3">
                                    <div className="modal-action">
                                        <label
                                            htmlFor="add-email"
                                            className="btn-outline btn"
                                        >
                                            Cancel
                                        </label>
                                    </div>
                                    <div className="modal-action">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            // htmlFor="add-email"
                                            className="btn-primary btn-active btn"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </label>
                    </label>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default AddEmailModal;
