import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const ringRef = useRef(null);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // Track mouse position instantly
    const mouse = useRef({ x: 0, y: 0 });
    // Track the delayed position for the outer ring
    const delayedMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        let rafId;

        // The animation loop for the buttery-smooth trailing effect
        const animate = () => {
            // Lerp factor: Lower = more delay/smoother. Higher = faster/tighter.
            const lerp = 0.35;

            delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * lerp;
            delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * lerp;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafId = requestAnimationFrame(animate);
        };
        animate();

        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);
        const onMouseLeave = () => setIsHidden(true);
        const onMouseEnter = () => setIsHidden(false);

        const addHoverListeners = () => {
            document.querySelectorAll('a, button, input, textarea, select, .clickable').forEach((el) => {
                // Remove old listeners to prevent duplicates
                el.removeEventListener('mouseenter', () => setIsHovering(true));
                el.removeEventListener('mouseleave', () => setIsHovering(false));

                // Add fresh listeners
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        addHoverListeners();
        document.body.style.cursor = 'none';

        // Ensures dynamically loaded links also get the hover effect
        const observer = new MutationObserver(() => addHoverListeners());
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            observer.disconnect();
            document.body.style.cursor = 'auto';
        };
    }, []);

    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null;

    return (
        <>
            {/* Outer Ring: Smooth, trailing, elegant */}
            <div
                ref={ringRef}
                className={`cursor-ring ${isHidden ? 'hidden' : ''} ${isHovering ? 'hovering' : ''} ${isClicked ? 'clicked' : ''}`}
            />

            <style>{`
                :root {
                    /* Refined gold to match your website typography */
                    --cursor-gold: #C8A96E; 
                }

                * {
                    cursor: none !important;
                }

                /* --- OUTER RING ONLY --- */
                .cursor-ring {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 20px; /* Smaller radius */
                    height: 20px;
                    border: 2px solid var(--cursor-gold);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    /* Notice we only transition visual properties, NOT transform. 
                       Transform is handled by our high-speed requestAnimationFrame loop. */
                    transition: width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, border-width 0.2s ease-out, opacity 0.2s ease-in-out;
                }

                .cursor-ring.hidden {
                    opacity: 0;
                }

                /* The Premium Hover State */
                .cursor-ring.hovering {
                    width: 44px;
                    height: 44px;
                    background-color: rgba(200, 169, 110, 0.1);
                    border-width: 1px;
                    /* Optional: Adds a slight glass/blur effect behind the ring */
                    backdrop-filter: blur(2px); 
                }

                .cursor-ring.clicked {
                    width: 16px;
                    height: 16px;
                    background-color: rgba(200, 169, 110, 0.2);
                    border-width: 2px;
                }
            `}</style>
        </>
    );
}