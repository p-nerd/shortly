/**
 * Create an object composed of the picked object properties
 */
const pick = (object: Record<string, any>, keys: string[]): object =>
    keys.reduce((obj: any, key: string) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {});

export default pick;
