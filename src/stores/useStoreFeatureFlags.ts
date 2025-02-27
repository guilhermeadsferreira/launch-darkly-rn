import { create } from 'zustand';

const defaultFlags = {
  home_banner: false,
  home_modules: [],
};

type Flags = {
  home_banner: boolean;
  home_modules: string[];
};

type Props = {
  flags: Flags;
  setFeatureFlags: (featureFlags: Record<string, any>) => void;
};

export const useStoreFeatureFlags = create<Props>(set => ({
  flags: defaultFlags,
  setFeatureFlags: flags => set({ flags: { ...defaultFlags, ...flags } }),
}));
