import { useNavigate } from 'react-router-dom';
import me from '../../assets/images/me.jpeg';

export default function Avatar() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    }

    return (
        <section className='avatar' onClick={goToHomePage}>
            <article className='img-wrapper'>
                <img src={me} alt="me" />
            </article>
        </section>
    );
}
