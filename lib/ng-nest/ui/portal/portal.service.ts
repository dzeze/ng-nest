import { Injectable, TemplateRef, Injector, InjectionToken, ElementRef } from '@angular/core';
import { Overlay, OverlayRef, PositionStrategy, ConnectedPosition, ComponentType } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { XPortalProperty, XPortalOverlayRef, XPortalPlacement } from './portal.property';
import { XPlacement, XPosition, XPlace, XIsArray, XInvertKeyValues } from '@ng-nest/ui/core';

/**
 * 动态创建视图服务
 */
@Injectable()
export class XPortalService {
  constructor(public overlay: Overlay, public injector: Injector) {}

  attach<T>(option: XPortalProperty): XPortalOverlayRef<T> {
    let portal: XPortalOverlayRef<T> = {};
    if (typeof option.content === 'undefined') return portal;
    portal.overlayRef = this.createOverlayRef(option);
    if (option.content instanceof TemplateRef && option.viewContainerRef) {
      portal.templatePortal = new TemplatePortal(option.content, option.viewContainerRef, option.context);
      portal.embeddedViewRef = portal.overlayRef.attach(portal.templatePortal);
    } else {
      portal.componentPortal = new ComponentPortal(
        option.content as ComponentType<any>,
        option.viewContainerRef,
        option.injector,
        option.componentFactoryResolver
      );
      portal.componentRef = portal.overlayRef.attach(portal.componentPortal);
    }

    return portal;
  }

  createInjector(data: any, token: InjectionToken<any>): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(token, data);
    return new PortalInjector(this.injector, injectorTokens);
  }

  setPlacement(elementRef?: ElementRef, ...placement: XPlace[] | XPlacement[]): PositionStrategy {
    if (!elementRef) {
      return this.overlay.position().global().centerHorizontally().centerVertically();
    } else {
      return this.overlay
        .position()
        .flexibleConnectedTo(elementRef)
        .withPositions(this.setConnectedPosition(...placement))
        .withLockedPosition(true);
    }
  }

  setPosition(position?: XPosition, width?: string, height?: string): PositionStrategy {
    let result = this.overlay.position().global().width(width).height(height);
    switch (position) {
      case 'left':
        return result.left();
      case 'right':
        return result.right();
      case 'top':
        return result.top();
      case 'bottom':
      default:
        return result.bottom();
    }
  }

  setPlace(place?: XPlace, width?: string, height?: string, ...offset: string[]): PositionStrategy {
    let result = this.overlay.position().global().width(width).height(height);
    if (offset.length === 0) offset = Array.from({ length: 4 }).map(() => `0`);
    else if (offset.length < 4) {
      Array.from({ length: 4 - offset.length }).map(() => (offset = [...offset, offset[offset.length - 1]]));
    }
    let [top, right, bottom, left] = offset;
    switch (place) {
      case 'top-start':
        return result.top(top).left(right);
      case 'top':
        return result.centerHorizontally().top(top);
      case 'top-end':
        return result.top(bottom).right(left);
      case 'left':
        return result.centerVertically().left(left);
      case 'center':
        return result.centerVertically().centerHorizontally();
      case 'right':
        return result.centerVertically().right(right);
      case 'bottom-start':
        return result.bottom(bottom).left(left);
      case 'bottom':
        return result.centerHorizontally().bottom(bottom);
      case 'bottom-end':
        return result.bottom(bottom).right(right);
      default:
        return result.centerVertically().centerHorizontally();
    }
  }

  private createOverlayRef(option: XPortalProperty): OverlayRef {
    return this.overlay.create(option.overlayConfig);
  }

  setConnectedPosition(...placement: XPlace[] | XPlacement[]): ConnectedPosition[] {
    let result: ConnectedPosition[] = [];
    placement.forEach((place: XPlace | XPlacement) => result.push(XPortalPlacement[place]));
    return result;
  }
}
