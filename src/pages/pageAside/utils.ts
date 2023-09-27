export function spaceToUnderline(c: string) {
    let s = '';

    if (c.indexOf(' ') !== -1) {
        const arr = c.split(' ');

        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) s += arr[i];
            else s += arr[i] + '_';
        }
        
        return s.toLowerCase();
    }

    return s;
}
