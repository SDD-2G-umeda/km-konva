declare function getDummyContext(): CanvasRenderingContext2D;
declare function measureText(text: string, fontSize: number, font: string, vertical: boolean): {
    width: number;
    height: number;
};
export declare const glob: any;
export declare const Konva: {
    _global: any;
    version: string;
    isBrowser: boolean;
    isUnminified: boolean;
    dblClickWindow: number;
    getAngle(angle: number): number;
    VERTICAL_TOP_RIGHT: string[];
    VERTICAL_TOP_RIGHT_OVER: string[];
    VERTICAL_ROTATE: string[];
    VERTICAL_ROTATE_90_HALF: string[];
    VERTICAL_ROTATE_90_UP: string[];
    VERTICAL_ROTATE_90_DOWN: string[];
    VERTICAL_ROTATE_90_QUOT_HALF: string[];
    VERTICAL_ROTATE_90_QUOT_HALF_UP: string[];
    VERTICAL_TRANSLATE: string[][];
    measureText: typeof measureText;
    getDummyContext: typeof getDummyContext;
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
};
export declare const _registerNode: (NodeClass: any) => void;
export {};
