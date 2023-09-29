export default function showOpacityEffect(clsname = '.wrapper', timer = 800) {
    setTimeout(() => {
        (document.querySelector(clsname) as HTMLElement).style.opacity = '1';
    }, timer);
}