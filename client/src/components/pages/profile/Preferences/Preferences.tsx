import { selectEmail, selectOtherEmails } from "@features/auth/authSelector";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import AddEmailModal from "./AddEmailModal";
import DeleteEmail from "./DeleteEmail";
import DisplayName from "./DisplayName";
import MakePrimaryEmail from "./MakePrimaryEmail";

const Preferences = () => {
    const email = selectEmail();
    const otherEmails = selectOtherEmails();

    return (
        <div>
            <div className="space-y-14">
                <DisplayName />
                <div className="flex flex-col space-y-5">
                    <h3 className="text-lg font-semibold">Email addresses</h3>
                    <p className="text-sm">
                        Select or add a new email address to receive notifications. Only
                        verified emails can be designated as the primary email address,
                        which is used to log in.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="table-compact table w-2/3">
                            <thead>
                                <tr>
                                    <th>Email address</th>
                                    <th>Status</th>
                                    <th>Primary</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {email && otherEmails ? (
                                    <>
                                        {otherEmails.map((item, index) => (
                                            <tr key={index}>
                                                <th>{item.email}</th>
                                                <td>
                                                    {item.isEmailVerified ? (
                                                        <div className="flex items-center gap-1">
                                                            <CheckCircleIcon className="h-5 w-5 text-green-400" />
                                                            <span>Verified</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-1">
                                                            <CheckCircleIcon className="h-5 w-5" />
                                                            <span>Not Verified</span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td>
                                                    <MakePrimaryEmail
                                                        primaryEmail={email}
                                                        currentEmail={item.email}
                                                    />
                                                </td>
                                                <td>
                                                    {item.email !== email && (
                                                        <DeleteEmail email={item.email} />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <AddEmailModal />
                </div>
            </div>
        </div>
    );
};

export default Preferences;
