export class DateUtils {
    static converteDataStr(dataStr) {
        const exp = /-/g;
        return new Date(dataStr.replace(exp, ','));
    }
}
