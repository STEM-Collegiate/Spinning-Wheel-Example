$(document).ready(function () {
    const $stage = $('#stage');
    const ITEM_SIZE = 15; // px
    let angleDeg = 0;
    let lastTime = performance.now();
    const speed = 30;
    let elements = 30;
    const radius = 200;

    function renderItems() {
        const n = elements;
        const r = radius;
        $stage.empty();
        for (let i = 0; i < n; i++) {
            const baseAngle = (i / n) * 360;
            const $d = $('<div>', { class: 'item' }).css({
                transform: `translate(-50%, -50%) rotate(${baseAngle}deg) translateX(${r}px)`,
                height: ITEM_SIZE,
                width: ITEM_SIZE
            });
            $stage.append($d);
        }
    }

    function tick(now) {
        const dt = (now - lastTime) / 1000;
        lastTime = now;
        angleDeg = (angleDeg + speed * dt) % 360;

        // Orbit via stage rotation
        $stage.css('transform', `rotate(${angleDeg}deg)`);
        requestAnimationFrame(tick);
    }

    renderItems();
    requestAnimationFrame(tick);
});