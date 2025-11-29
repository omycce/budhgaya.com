import React from 'react';
import styles from './PageContainer.module.css';

/**
 * Shared container component for consistent page layout and alignment
 * All standalone pages should use this for consistent styling
 */
function PageContainer({ children, className = '' }) {
  return (
    <div className={`${styles.pageContainer} ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;

