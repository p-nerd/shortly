import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import { useEffect, useState } from "react";
import AddEmailModal from "./AddEmailModal";

const email = "shihab4t@gmail.com";
const otherEmails = [
    {
        email: "shihab4t@gmail.com",
        isVerified: true,
    },
    {
        email: "shihab4t2@gmail.com",
        isVerified: true,
    },
    {
        email: "shihab4t3@gmail.com",
        statue: false,
    },
];

const EmailAddresses = () => {
    const [primaryEmail, setPrimaryEmail] = useState<string | null>(null);

    useEffect(() => {
        setPrimaryEmail(email);
    }, []);

    const handleDelete = () => {
        console.log("Clicked Delete");
    };

    return (
        <div className="flex flex-col space-y-5">
            <h3 className="text-lg font-semibold">Email addresses</h3>
            <p className="text-sm">
                Select or add a new email address to receive notifications. Only verified
                emails can be designated as the primary email address, which is used to
                log in.
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
                        {otherEmails.map((item, index) => (
                            <tr key={index}>
                                <th>{item.email}</th>
                                <td>
                                    {item.isVerified ? (
                                        <div className="flex items-center gap-1">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" />
                                            <span>Verified</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1">
                                            <CheckCircleIcon className="h-5 w-5" />
                                            <span>Not Verified</span>
                                        </div>
                                    )}{" "}
                                </td>
                                <td>
                                    <input
                                        checked={primaryEmail === item.email}
                                        onChange={() => setPrimaryEmail(item.email)}
                                        type="checkbox"
                                        className="checkbox-primary checkbox"
                                    />
                                </td>
                                <td>
                                    {item.email !== email && (
                                        <TrashIcon
                                            onClick={handleDelete}
                                            className="w-7"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddEmailModal />

            <button className="btn-wide btn">Update Primary Email</button>
        </div>
    );
};

export default EmailAddresses;
