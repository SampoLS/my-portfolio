import { useEffect } from "react";

const text = 'Thanks For Your Visiting!';
const textArr = text.split('');

export default function HomePage() {
    useEffect(() => {
        const wrapper = document.querySelector('.home');

        for (let i = 0; i < textArr.length; i++) {
            const span = document.createElement('span');
            
            span.textContent = textArr[i];
            span.className = 'letter';

            wrapper?.appendChild(span);

            setTimeout(() => {
                span.style.opacity = '1';
            }, 100 + i * 100);
        }
    }, []);

    return (
        <section className="home"></section>
    );
}