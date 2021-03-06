import { XData, XParentIdentityProperty, XControlValueAccessor, XDataConvert, XInputNumber, XInputBoolean, XNumber, XBoolean } from '@ng-nest/ui/core';
import { Input, Output, EventEmitter, Component } from '@angular/core';

/**
 * List
 * @selector x-list
 * @decorator component
 */
export const XListPrefix = 'x-list';

/**
 * List Property
 */
@Component({ template: '' })
export class XListProperty extends XControlValueAccessor<any> {
  /**
   * 列表数据
   */
  @Input() @XDataConvert() data: XData<XListNode> = [];
  /**
   * 多选个数
   */
  @Input() @XInputNumber() multiple: XNumber = 1;
  /**
   * 选中
   */
  @Input() @XInputBoolean() checked: XBoolean;
  /**
   * 拖动
   */
  @Input() @XInputBoolean() drag: XBoolean;
  /**
   * 节点 mouseenter 事件
   */
  @Output() nodeMouseenter = new EventEmitter<XListNode>();
  /**
   * 节点 mouseleave 事件
   */
  @Output() nodeMouseleave = new EventEmitter<XListNode>();
  /**
   * 节点点击事件
   */
  @Output() nodeClick = new EventEmitter<XListNode>();
}

/**
 * List 数据对象
 */
export interface XListNode extends XParentIdentityProperty<any> {
  /**
   * 图标
   */
  icon?: string;
  /**
   * 分割线
   */
  divided?: boolean;
  /**
   * 事件
   */
  event?: Event;
  /**
   * hover
   */
  hover?: boolean;
}
