// store/widgetStore.ts
"use client";

import { create } from "zustand";
import { Widget, Comment } from "../types/widget";

interface WidgetState {
  widgetList: Widget[];
  selectedWidget: Widget | null;
  setWidgetList: (widgets: Widget[]) => void;
  setSelectedWidget: (
    widget: Widget | null | ((prev: Widget | null) => Widget | null)
  ) => void;
  addComment: (widgetId: string, comment: Comment) => void;
}

export const useWidgetStore = create<WidgetState>((set) => ({
  widgetList: [],
  selectedWidget: null,
  setWidgetList: (widgets) => set({ widgetList: widgets }),
  setSelectedWidget: (widget) =>
    set((state) => ({
      selectedWidget:
        typeof widget === "function" ? widget(state.selectedWidget) : widget,
    })),
  addComment: (widgetId, comment) =>
    set((state) => {
      const updatedWidgetList = state.widgetList.map((widget) =>
        widget.id === widgetId
          ? { ...widget, comments: [...(widget.comments || []), comment] }
          : widget
      );
      const updatedSelectedWidget =
        state.selectedWidget && state.selectedWidget.id === widgetId
          ? {
              ...state.selectedWidget,
              comments: [...(state.selectedWidget.comments || []), comment],
            }
          : state.selectedWidget;

      return {
        widgetList: updatedWidgetList,
        selectedWidget: updatedSelectedWidget,
      };
    }),
}));
