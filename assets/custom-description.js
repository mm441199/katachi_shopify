const infoTab = document.querySelectorAll('.info-tab__item');
const infoPanel = document.querySelectorAll('.info-panel__item');

document.addEventListener('DOMContentLoaded', function() {
  for(let i = 0;i< infoTab.length; i++) {
    infoTab[i].addEventListener('click', switchInformation);
  }

  function switchInformation() {
    document.querySelector('.info-tab__item[aria-selected="true"]').setAttribute('aria-selected', 'false');
    this.setAttribute('aria-selected', true);

    document.querySelector('.info-panel__item[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
    const arrayInfoTabs = Array.prototype.slice.call(infoTab);
    const index = arrayInfoTabs.indexOf(this);
    document.querySelectorAll('.info-panel__item')[index].setAttribute('aria-hidden', 'false');
  }
});