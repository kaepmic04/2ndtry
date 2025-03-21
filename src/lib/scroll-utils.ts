export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.warn(`Section with id "${sectionId}" not found`);
    return;
  }

  try {
    const navbarHeight = 64; // Height of the fixed navbar
    const sectionRect = section.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + sectionRect.top;
    const targetPosition = absoluteTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } catch (error) {
    console.error('Error scrolling to section:', error);
  }
}