import type { FC } from 'react';
import type React from 'react';
import type { TextProps } from '../../types/component-types';
 
export const Text: FC<TextProps> = (props: TextProps) => {
    const { fontSize, text, children, cssClasses } = props;

    return <p className={cssClasses} style={{fontSize}}>
        {children !== undefined ? children : text}
    </p>
}
