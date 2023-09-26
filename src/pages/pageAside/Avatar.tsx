import me from '../../assets/images/me.jpeg';

export default function Avatar() {
    return (
        <section className='avatar'>
            <article className='img-wrapper'>
                <img src={me} alt="me" />
            </article>
        </section>
    );
}
