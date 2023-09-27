import { Fragment } from "react";

interface Logo {
    iconName: string;
    icon: string
}

type Props = {
    logos: Array<Logo>
    color: string;
    hover: (i: number) => void;
    leave: () => void;
    name: string;
    text: string
}

export type Logos = Array<Logo>;

export default function ShowIcons(props: Props) {
    const { logos, color, hover, leave, name, text } = props;
    
    return (
        <Fragment>
            {logos.map((logo: Logo, i: number) => {
                return (
                    <article
                        key={i}
                        className='card'
                        style={{ background: color }}
                        onMouseEnter={() => hover(i)}
                        onMouseLeave={leave}
                    >
                        <div className='icon-wrapper'>
                            <img src={logo.icon} alt={logo.iconName} />
                        </div>
                        <h3>{logo.iconName}</h3>
                        <div className={"mask " + name}>{text}</div>
                    </article>
                )
            })}
        </Fragment>
    );
}
