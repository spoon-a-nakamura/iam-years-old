import gsap from 'gsap';

if (typeof window !== 'undefined') {
  import('gsap/ScrollToPlugin').then(({ ScrollToPlugin }) => {
    gsap.registerPlugin(ScrollToPlugin);
  });
}

export async function smoothScrollTo(
  position: number,
  scrollTarget: Window | HTMLElement = window,
) {
  return gsap.to(scrollTarget, {
    scrollTo: position,
    duration: 0.8,
    ease: 'power3.out',
  });
}
