"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._registerNode = exports.Konva = exports.glob = void 0;
const Util_1 = require("./Util");
const PI_OVER_180 = Math.PI / 180;
const VERTICAL_MOVE_UP = [
    'g', 'j', 'p', 'q', 'y', 'ｇ', 'ｊ', 'ｐ', 'ｑ', 'ｙ'
];
const VERTICAL_TOP_RIGHT = [
    'っ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ', 'ゎ', 'ゕ', 'ゖ', 'ァ', 'ィ', 'ゥ',
    'ェ', 'ォ', 'ヵ', 'ㇰ', 'ヶ', 'ㇱ', 'ㇲ', 'ッ', 'ㇳ', 'ㇴ', 'ㇵ', 'ㇶ', 'ㇷ', 'ㇷ゚', 'ㇸ',
    'ㇹ', 'ㇺ', 'ャ', 'ュ', 'ョ', 'ㇻ', 'ㇼ', 'ㇽ', 'ㇾ', 'ㇿ', 'ヮ'
];
const VERTICAL_JPN_PERIOD = [
    '。', '、', '｡', '､'
];
const VERTICAL_JPN_ROTATE = [
    'ー', '〝', '〟', '〰', '〜', '～', '：', '；', '＜', '＞', '∿', '∾', '∿', '￣', '＿', '＝'
];
const VERTICAL_ROTATE_90_HALF = [
    ' ', '　', '[', ']', '(', ')', '{', '}', '｢', '｣', '-', '･', '·', '·', 'ｰ',
    '∼'
];
const VERTICAL_JPN_BRACKET_START_FULL = [
    '「', '『', '【', '《', '〔', '〚', '〘', '〖', '［',
    '（', '『', '｛', '〈'
];
const VERTICAL_JPN_BRACKET_END_FULL = [
    '」', '』', '】', '》', '〕', '〛', '〙', '〗', '〞', '］',
    '）', '』', '｝', '〉'
];
const VERTICAL_ROTATE_90_QUOT_HALF = [
    '‘', '’', '‵', '′', '‶', '"'
];
const VERTICAL_ROTATE_90_HALF_UP = [
    '\''
];
const VERTICAL_ROTATE_90_HALF_DOWN = [
    '<', '>', '~', '`'
];
const VERTICAL_ROTATE_90_HALF_UP_RIGHT = [
    ':', ';', '|'
];
const VERTICAL_TRANSLATE = [
    ['“', '”', '…', '︙', '‥', '︰', '│', '─', '｜'],
    ['〝', '〟', '︙', '…', '︰', '‥', '─', '│', '─']
];
const VERTICAL_ROTATE_90 = VERTICAL_JPN_ROTATE
    .concat(VERTICAL_ROTATE_90_HALF)
    .concat(VERTICAL_JPN_BRACKET_START_FULL)
    .concat(VERTICAL_JPN_BRACKET_END_FULL)
    .concat(VERTICAL_ROTATE_90_QUOT_HALF)
    .concat(VERTICAL_ROTATE_90_HALF_UP)
    .concat(VERTICAL_ROTATE_90_HALF_UP_RIGHT)
    .concat(VERTICAL_ROTATE_90_HALF_DOWN);
