import InputField from "@components/common/Input/InputField";
import ErrorText from "@components/common/Typography/ErrorText";
import { useState } from "react";

const DeleteUserAccountModal = () => {
    const deletionReasons = [
        {
            label: "I have another Bitly account",
            value: "option1",
        },
        {
            label: "I have privacy concerns using Bitly",
            value: "option2",
        },
        {
            label: "I no longer find Bitly useful",
            value: "option3",
        },
        {
            label: "Other",
            value: "option4",
        },
    ];

    const [otherReason, setOtherReason] = useState("");
    const [confirmText, setConfirmText] = useState("");

    return (
        <div>
            <label htmlFor="delete-user-account-modal" className="btn-error btn">
                Delete Account
            </label>

            <input
                type="checkbox"
                id="delete-user-account-modal"
                className="modal-toggle"
            />
            <label htmlFor="delete-user-account-modal" className="modal cursor-pointer">
                <label
                    className="scrollbar-hide modal-box relative z-30 flex max-w-2xl flex-col gap-5 p-8"
                    htmlFor=""
                >
                    <h3 className="text-lg font-bold">Delete user account</h3>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">
                            How your account will be affected:
                        </h4>
                        <ul className="list-disc px-5">
                            <li>Your login will be deactivated</li>
                            <li>
                                All your personally identifiable information (PII) will be
                                permanently deleted from our servers
                            </li>
                            <li>
                                Integrations using your user information, such as access
                                tokens, will be disconnected from Bitly
                            </li>
                            <li>
                                Any paid plan subscription will be canceled and billing
                                will stop
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">
                            How your links will be affected:
                        </h4>
                        <ul className="list-disc px-5">
                            <li>Your links will not be deleted or deactivated</li>
                            <li>
                                Links using the bit.ly domain will continue to function
                            </li>
                            <li>
                                Links branded with a Bitly complimentary domain will
                                continue to function for one year from your sign up date,
                                and then they will lead to an error page
                            </li>
                            <li>
                                Links branded with your own custom domain will continue to
                                function as long as the domain's DNS records point to
                                Bitly's servers
                            </li>
                            <li>
                                Your name will not appear next to links you've created
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">
                            We're sad to see you go. Can you tell us why you're leaving?
                        </h4>
                        {deletionReasons.map((item, index) => (
                            <label key={index} className="flex gap-2">
                                <input
                                    type="radio"
                                    name="leaving-reason"
                                    value={item.value}
                                />
                                <span>{item.label}</span>
                            </label>
                        ))}
                        <InputField
                            containerStyle="ml-6"
                            value={otherReason}
                            setValue={setOtherReason}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">
                            To permanently delete your account, enter 'DELETE ACCOUNT'
                            below, and then select Delete account.
                        </h4>
                        <InputField
                            placeholder="Enter 'DELETE ACCOUNT'"
                            value={confirmText}
                            setValue={setConfirmText}
                        />
                        <ErrorText
                            message={"Please type the phrase exactly as it appears."}
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <div className="modal-action">
                            <label
                                htmlFor="delete-user-account-modal"
                                className="btn-outline btn"
                            >
                                Cancel
                            </label>
                        </div>
                        <div className="modal-action">
                            <button className="btn-disabled btn-error btn">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default DeleteUserAccountModal;
