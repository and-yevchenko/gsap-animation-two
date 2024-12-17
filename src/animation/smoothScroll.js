export function smoothScroll() {
    let scrollTarget = window.scrollY;
    let isScrolling = false;

    window.addEventListener(
        'wheel',
        (event) => {
            event.preventDefault();
            scrollTarget += event.deltaY;
            scrollTarget = Math.max(
                0,
                Math.min(
                    scrollTarget,
                    document.body.scrollHeight - window.innerHeight
                )
            );
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScrollAnimation);
            }
        },
        { passive: false }
    );

    function smoothScrollAnimation() {
        const currentScroll = window.scrollY;
        const distance = scrollTarget - currentScroll;
        const smoothFactor = 0.03;

        if (Math.abs(distance) > 0.5) {
            window.scrollTo(0, currentScroll + distance * smoothFactor);
            requestAnimationFrame(smoothScrollAnimation);
        } else {
            isScrolling = false;
        }
    }
}
