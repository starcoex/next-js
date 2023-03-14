import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const isDarkState = atom({
  key: 'isDark',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
