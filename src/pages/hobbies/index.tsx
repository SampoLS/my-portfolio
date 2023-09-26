import { useEffect } from "react";
import showEffect from "../../utils/showEffect";

const hobbies = ['Logic', 'Mathematics', 'Physics', 'Philosophy', 'Machine Learning'];

export default function HobbiesPage() {
    showEffect();

    useEffect(() => {
        const lists = document.querySelectorAll('.list') as NodeListOf<HTMLElement>;

        for (let i = 0; i < lists.length; i++) {
            setTimeout(() => {
                lists[i].style.opacity = '1';
            }, 1200 + i * 400 );
        }
    }, []);

    return (
        <section className="wrapper">
            <article className="title">
                <h1>Hobbies</h1>
                <p className="text">During my spare time, I'd love to learn and think about :</p>
                <ol className="hobby-list">
                    {hobbies.map((h) => {
                        return (
                            <li className="list" key={h}>{h}</li>
                        );
                    }, 100)}
                </ol>
            </article>
        </section>
    );
}
