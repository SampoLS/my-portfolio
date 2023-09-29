import { useEffect } from "react";
import showOpacityEffect from "../../utils/showOpacityEffect";

export default function ContactPage() {
    useEffect(() => {
        showOpacityEffect();
    }, []);

    return (
        <section className="wrapper">
            <article className="title">
                <h1>Contact Me</h1>
            </article>
            <article className="form-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="email-wrapper">
                        <input type="email" id="email" placeholder="Please enter you email" />
                        <button className="contact">Send</button>
                    </div>
                </form>
            </article>
        </section>
    );
}
