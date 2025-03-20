import type { FC } from 'react';
import type React from 'react';

interface Props {
    text: string;
    children?: React.ReactNode;
    cssClasses?: string;
}
 
export const Text: FC<Props> = (props: Props) => {
    const { text, children, cssClasses } = props;

    return <p className={cssClasses}>
        {children !== undefined ? children : text}
    </p>
}
