import ShowIcons from '../../components/ShowIcons';

import reactIcon from '../../assets/icons/react.svg';
import htmlIcon from '../../assets/icons/html5.svg';
import cssIcon from '../../assets/icons/css.svg';
import jsIcon from '../../assets/icons/js.svg';
import mongoDBIcon from '../../assets/icons/mongodb.svg';
import nodeJsIcon from '../../assets/icons/nodejs.svg';
import pythonIcon from '../../assets/icons/python.svg';
import gitIcon from '../../assets/icons/git.svg';
import showEffect from '../../utils/showEffect';

const familiar = [
    { iconName: 'HTML5', icon: htmlIcon },
    { iconName: 'CSS3', icon: cssIcon },
    { iconName: 'JavaScript', icon: jsIcon },
    { iconName: 'ReactJS', icon: reactIcon },
];

const unfamiliar = [
    { iconName: 'mongodb', icon: mongoDBIcon },
    { iconName: 'nodejs', icon: nodeJsIcon },
    { iconName: 'python', icon: pythonIcon },
    { iconName: 'git', icon: gitIcon },
];

function showMask(clsName: string, j: number) {
    const el = document.getElementsByClassName(clsName) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < el.length; i++) {
        if (i === j) {
            el[i].style.opacity = '1';
        }
    }
}
function hideMask(clsName: string) {
    const el = document.getElementsByClassName(clsName) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < el.length; i++) {
        el[i].style.opacity = '0';
    }
}

export default function AboutPage() {
    showEffect();

    const mouseEnterFamiliar = (j: number) => {
        showMask('familiar', j);
    }
    const mouseLeaveFamiliar = () => {
        hideMask('familiar');
    }
    const mouseEnterUnfamiliar = (j: number) => {
        showMask('unfamiliar', j);
    }
    const mouseLeaveUnfamiliar = () => {
        hideMask('unfamiliar');
    }

    return (
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
    );
}
