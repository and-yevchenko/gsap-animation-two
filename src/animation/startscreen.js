import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function startscreenAnimation() {
    gsap.fromTo(
        '.header',
        {
            opacity: 1,
        },
        {
            scrollTrigger: {
                trigger: '.header',
                start: 'center',
                end: '720',
                scrub: true,
            },
            opacity: 0,
        }
    );

    gsap.to('.header-title', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: true,
        },
        yPercent: -50,
        opacity: 0.5,
    });

    const tl = gsap.timeline();
    tl.fromTo(
        '.header-title',
        {
            x: -100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
        },
        0.5
    );
}
