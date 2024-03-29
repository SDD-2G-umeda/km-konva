import { Context } from '../Context';
import { Shape, ShapeConfig } from '../Shape';
import { GetSet } from '../types';
export interface WedgeConfig extends ShapeConfig {
    angle: number;
    radius: number;
    clockwise?: boolean;
}
export declare class Wedge extends Shape<WedgeConfig> {
    _sceneFunc(context: Context): void;
    getWidth(): number;
    getHeight(): number;
    setWidth(width: number): void;
    setHeight(height: number): void;
    radius: GetSet<number, this>;
    angle: GetSet<number, this>;
    clockwise: GetSet<boolean, this>;
}
