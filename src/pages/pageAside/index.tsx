import Avatar from './Avatar';
import InfoNav from './InfoNav';

export default function PageAside() {
    setTimeout(() => {
        document.querySelector('aside')!.style.opacity = '1';
    }, 50);

    return (
        <aside>
            <Avatar />
            <InfoNav />
        </aside>
    );
}
