export default function showEffect(timer = 800) {
    setTimeout(() => {
        (document.querySelector('.wrapper') as HTMLElement).style.opacity = '1';
    }, timer);
}