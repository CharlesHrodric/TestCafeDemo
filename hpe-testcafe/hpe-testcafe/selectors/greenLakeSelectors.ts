/**
 * Selector dictionary for the HPE GreenLake landing page.
 *
 * Each entry defines both the CSS selector for the element and the expected
 * text contained within that element. This dictionary is consumed by the
 * page object to build robust TestCafe Selectors at runtime.
 */
const GreenLakeSelectors = {
  /**
   * The introductory copy on the GreenLake landing page. This text appears in
   * a large paragraph element rather than a traditional heading, so we match
   * the span containing the body‑copy class.
   */
  heroText: {
    selector: 'span.body-copy-large',
    text: 'HPE GreenLake brings the cloud experience'
  },

  /**
   * Primary call‑to‑action button that opens a modal with an explainer video.
   */
  watchExplainerVideo: {
    selector: 'a.cta.btn-landmark.primary',
    text: 'Watch the explainer video'
  },

  /**
   * Button that navigates from the GreenLake page to the GreenLake
   * Intelligence overview.
   */
  exploreGreenLakeIntelligence: {
    selector: 'a.cta.btn-landmark.primary',
    text: 'Explore GreenLake Intelligence'
  },

  /**
   * Section heading emphasising unified data management across the hybrid
   * estate. Located in a card grid component lower down the page.
   */
  unifyDataHeading: {
    selector: 'h4.txto-title.tag-h4',
    text: 'Unify data across edge to cloud'
  }
} as const;

export default GreenLakeSelectors;