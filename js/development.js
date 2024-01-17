document.querySelectorAll('.detailsContent').forEach(function(element) {
  const detailsContentHeight = element.offsetHeight
  const details =  element.closest('details')
  const detailstHeight = details.offsetHeight
  const totalHeight = detailsContentHeight + detailstHeight
  details.style.setProperty('--detailsHeightClosed',detailstHeight + "px");
  details.style.setProperty('--detailsHeightOpened',totalHeight + "px");
})

document.addEventListener('click', function (event) {
  if (event.target.matches('summary')) {
    const detailsTargeted = event.target.closest('details')
    detailsTargeted.classList.toggle('detailsOpened');
  }
})
