import { Context } from '../Context';
import { Shape, ShapeConfig } from '../Shape';
import { GetSet } from '../types';
export declare function stringToArray(string: string): string[];
export interface TextConfig extends ShapeConfig {
    direction?: string;
    text?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontVariant?: string;
    textDecoration?: string;
    align?: string;
    verticalAlign?: string;
    padding?: number;
    lineHeight?: number;
    letterSpacing?: number;
    wrap?: string;
    ellipsis?: boolean;
    vertical?: boolean;
}
export declare class Text extends Shape<TextConfig> {
    textArr: Array<{
        text: string;
        width: number;
        height: number;
        lastInParagraph: boolean;
    }>;
    _partialText: string;
    _partialTextX: number;
    _partialTextY: number;
    textWidth: number;
    textHeight: number;
    constructor(config?: TextConfig);
    _sceneFunc(context: Context): void;
    _hitFunc(context: Context): void;
    setText(text: string): this;
    getWidth(): number;
    getHeight(): any;
    getTextWidth(): number;
    getTextHeight(): number;
    _getContextFont(): string;
    _addTextLine(line: string): number;
    _setTextData(): void;
    _shouldHandleEllipsis(currentHeightPx: number): boolean;
    _tryToAddEllipsisToLastLine(): void;
    getStrokeScaleEnabled(): boolean;
    _useBufferCanvas(): boolean;
    direction: GetSet<string, this>;
    fontFamily: GetSet<string, this>;
    fontSize: GetSet<number, this>;
    fontStyle: GetSet<string, this>;
    fontVariant: GetSet<string, this>;
    align: GetSet<string, this>;
    letterSpacing: GetSet<number, this>;
    verticalAlign: GetSet<string, this>;
    padding: GetSet<number, this>;
    lineHeight: GetSet<number, this>;
    textDecoration: GetSet<string, this>;
    text: GetSet<string, this>;
    wrap: GetSet<string, this>;
    ellipsis: GetSet<boolean, this>;
    vertical: GetSet<boolean, this>;
}