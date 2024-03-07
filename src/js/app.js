window.addEventListener('resize', updateStickyBackground);

window.addEventListener('scroll', updateStickyBackground);

function updateStickyBackground() {
    const filter = $('.st-filter');
    const filterBox = $('.st-filter__box');

    const distanceFromTop = filter.offset().top - $(window).scrollTop();

    if (distanceFromTop <= 0) {
        filter.addClass('stuck');
        filterBox.addClass('bg')
    } else {
        filter.removeClass('stuck');
        filterBox.removeClass('bg')
    }
}

$('.st-date').datepicker({
    format: "dd/mm/yyyy",
    startDate: "hoy",
    language: "es",
    autoclose: true,
    orientation: "bottom auto"
});