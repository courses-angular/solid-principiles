export interface WidgetModel {
  id: string;
}

export interface Reloadable {
  liveReloading: boolean;
  reload(): void;
}