function detectBrowser() {
    return (typeof window !== 'undefined' &&
        ({}.toString.call(window) === '[object Window]' ||
            {}.toString.call(window) === '[object global]'));
}
var dummyContext, CONTEXT_2D = '2d';
function getDummyContext() {
    if (dummyContext) {
        return dummyContext;
    }
    dummyContext = Util_1.Util.createCanvasElement().getContext(CONTEXT_2D);
    return dummyContext;
}
const textHorizontalSizes = {};
const textVerticalSizes = {};
function measureText(text, fontSize, font, vertical) {
    if (!text) {
        return vertical
            ? { width: fontSize, height: 0 }
            : { width: 0, height: fontSize };
    }
    if (!textHorizontalSizes[fontSize]) {
        textHorizontalSizes[fontSize] = {};
        textVerticalSizes[fontSize] = {};
    }
    let size = vertical
        ? textVerticalSizes[fontSize][text]
        : textHorizontalSizes[fontSize][text];
    if (size) {
        return size;
    }
    const _context = getDummyContext();
    _context.save();
    _context.font = font;
    if (vertical) {
        let h = 0;
        let maxWidth = 0;
        for (let i = 0; i < text.length; i += 1) {
            const char = text[i];
            const index = VERTICAL_TRANSLATE[0].indexOf(char);
            const c = index >= 0 ? VERTICAL_TRANSLATE[1][index] : char;
            const metrics = _context.measureText(c);
            if (VERTICAL_ROTATE_90.includes(c)) {
                size = { width: fontSize, height: metrics.width };
            }
            else {
                size = { width: metrics.width, height: fontSize };
            }
            if (VERTICAL_JPN_PERIOD.includes(c)
                && VERTICAL_JPN_BRACKET_END_FULL.includes(text[i + 1])) {
                h += size.height / 2;
            }
            else if (i === text.length - 1
                && (VERTICAL_JPN_PERIOD.includes(c) || VERTICAL_JPN_BRACKET_END_FULL.includes(char))) {
                h += size.height / 2;
            }
            else {
                h += size.height;
            }
            maxWidth = Math.max(maxWidth, size.width);
            textVerticalSizes[fontSize][c] = size;
        }
        size = { width: maxWidth, height: h };
        textVerticalSizes[fontSize][text] = size;
    }
    else {
        const metrics = _context.measureText(text);
        size = {
            width: metrics.width,
            height: fontSize,
        };
        textHorizontalSizes[fontSize][text] = size;
    }
    _context.restore();
    return size;
}
exports.glob = typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
        ? window
        : typeof WorkerGlobalScope !== 'undefined'
            ? self
            : {};
exports.Konva = {
    _global: exports.glob,
    version: '9.3.6',
    isBrowser: detectBrowser(),
    isUnminified: /param/.test(function (param) { }.toString()),
    dblClickWindow: 400,
    getAngle(angle) {
        return exports.Konva.angleDeg ? angle * PI_OVER_180 : angle;
    },
    VERTICAL_MOVE_UP,
    VERTICAL_TOP_RIGHT,
    VERTICAL_JPN_PERIOD,
    VERTICAL_JPN_ROTATE,
    VERTICAL_ROTATE_90_HALF,
    VERTICAL_JPN_BRACKET_START_FULL,
    VERTICAL_JPN_BRACKET_END_FULL,
    VERTICAL_ROTATE_90_QUOT_HALF,
    VERTICAL_ROTATE_90_HALF_UP,
    VERTICAL_ROTATE_90_HALF_UP_RIGHT,
    VERTICAL_ROTATE_90_HALF_DOWN,
    VERTICAL_TRANSLATE,
    measureText,
    getDummyContext,
    enableTrace: false,
    pointerEventsEnabled: true,
    autoDrawEnabled: true,
    hitOnDragEnabled: false,
    capturePointerEventsEnabled: false,
    _mouseListenClick: false,
    _touchListenClick: false,
    _pointerListenClick: false,
    _mouseInDblClickWindow: false,
    _touchInDblClickWindow: false,
    _pointerInDblClickWindow: false,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: (typeof window !== 'undefined' && window.devicePixelRatio) || 1,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [0, 1],
    isDragging() {
        return exports.Konva['DD'].isDragging;
    },
    isTransforming() {
        var _a;
        return (_a = exports.Konva['Transformer']) === null || _a === void 0 ? void 0 : _a.isTransforming();
    },
    isDragReady() {
        return !!exports.Konva['DD'].node;
    },
    releaseCanvasOnDestroy: true,
    document: exports.glob.document,
    _injectGlobal(Konva) {
        exports.glob.Konva = Konva;
    },
};
const _registerNode = (NodeClass) => {
    exports.Konva[NodeClass.prototype.getClassName()] = NodeClass;
};
exports._registerNode = _registerNode;
exports.Konva._injectGlobal(exports.Konva);
