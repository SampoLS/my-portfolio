import { Fragment, useEffect, useState } from 'react';

import ShowIcons from '../../components/ShowIcons';
import showOpacityEffect from '../../utils/showOpacityEffect';
import Loading from '../../components/Loading';

import { familiar, unfamiliar } from './icons';
import { mouseEnterFamiliar, mouseEnterUnfamiliar, mouseLeaveFamiliar, mouseLeaveUnfamiliar } from './events';

export default function AboutPage() {
    const [isLoading, setIsLoading] = useState(true);
    const initialTimer = 1000;

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper') as HTMLElement; 
        if (wrapper) showOpacityEffect();

        setTimeout(() => {
            setIsLoading(false);
        }, initialTimer);
    }, [isLoading]);

    return (
        <Fragment>
            {isLoading ? <Loading /> : (
                <section className="wrapper">
                    <article className="title">
                        <h1>About</h1>
                        <p>Hi there, I'm Sampo, from China. I'm a front-end developer that I taught myself and I want to apply for a job as an internship. If you could hire me, that would be so grateful.</p>
                    </article>
                    <section className="my-skills">
                        <h2>My Skills</h2>
                        <div className='icon-card'>
                            <ShowIcons
                                logos={familiar}
                                color={'#27374D'}
                                hover={mouseEnterFamiliar}
                                leave={mouseLeaveFamiliar}
                                name='familiar'
                                text="I'm Good At It"
                            />
                            <ShowIcons
                                logos={unfamiliar}
                                color={'#526D82'}
                                hover={mouseEnterUnfamiliar}
                                leave={mouseLeaveUnfamiliar}
                                name='unfamiliar'
                                text="I Know About It"
                            />
                        </div>
                    </section>
                </section>
            )}
        </Fragment>
    );
}
