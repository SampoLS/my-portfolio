import { Fragment, useEffect, useState } from "react";
import showEffect from "../../utils/showEffect";
import Loading from "../../components/Loading";
import { appendLetter } from "./utils";

const text = 'Thanks For Your Visiting!'.split('');

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const initialTimer = 1000;

    useEffect(() => {
        const span = document.querySelector('.letter') as HTMLElement;

        if (span) {
            showEffect('.letter');
            appendLetter(span, text, initialTimer);
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

