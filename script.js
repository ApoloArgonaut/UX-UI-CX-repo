const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('is-active');
      item.setAttribute('aria-selected', 'false');
    });

    panels.forEach((panel) => {
      panel.classList.remove('is-active');
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    const target = document.getElementById(tab.dataset.tab);
    if (target) {
      target.classList.add('is-active');
    }
  });
});
