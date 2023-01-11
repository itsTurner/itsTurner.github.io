const TooltipFollowsCursor = () => {
    const tooltipSpan = document.querySelectorAll('.tooltip')

    tooltipSpan.forEach((tooltip) => {
        const desc = tooltip.querySelector('.desc')
        tooltip.addEventListener('mousemove', (e) => {
            desc.style.top = (e.clientY + 1) + 'px'
            desc.style.left = (e.clientX + 1) + 'px'
        })
    })
}

window.addEventListener('load', TooltipFollowsCursor)