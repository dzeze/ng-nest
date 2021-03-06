import { Input, Output, EventEmitter, Component } from '@angular/core';
import { XStatus, XPlace, XInputBoolean, XTemplate, XEffect, XBoolean, XIsBoolean } from '@ng-nest/ui/core';
import { XAlertProperty, XAlertOption } from '@ng-nest/ui/alert';
import { XPortalOverlayRef } from '@ng-nest/ui/portal';
import { XDialogComponent } from './dialog.component';

/**
 * Dialog
 * @selector x-dialog
 * @decorator component
 */
export const XDialogPrefix = 'x-dialog';

export const XDialogPortal = 'x-dialog-portal';

/**
 * Dialog Property
 */
@Component({ template: '' })
export class XDialogProperty extends XAlertProperty {
  @Input() @XInputBoolean() visible: boolean = false;
  /**
   * 方位，九宫格
   */
  @Input() placement: XPlace = 'center';
  /**
   * 偏移距离
   */
  @Input() offset: string = '1rem';
  /**
   * 类型
   */
  @Input() type: XDialogType = 'info';
  /**
   * 宽度
   */
  @Input() width: string = '40%';
  /**
   * 高度
   */
  @Input() height: string;
  /**
   * 样式主题
   */
  @Input() effect: XEffect = 'white';
  /**
   * 底部自定义模板
   */
  @Input() footer: XTemplate;
  /**
   * 显示取消按钮
   */
  @Input() showCancel: XBoolean = true;
  /**
   * 取消按钮文字
   */
  @Input() cancelText: string = '取消';
  /**
   * 显示确认按钮
   */
  @Input() showConfirm: XBoolean = true;
  /**
   * 确认按钮文字
   */
  @Input() confirmText: string = '确认';
  /**
   * 点击遮罩关闭
   */
  @Input() backdropClose: XBoolean = true;
  /**
   * 是否显示背景遮罩
   */
  @Input() hasBackdrop: XBoolean = true;
  /**
   * 自定义样式名
   */
  @Input() className: string = '';
  /**
   * 按钮居中
   */
  @Input() @XInputBoolean() buttonsCenter: XBoolean;
  /**
   * 关闭前处理函数
   */
  @Input() beforeClose: Function;
  /**
   * 取消按钮的事件
   */
  @Output() cancel = new EventEmitter();
  /**
   * 确认按钮的事件
   */
  @Output() confirm = new EventEmitter();
  /**
   * 显示/隐藏改变事件
   */
  @Output() visibleChange = new EventEmitter<boolean>();
}

export interface XDialogOption extends XAlertOption {
  visible?: boolean;
  /**
   * 方位，九宫格
   */
  placement?: XPlace;
  /**
   * 偏移距离
   */
  offset?: string;
  /**
   * 类型
   */
  type?: XDialogType;
  /**
   * 宽度
   */
  width?: string;
  /**
   * 高度
   */
  height?: string;
  /**
   * 样式主题
   */
  effect?: XEffect;
  /**
   * 底部自定义模板
   */
  footer?: XTemplate;
  /**
   * 显示取消按钮
   */
  showCancel?: XBoolean;
  /**
   * 取消按钮文字
   */
  cancelText?: string;
  /**
   * 显示确认按钮
   */
  showConfirm?: XBoolean;
  /**
   * 确认按钮文字
   */
  confirmText?: string;
  /**
   * 点击遮罩关闭
   */
  backdropClose?: XBoolean;
  /**
   * 是否显示背景遮罩
   */
  hasBackdrop?: XBoolean;
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 按钮居中
   */
  buttonsCenter?: XBoolean;
  /**
   * 关闭前处理函数
   */
  beforeClose?: Function;
}

export interface XDialogCallback {
  (action: XDialogAction, message?: string): void;
}

export type XDialogAction = 'confirm' | 'cancel';

/**
 * 创建的消息对象
 */
export interface XDialogOverlayRef extends XPortalOverlayRef<XDialogComponent> {}

export interface XDialogRef {
  ref?: XDialogOverlayRef;
  input?: XDialogProperty;
}

/**
 * 类型
 */
export type XDialogType = XStatus;
