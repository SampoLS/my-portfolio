export function showBobbies(lists: NodeListOf<HTMLElement>, initialTimer: number) {
    for (let i = 0; i < lists.length; i++) {
        setTimeout(() => {
            lists[i].style.opacity = '1';
        }, initialTimer + i * 400 );
    }
}
