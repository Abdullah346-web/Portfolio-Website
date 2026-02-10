// Helper functions for common operations

/**
 * Format date to readable string
 * @param {Date} date - Date to format
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, length = 100) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

/**
 * Handle smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
export const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
};
