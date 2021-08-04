export class DateUtils{
    
    public static converteDataStr(dataStr: string): Date{
        const exp = /-/g;
        return new Date(dataStr.replace(exp, ','));
    }   
}