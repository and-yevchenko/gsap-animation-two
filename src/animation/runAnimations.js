import { galleryAnimation } from "./gallery"
import { smoothScroll } from "./smoothScroll"
import { startscreenAnimation } from "./startscreen"

export function runAnimations() {
    smoothScroll()
    startscreenAnimation()
    galleryAnimation()
}