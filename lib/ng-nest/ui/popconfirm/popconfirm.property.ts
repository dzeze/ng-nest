import { XPlacement, XTemplate, XProperty } from '@ng-nest/ui/core';
import { XPopoverTrigger } from '@ng-nest/ui/popover';
import { Input, Output, EventEmitter, Component, Directive } from '@angular/core';

/**
 * Popconfirm
 * @selector x-popconfirm
 * @decorator component
 */
export const XPopconfirmPrefix = 'x-popconfirm';

/**
 * Popconfirm Property
 */
@Component({ template: '' })
export class XPopconfirmProperty extends XProperty {
  /**
   * 标题，支持自定义模板
   */
  @Input() title?: XTemplate;
  /**
   * 内容，支持自定义模板
   */
  @Input() content?: XTemplate;
  /**
   * 弹出的位置
   */
  @Input() placement: XPlacement = 'bottom';
  /**
   * 激活方式
   */
  @Input() trigger: XPopoverTrigger = 'click';
  /**
   * 宽度
   */
  @Input() width: string = '10rem';
  /**
   * 图标
   */
  @Input() icon: string = 'fto-help-circle';
  /**
   * 图标颜色
   */
  @Input() iconColor: string = '#e6a23c';
  /**
   * 取消的文字
   */
  @Input() cancelText: string = '取消';
  /**
   * 确认的文字
   */
  @Input() confirmText: string = '确认';
  /**
   * 取消的点击事件
   */
  @Output() cancel = new EventEmitter();
  /**
   * 确认的点击事件
   */
  @Output() confirm = new EventEmitter();
}
