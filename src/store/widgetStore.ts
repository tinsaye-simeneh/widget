"use client";

import { create } from "zustand";

interface Comment {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  likes: number;
}

interface Widget {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
  comments: Comment[]; // Add comments to each widget
}

interface WidgetState {
  widgetList: Widget[];
  selectedWidget: Widget | null;
  setWidgetList: (widgets: Widget[]) => void;
  setSelectedWidget: (widget: Widget | null) => void;
  addComment: (widgetId: string, comment: Comment) => void; // Action to add a comment
}

export const useWidgetStore = create<WidgetState>((set) => ({
  widgetList: [],
  selectedWidget: null,
  setWidgetList: (widgets) => set({ widgetList: widgets }),
  setSelectedWidget: (widget) => set({ selectedWidget: widget }),
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
