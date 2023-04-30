import { timeFromNow, timeTimeZoneWiseFormat } from "@utils/time";
import DeleteUserAccountModal from "./DeleteUserAccountModal";

const AccessHistory = () => {
    const loginHistory = [
        {
            ip: "37.111.232.216",
            isp: "GrameenPhone",
            location: "Bangladesh",
            loginTime: 1681695154960,
        },
        {
            ip: "37.111.232.216",
            isp: "GrameenPhone",
            location: "Bangladesh",
            loginTime: 1681695154960,
        },
    ];

    return (
        <div className="">
            <p className="text-sm">
                You're viewing recent activity on your account. Logging out will apply to
                all devices currently connected to Bitly.
            </p>
            <button className="btn-primary btn mt-3">Log out of all devices</button>
            <div className="mt-6">
                {loginHistory.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span>Log In</span>
                                <span>
                                    from {item.ip} ({item.isp}) ({item.location})
                                </span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span>{timeTimeZoneWiseFormat(item.loginTime)}</span>
                                <span>{timeFromNow(item.loginTime)}</span>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                ))}
            </div>

            <DeleteUserAccountModal />
        </div>
    );
};

export default AccessHistory;
