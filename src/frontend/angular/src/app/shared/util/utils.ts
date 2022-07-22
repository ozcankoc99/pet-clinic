import { ToastEvent } from '../model/toast-event';

export class Utils {
  static RemoveElementFromObjectArray(objectArray: any[], item: any) {
    objectArray.forEach((value, index) => {
      if (value == item) objectArray.splice(index, 1);
    });
  }
  public static hasOneOrMoreItems(value: any): boolean {
    return Array.isArray(value) && value.length > 0;
  }

  public static uuid12(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + s4();
  }
  public static uuid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }

  static getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: object | null) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  public static removeCycle(deger: any): any {
    if (deger === undefined || deger === null) {
      return deger;
    }
    const text = Utils.cycleFreeStringify(deger);
    return JSON.parse(text); //JsonNetDecycle.decycle(deger);
  }

  public static cycleFreeStringify(deger: any): string {
    return JSON.stringify(deger, Utils.getCircularReplacer());
  }

  public static cycleFreeStringify2 = function (v: any) {
    const cache = new Set();
    return JSON.stringify(v, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          // Circular reference found
          try {
            // If this value does not reference a parent it can be deduped
            return JSON.parse(JSON.stringify(value));
          } catch (err) {
            // discard key if value cannot be deduped
            return;
          }
        }
        // Store value in our set
        cache.add(value);
      }
      return value;
    });
  };
}
