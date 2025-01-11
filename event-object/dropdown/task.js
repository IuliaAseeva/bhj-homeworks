const dropdowns = document.querySelectorAll(".dropdown");


function dropdownLink(event) {
	event.preventDefault();

	const dropdownValue = event.currentTarget.closest(".dropdown").querySelector(".dropdown__value");
	dropdownValue.textContent = event.target.textContent.trim();
	event.currentTarget.closest(".dropdown__list").classList.remove("dropdown__list_active");
}

dropdowns.forEach((dropdown) => {
	const dropdownValue = dropdown.querySelector(".dropdown__value");
	const dropdownList = dropdown.querySelector(".dropdown__list");
	dropdownValue.addEventListener("click", () => {
		dropdownList.classList.toggle('dropdown__list_active');
    });
    dropdownList.addEventListener("click", (event) => {
        if (event.target.classList.contains("dropdown__link")) {
            dropdownLink(event);
        }
    });
});