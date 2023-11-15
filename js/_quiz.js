const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.quiz');
    console.log(elTab);
    if (elTabBtn.classList.contains('active')) {
        return;
    }
    const targetId = elTabBtn.dataset.targetId;
    console.log(targetId);
    const elTabPane = elTab.querySelector(`.quiz__item[data-id="${targetId}"]`);
    console.log(elTabPane);
    if (elTabPane) {
        const elTabPaneShow = elTab.querySelector('.quiz__item.active');
        elTabPaneShow.classList.remove('active');
        elTabPane.classList.add('active');
    }
}

document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.quiz__nav')) {
        return;
    }
    const elTabBtn = e.target.closest('.quiz__nav');
    showTab(elTabBtn);
});