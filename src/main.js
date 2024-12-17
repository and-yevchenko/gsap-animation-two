'use strict';

import gsap from 'gsap';
import { runAnimations } from './animation/runAnimations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (ScrollTrigger.isTouch !== 1) { //no mobile
    runAnimations();
}
