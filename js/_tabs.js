const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.tabs');
    console.log(elTab);
    if (elTabBtn.classList.contains('active')) {
        return;
    }
    const targetId = elTabBtn.dataset.targetId;
    const elTabPane = elTab.querySelector(`.tab[data-id="${targetId}"]`);
    console.log(elTabPane);
    if (elTabPane) {
        const elTabBtnActive = elTab.querySelector('.tabs__link.active');
        elTabBtnActive.classList.remove('active');
        const elTabPaneShow = elTab.querySelector('.tab__show');
        elTabPaneShow.classList.remove('tab__show');
        elTabBtn.classList.add('active');
        elTabPane.classList.add('tab__show');
    }
}

document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.tabs__link')) {
        return;
    }
    const elTabBtn = e.target.closest('.tabs__link');
    showTab(elTabBtn);
});