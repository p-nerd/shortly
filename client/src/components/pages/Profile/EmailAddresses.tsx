import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

const EmailAddresses = () => {
    const emails = [
        {
            email: "shihab4t@gmail.com",
            isVerified: true,
            isPrimary: true,
        },
        {
            email: "shihab4t2@gmail.com",
            isVerified: true,
            isPrimary: false,
        },
        {
            email: "shihab4t2@gmail.com",
            statue: false,
            isPrimary: false,
        },
    ];

    return (
        <div className="space-y-5">
            <h3 className="text-xl">Email addresses</h3>
            <p className="text-sm">
                Select or add a new email address to receive notifications. Only verified
                emails can be designated as the primary email address, which is used to
                log in.
            </p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email address</th>
                            <th>Status</th>
                            <th>Primary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails.map((item, index) => (
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
                                <td>{item.isPrimary ? "Primary" : "Not Primary"} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmailAddresses;
