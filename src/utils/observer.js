const observeSection = () => {
	const hiddenSection = document.querySelectorAll('.hidden-section');
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');

				// Stop observing the element after it becomes visible
				observer.unobserve(entry.target);
			} else {
				entry.target.classList.remove('show');
			}
		});
	});

	hiddenSection.forEach((el) => observer.observe(el));
};

export default observeSection;
