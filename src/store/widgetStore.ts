"use client";

import { create } from "zustand";

interface Widget {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
}

interface WidgetState {
  widgetList: Widget[];
  selectedWidget: Widget | null;
  setWidgetList: (widgets: Widget[]) => void;
  setSelectedWidget: (widget: Widget | null) => void;
}

export const useWidgetStore = create<WidgetState>((set) => ({
  widgetList: [],
  selectedWidget: null,
  setWidgetList: (widgets) => set({ widgetList: widgets }),
  setSelectedWidget: (widget) => set({ selectedWidget: widget }),
}));
