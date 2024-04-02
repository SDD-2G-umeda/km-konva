import { Arc } from './shapes/Arc.js';
import { Arrow } from './shapes/Arrow.js';
import { Circle } from './shapes/Circle.js';
import { Ellipse } from './shapes/Ellipse.js';
import { Image } from './shapes/Image.js';
import { Label, Tag } from './shapes/Label.js';
import { Line } from './shapes/Line.js';
import { Path } from './shapes/Path.js';
import { Rect } from './shapes/Rect.js';
import { RegularPolygon } from './shapes/RegularPolygon.js';
import { Ring } from './shapes/Ring.js';
import { Sprite } from './shapes/Sprite.js';
import { Star } from './shapes/Star.js';
import { Text } from './shapes/Text.js';
import { TextPath } from './shapes/TextPath.js';
import { Transformer } from './shapes/Transformer.js';
import { Wedge } from './shapes/Wedge.js';
export declare const Konva: {
    _global: any;
    version: string;
    isBrowser: boolean;
    isUnminified: boolean;
    dblClickWindow: number;
    getAngle(angle: number): number;
    VERTICAL_MOVE_UP: string[];
    VERTICAL_TOP_RIGHT: string[];
    VERTICAL_JPN_PERIOD: string[];
    VERTICAL_JPN_ROTATE: string[];
    VERTICAL_ROTATE_90_HALF: string[];
    VERTICAL_JPN_BRACKET_START_FULL: string[];
    VERTICAL_JPN_BRACKET_END_FULL: string[];
    VERTICAL_ROTATE_90_QUOT_HALF: string[];
    VERTICAL_ROTATE_90_HALF_UP: string[];
    VERTICAL_ROTATE_90_HALF_UP_RIGHT: string[];
    VERTICAL_ROTATE_90_HALF_DOWN: string[];
    VERTICAL_TRANSLATE: string[][];
    measureText: (text: string, fontSize: number, font: string, vertical: boolean) => {
        width: number;
        height: number;
    };
    getDummyContext: () => CanvasRenderingContext2D;
    enableTrace: boolean;
    pointerEventsEnabled: boolean;
    autoDrawEnabled: boolean;
    hitOnDragEnabled: boolean;
    capturePointerEventsEnabled: boolean;
    _mouseListenClick: boolean;
    _touchListenClick: boolean;
    _pointerListenClick: boolean;
    _mouseInDblClickWindow: boolean;
    _touchInDblClickWindow: boolean;
    _pointerInDblClickWindow: boolean;
    _mouseDblClickPointerId: null;
    _touchDblClickPointerId: null;
    _pointerDblClickPointerId: null;
    pixelRatio: number;
    dragDistance: number;
    angleDeg: boolean;
    showWarnings: boolean;
    dragButtons: number[];
    isDragging(): any;
    isTransforming(): any;
    isDragReady(): boolean;
    releaseCanvasOnDestroy: boolean;
    document: any;
    _injectGlobal(Konva: any): void;
} & {
    Util: {
        _isElement(obj: any): obj is Element;
        _isFunction(obj: any): boolean;
        _isPlainObject(obj: any): boolean;
        _isArray(obj: any): obj is any[];
        _isNumber(obj: any): obj is number;
        _isString(obj: any): obj is string;
        _isBoolean(obj: any): obj is boolean;
        isObject(val: any): val is Object;
        isValidSelector(selector: any): boolean;
        _sign(number: number): 1 | -1;
        requestAnimFrame(callback: Function): void;
        createCanvasElement(): HTMLCanvasElement;
        createImageElement(): HTMLImageElement;
        _isInDocument(el: any): boolean;
        _urlToImage(url: string, callback: Function): void;
        _rgbToHex(r: number, g: number, b: number): string;
        _hexToRgb(hex: string): import("./types.js").RGB;
        getRandomColor(): string;
        getRGB(color: string): import("./types.js").RGB;
        colorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _namedColorToRBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | null;
        _rgbColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _rgbaColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _hex8ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _hex6ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _hex4ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _hex3ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        _hslColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        haveIntersection(r1: import("./types").IRect, r2: import("./types.js").IRect): boolean;
        cloneObject<Any>(obj: Any): Any;
        cloneArray(arr: any[]): any[];
        degToRad(deg: number): number;
        radToDeg(rad: number): number;
        _degToRad(deg: number): number;
        _radToDeg(rad: number): number;
        _getRotation(radians: number): number;
        _capitalize(str: string): string;
        throw(str: string): never;
        error(str: string): void;
        warn(str: string): void;
        each(obj: Object, func: Function): void;
        _inRange(val: number, left: number, right: number): boolean;
        _getProjectionToSegment(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): any[];
        _getProjectionToLine(pt: import("./types").Vector2d, line: import("./types").Vector2d[], isClosed: boolean): import("./types.js").Vector2d;
        _prepareArrayForTween(startArray: any, endArray: any, isClosed: any): number[];
        _prepareToStringify<T>(obj: any): T | null;
        _assign<T_1, U>(target: T_1, source: U): T_1 & U;
        _getFirstPointerId(evt: any): any;
        releaseCanvas(...canvases: HTMLCanvasElement[]): void;
        drawRoundedRectPath(context: import("./Context.js").Context, width: number, height: number, cornerRadius: number | number[]): void;
    };
    Transform: typeof import("./Util.js").Transform;
    Node: typeof import("./Node.js").Node;
    Container: typeof import("./Container.js").Container;
    Stage: typeof import("./Stage.js").Stage;
    stages: import("./Stage.js").Stage[];
    Layer: typeof import("./Layer.js").Layer;
    FastLayer: typeof import("./FastLayer.js").FastLayer;
    Group: typeof import("./Group.js").Group;
    DD: {
        readonly isDragging: boolean;
        justDragged: boolean;
        readonly node: import("./Node").Node<import("./Node.js").NodeConfig> | undefined;
        _dragElements: Map<number, {
            node: import("./Node").Node<import("./Node.js").NodeConfig>;
            startPointerPos: import("./types.js").Vector2d;
            offset: import("./types.js").Vector2d;
            pointerId?: number | undefined;
            dragStatus: "stopped" | "ready" | "dragging";
        }>;
        _drag(evt: any): void;
        _endDragBefore(evt?: any): void;
        _endDragAfter(evt: any): void;
    };
    Shape: typeof import("./Shape.js").Shape;
    shapes: {
        [key: string]: import("./Shape").Shape<import("./Shape.js").ShapeConfig>;
    };
    Animation: typeof import("./Animation.js").Animation;
    Tween: typeof import("./Tween.js").Tween;
    Easings: {
        BackEaseIn(t: any, b: any, c: any, d: any): any;
        BackEaseOut(t: any, b: any, c: any, d: any): any;
        BackEaseInOut(t: any, b: any, c: any, d: any): any;
        ElasticEaseIn(t: any, b: any, c: any, d: any, a: any, p: any): any;
        ElasticEaseOut(t: any, b: any, c: any, d: any, a: any, p: any): any;
        ElasticEaseInOut(t: any, b: any, c: any, d: any, a: any, p: any): any;
        BounceEaseOut(t: any, b: any, c: any, d: any): any;
        BounceEaseIn(t: any, b: any, c: any, d: any): any;
        BounceEaseInOut(t: any, b: any, c: any, d: any): any;
        EaseIn(t: any, b: any, c: any, d: any): any;
        EaseOut(t: any, b: any, c: any, d: any): any;
        EaseInOut(t: any, b: any, c: any, d: any): any;
        StrongEaseIn(t: any, b: any, c: any, d: any): any;
        StrongEaseOut(t: any, b: any, c: any, d: any): any;
        StrongEaseInOut(t: any, b: any, c: any, d: any): any;
        Linear(t: any, b: any, c: any, d: any): any;
    };
    Context: typeof import("./Context.js").Context;
    Canvas: typeof import("./Canvas.js").Canvas;
} & {
    Arc: typeof Arc;
    Arrow: typeof Arrow;
    Circle: typeof Circle;
    Ellipse: typeof Ellipse;
    Image: typeof Image;
    Label: typeof Label;
    Tag: typeof Tag;
    Line: typeof Line;
    Path: typeof Path;
    Rect: typeof Rect;
    RegularPolygon: typeof RegularPolygon;
    Ring: typeof Ring;
    Sprite: typeof Sprite;
    Star: typeof Star;
    Text: typeof Text;
    TextPath: typeof TextPath;
    Transformer: typeof Transformer;
    Wedge: typeof Wedge;
    Filters: {
        Blur: import("./Node.js").Filter;
        Brighten: import("./Node.js").Filter;
        Contrast: import("./Node.js").Filter;
        Emboss: import("./Node.js").Filter;
        Enhance: import("./Node.js").Filter;
        Grayscale: import("./Node.js").Filter;
        HSL: import("./Node.js").Filter;
        HSV: import("./Node.js").Filter;
        Invert: import("./Node.js").Filter;
        Kaleidoscope: import("./Node.js").Filter;
        Mask: import("./Node.js").Filter;
        Noise: import("./Node.js").Filter;
        Pixelate: import("./Node.js").Filter;
        Posterize: import("./Node.js").Filter;
        RGB: import("./Node.js").Filter;
        RGBA: import("./Node.js").Filter;
        Sepia: import("./Node.js").Filter;
        Solarize: import("./Node.js").Filter;
        Threshold: import("./Node.js").Filter;
    };
};
