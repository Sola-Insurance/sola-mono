import { unstable_flag as flag } from '@vercel/flags/next';


export const showComponent = flag({
  key: 'show-component',
  decide: () => true,
})


export const showBanner = flag({
  key: 'banner',
  decide: () => false,
})
 