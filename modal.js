const modal = document.querySelector('.category-modal')

let selectedCategory = null;
let currentModal = null;

function openCategoryModal() {
    modal.style.display = 'block'
}

function closeCategoryModal() {
    modal.style.display = 'none';
}
