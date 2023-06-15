const observeSection = () => {
	const hiddenSection = document.querySelectorAll('.hidden-section');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
		});
	});

	hiddenSection.forEach((el) => observer.observe(el));
};

export default observeSection;
