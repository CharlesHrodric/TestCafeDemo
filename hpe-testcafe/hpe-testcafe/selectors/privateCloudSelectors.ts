/**
 * Selector dictionary for the HPE Private Cloud solutions page.
 *
 * Each entry exposes both the CSS selector and the expected text content for
 * the corresponding element. Test scripts and page objects import this
 * dictionary to avoid hard‑coding selectors directly in the test logic.
 */
const PrivateCloudSelectors = {
  /**
   * The main page heading that introduces the Private Cloud solution.
   */
  header: {
    selector: 'h1.txto-title',
    text: 'Private cloud solutions'
  },

  /**
   * Call‑to‑action button that navigates to the HPE GreenLake landing page.
   */
  exploreGreenLake: {
    selector: 'a.gn-callout-btn.cta.btn-landmark.primary.small',
    text: 'Explore HPE GreenLake'
  },

  /**
   * Call‑to‑action button that navigates to the GreenLake Intelligence page.
   */
  exploreGreenLakeIntelligence: {
    selector: 'a.gn-callout-btn.cta.btn-landmark.primary.small',
    text: 'Explore GreenLake Intelligence'
  }
} as const;

export default PrivateCloudSelectors;