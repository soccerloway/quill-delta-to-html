import { ListType, AlignType, DirectionType, ScriptType } from './value-types';
import { IMention } from './mentions/MentionSanitizer';
interface TableCellLineAttributes {
  row?: string | undefined;
  cell?: string | undefined;
  rowspan?: string | undefined;
  colspan?: string | undefined;
}
interface TableColAttributes {
  width?: string | undefined;
}
interface ListAttributes {
  row?: string | undefined;
  cell?: string | undefined;
  rowspan?: string | undefined;
  colspan?: string | undefined;
  list: ListType;
}
interface BlockquoteAttributes {
  row?: string | undefined;
  cell?: string | undefined;
  rowspan?: string | undefined;
  colspan?: string | undefined;
  'in-list'?: string | undefined;
  'wrapper-indent'?: string | undefined;
}
interface IOpAttributes {
  background?: string | undefined;
  color?: string | undefined;
  font?: string | undefined;
  size?: string | undefined;
  width?: string | undefined;
  link?: string | undefined;
  bold?: boolean | undefined;
  italic?: boolean | undefined;
  underline?: boolean | undefined;
  strike?: boolean | undefined;
  script?: ScriptType;
  code?: boolean | undefined;
  list?: ListAttributes;
  blockquote?: BlockquoteAttributes;
  'code-block'?: string | boolean | undefined;
  header?: number | undefined;
  align?: AlignType;
  direction?: DirectionType;
  indent?: number | undefined;
  table?: string | undefined;
  'table-cell-line'?: TableCellLineAttributes | undefined;
  row?: string | undefined;
  colspan?: string | undefined;
  rowspan?: string | undefined;
  'table-col'?: TableColAttributes | undefined;
  mentions?: boolean | undefined;
  mention?: IMention | undefined;
  target?: string | undefined;
  rel?: string | undefined;
  renderAsBlock?: boolean | undefined;
  [key: string]: any;
}
interface IUrlSanitizerFn {
  (url: string): string | undefined;
}
interface IOpAttributeSanitizerOptions {
  urlSanitizer?: IUrlSanitizerFn;
}
declare class OpAttributeSanitizer {
  static sanitize(
    dirtyAttrs: IOpAttributes,
    sanitizeOptions: IOpAttributeSanitizerOptions
  ): IOpAttributes;
  static sanitizeLinkUsingOptions(
    link: string,
    options: IOpAttributeSanitizerOptions
  ): string;
  static IsValidHexColor(colorStr: string): boolean;
  static IsValidColorLiteral(colorStr: string): boolean;
  static IsValidRGBColor(colorStr: string): boolean;
  static IsValidFontName(fontName: string): boolean;
  static IsValidSize(size: string): boolean;
  static IsValidWidth(width: string): boolean;
  static isValidTarget(target: string): boolean;
  static IsValidRel(relStr: string): boolean;
  static IsValidLang(lang: string | boolean): boolean;
}
export { OpAttributeSanitizer, IOpAttributes, IOpAttributeSanitizerOptions };
