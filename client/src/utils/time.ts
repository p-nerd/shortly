import moment from "moment";
import momentTimezone from "moment-timezone";

export const timeTimeZoneWiseFormat = (time: number) => {
    return momentTimezone.tz(time, "Asia/Dhaka").format("MMMM DD, YYYY h:mm A [GMT]Z");
};

export const timeFromNow = (time: number) => {
    return moment(time).fromNow();
};
