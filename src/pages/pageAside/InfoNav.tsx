import { NavLink } from "react-router-dom";
import { spaceToUnderline } from "./utils";

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
