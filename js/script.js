$(document).on('click', 'a href[="#'),
  function (e) {
    e.preventDefault();
  };

$(function () {
  // scrolla
  $('.animate').scrolla({
    mobile: true,
    once: false,
  });

  Splitting();

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('section');

  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      pin: true,
      pinSpacing: false,
      scrub: 3,
      markers: false,
    });
  });

  ScrollTrigger.create({
    snap: 1 / (sections.length - 1),
  });
});
