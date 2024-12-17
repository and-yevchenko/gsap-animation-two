import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function galleryAnimation() {
    const lefrItems = gsap.utils.toArray('.gallery-left .gallery-item');
    lefrItems.forEach((item) => {
        gsap.fromTo(
            item,
            {
                opacity: 0,
                x: -150,
                y: -50,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: '-100',
                    end: 'bottom',
                    scrub: true,
                },
            }
        );
    });
    const rightItems = gsap.utils.toArray('.gallery-right .gallery-item');
    rightItems.forEach((item) => {
        gsap.fromTo(
            item,
            {
                opacity: 0,
                x: 150,
                y: -50,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: '-100',
                    end: 'bottom',
                    scrub: true,
                },
            }
        );
    });
}
