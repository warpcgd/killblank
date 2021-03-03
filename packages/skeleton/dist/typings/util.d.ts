export declare const getComputedStyle: ((elt: Element, pseudoElt?: string) => CSSStyleDeclaration) &
  typeof globalThis.getComputedStyle
export declare const $$: any
export declare const $: any
export declare const isBase64Img: (img: HTMLImageElement) => boolean
export declare const setAttributes: (ele: HTMLElement, attrs: DefaultObjectType) => void
export declare const inViewPort: (ele: HTMLElement) => boolean
export declare const checkHasPseudoEle: (
  ele: HTMLElement
) =>
  | false
  | {
      hasBefore: boolean
      hasAfter: boolean
      ele: HTMLElement
    }
export declare const checkHasBorder: (styles: CSSStyleDeclaration) => boolean
export declare const canSkeleton: (ele: HTMLElement) => boolean
export declare const noSkeleton: (ele: HTMLElement) => boolean
export declare const getOppositeShape: (shape: string) => 'circle' | 'rect'
export declare const checkHasTextDecoration: (styles: CSSStyleDeclaration) => boolean
export declare const getViewPort: () => {
  vh: number
  vw: number
  vmax: number
  vmin: number
}
export declare const hashCode: (str: string) => number
export declare const injectStyle: (rootHashClass: string, style: string) => HTMLStyleElement
export declare const px2relativeUtil: (
  px: string | number,
  unit?: string | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax',
  decimal?: number
) => string
export declare const getTextWidth: (text: string, style: object) => number
export declare const addClassName: (ele: HTMLElement, classArray: string[]) => void
export declare const setOpacity: (ele: HTMLElement) => void
export declare const transparent: (ele: HTMLElement) => void
export declare const removeElement: (ele: HTMLElement) => void
export declare const emptyElement: (ele: HTMLElement) => void