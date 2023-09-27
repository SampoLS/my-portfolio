import { Fragment, useEffect, useState } from "react";
import showEffect from "../../utils/showEffect";
import Loading from "../../components/Loading";

const text = 'Thanks For Your Visiting!'.split('');

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const initialTimer = 1000;

    useEffect(() => {
        const span = document.querySelector('.letter') as HTMLElement;

        if (span) {
            showEffect('.letter');
            appendLetter(span, initialTimer);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, initialTimer);
    }, [isLoading]);

    return (
        <Fragment>
            {isLoading ? <Loading /> : (
                <section className="home">
                    <span className="letter"></span>
                </section>
            )}
        </Fragment>
    );
}

function appendLetter(span: HTMLElement, initialTimer: number) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (span) span.textContent += text[i];
        }, initialTimer + i * 100);
    }
}
