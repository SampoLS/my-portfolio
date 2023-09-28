export const showMask = (clsName: string, j: number)=> {
    const el = document.getElementsByClassName(clsName) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < el.length; i++)
        if (i === j) el[i].style.opacity = '1';
}

export const hideMask = (clsName: string) => {
    const el = document.getElementsByClassName(clsName) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < el.length; i++) el[i].style.opacity = '0';
}

export const mouseEnterFamiliar = (j: number) => {
    showMask('familiar', j);
}

export const mouseLeaveFamiliar = () => {
    hideMask('familiar');
}

export const mouseEnterUnfamiliar = (j: number) => {
    showMask('unfamiliar', j);
};

export const mouseLeaveUnfamiliar = () => {
    hideMask('unfamiliar');
};
