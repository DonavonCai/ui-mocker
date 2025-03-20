export interface IMightHaveCssClasses {
    cssClasses?: string;
}

/**
 * @interface IHaveChildren
 * @description Interface for a component that has children
 */
export interface IHaveChildren {
    children: React.ReactNode;
}

/**
 * @interface IMightHaveChildren
 * @description Interface for a component that may have children
 */
export interface IMightHaveChildren {
    children?: React.ReactNode;
}

/**
 * @type ITextProps
 * @description Type for text component required props
 */
interface ITextMainProps extends IMightHaveCssClasses {
    fontSize: number;
}

interface ITextPropsWithNoChildren extends ITextMainProps {
    text: string;
    children?: never;
}

interface ITextPropsWithChildren extends ITextMainProps {
    text?: never;
    children: React.ReactNode;
}

export type TextProps = ITextPropsWithChildren | ITextPropsWithNoChildren