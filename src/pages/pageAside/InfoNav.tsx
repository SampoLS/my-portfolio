import { NavLink } from "react-router-dom";

const category = ['About', 'Hobbies', 'Contact Me'];

export default function InfoNav() {
    return (
        <nav>
            <ul>
                {category.map((c: string, i: number) => {
                    const s = spaceToUnderline(c);

                    return (
                        <li key={i} className='nav-wrapper'>
                            <NavLink to={s ? s : c.toLowerCase()}>{c}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

function spaceToUnderline(c: string) {
    let s = '';

    if (c.indexOf(' ') !== -1) {
        const arr = c.split(' ');

        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                s += arr[i];
            } else {
                s += arr[i] + '_';
            }
        }
        
        return s.toLowerCase();
    }

    return s;
}
