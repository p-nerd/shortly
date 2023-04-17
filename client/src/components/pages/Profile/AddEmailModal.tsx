import InputField from "@components/common/Input/InputField";
import { useState } from "react";

const AddEmailModal = () => {
    const [email, setEmail] = useState();

    return (
        <>
            <label htmlFor="add-email" className="btn-outline btn-wide btn">
                Add New Email
            </label>
            <input type="checkbox" id="add-email" className="modal-toggle" />
            <label
                htmlFor="add-email"
                className="modal modal-bottom cursor-pointer sm:modal-middle"
            >
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Add a new email address</h3>
                    <p className="py-4">
                        A verification email will be sent to this address after clicking
                        Save. New email addresses cannot be designated as primary until
                        they have been verified.
                    </p>
                    <InputField
                        label="Email Address"
                        value={email}
                        setValue={setEmail}
                        type="text"
                    />

                    <div className="flex justify-end gap-3">
                        <div className="modal-action">
                            <label htmlFor="add-email" className="btn-outline btn">
                                Cancel
                            </label>
                        </div>
                        <div className="modal-action">
                            <button
                                // htmlFor="add-email"
                                className="btn-primary btn-active btn"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </label>
            </label>
        </>
    );
};

export default AddEmailModal;
