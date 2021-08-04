export class Geral {
    static converteDataStr(dataStr) {
        const exp = /-/g;
        return new Date(dataStr.replace(exp, ','));
    }
}
