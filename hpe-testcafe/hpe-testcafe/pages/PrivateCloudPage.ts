import { Selector, t } from 'testcafe';
import PrivateCloudSelectors from '../selectors/privateCloudSelectors';

/**
 * Page object encapsulating all interactions with the HPE Private Cloud
 * solutions page. By centralising selectors and high‑level actions here, the
 * tests themselves remain clear and declarative.
 */
export default class PrivateCloudPage {
  // Selectors defined using the values from the dictionary. We use withText
  // to narrow the matches down to a specific button when multiple elements
  // share the same CSS classes.
  public readonly header: Selector;
  public readonly exploreGreenLakeBtn: Selector;
  public readonly exploreIntelligenceBtn: Selector;

  constructor() {
    // Main heading
    this.header = Selector(PrivateCloudSelectors.header.selector).withText(
      PrivateCloudSelectors.header.text
    );

    // CTA buttons
    this.exploreGreenLakeBtn = Selector(
      PrivateCloudSelectors.exploreGreenLake.selector
    ).withText(PrivateCloudSelectors.exploreGreenLake.text);

    this.exploreIntelligenceBtn = Selector(
      PrivateCloudSelectors.exploreGreenLakeIntelligence.selector
    ).withText(PrivateCloudSelectors.exploreGreenLakeIntelligence.text);
  }

  /**
   * Assert that the page heading exists and contains the expected text.
   */
  async verifyHeader(): Promise<void> {
    await t.expect(this.header.exists).ok('Private Cloud heading is visible');
    await t
      .expect(this.header.innerText)
      .contains(PrivateCloudSelectors.header.text);
  }

  /**
   * Clicks the “Explore HPE GreenLake” button. The caller is responsible for
   * asserting navigation by instantiating a new page object and verifying
   * content on the target page.
   */
  async goToGreenLake(): Promise<void> {
    await t.click(this.exploreGreenLakeBtn);
  }

  /**
   * Clicks the “Explore GreenLake Intelligence” button.
   */
  async goToGreenLakeIntelligence(): Promise<void> {
    await t.click(this.exploreIntelligenceBtn);
  }
}