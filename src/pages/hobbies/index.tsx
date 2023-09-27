import { Fragment, useEffect, useState } from "react";
import showEffect from "../../utils/showEffect";
import Loading from "../../components/Loading";
import { showBobbies } from "./utils";

const hobbies = ['Logic', 'Mathematics', 'Physics', 'Philosophy', 'Machine Learning'];

export default function HobbiesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const initialTimer = 1000;

    useEffect(() => {
        const lists = document.querySelectorAll('.list') as NodeListOf<HTMLElement>;
        const wrapper = document.querySelector('.wrapper') as HTMLElement; 

        if (wrapper) {
            showEffect();
            showBobbies(lists, initialTimer);
        }


        setTimeout(() => {
            setIsLoading(false);
        }, initialTimer);
    }, [isLoading]);

    return (
        <Fragment>
            {isLoading ? <Loading /> : (
                <section className="wrapper">
                    <article className="title">
                        <h1>Hobbies</h1>
                        <p className="text">During my spare time, I'd love to learn and think about :</p>
                        <ol className="hobby-list">
                            {hobbies.map((h) => (<li className="list" key={h}>{h}</li>))}
                        </ol>
                    </article>
                </section>
            )}
        </Fragment>
    );
}
