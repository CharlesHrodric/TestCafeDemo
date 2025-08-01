import { Selector, t } from 'testcafe';
import GreenLakeSelectors from '../selectors/greenLakeSelectors';

/**
 * Page object for the HPE GreenLake landing page. Encapsulates selectors and
 * actions to promote reuse across multiple test cases.
 */
export default class GreenLakePage {
  public readonly heroText: Selector;
  public readonly explainerVideoBtn: Selector;
  public readonly exploreIntelligenceBtn: Selector;
  public readonly unifyDataHeading: Selector;

  constructor() {
    // Set up selectors with text filters to precisely target the intended
    // elements.
    this.heroText = Selector(GreenLakeSelectors.heroText.selector).withText(
      GreenLakeSelectors.heroText.text
    );

    this.explainerVideoBtn = Selector(
      GreenLakeSelectors.watchExplainerVideo.selector
    ).withText(GreenLakeSelectors.watchExplainerVideo.text);

    this.exploreIntelligenceBtn = Selector(
      GreenLakeSelectors.exploreGreenLakeIntelligence.selector
    ).withText(GreenLakeSelectors.exploreGreenLakeIntelligence.text);

    this.unifyDataHeading = Selector(
      GreenLakeSelectors.unifyDataHeading.selector
    ).withText(GreenLakeSelectors.unifyDataHeading.text);
  }

  /**
   * Verifies that the hero copy on the GreenLake page is visible.
   */
  async verifyHeroCopy(): Promise<void> {
    await t.expect(this.heroText.exists).ok('GreenLake hero copy is visible');
    await t
      .expect(this.heroText.innerText)
      .contains(GreenLakeSelectors.heroText.text);
  }

  /**
   * Clicks the “Watch the explainer video” call‑to‑action. This opens a
   * modal overlay on the same page. The test may additionally verify that
   * the overlay becomes visible after clicking.
   */
  async watchExplainerVideo(): Promise<void> {
    await t.click(this.explainerVideoBtn);
  }

  /**
   * Navigates from the GreenLake landing page to the GreenLake Intelligence
   * overview.
   */
  async exploreGreenLakeIntelligence(): Promise<void> {
    await t.click(this.exploreIntelligenceBtn);
  }

  /**
   * Scrolls into view and verifies the presence of the unified data heading
   * within the card grid.
   */
  async verifyUnifyDataHeading(): Promise<void> {
    await t.scrollIntoView(this.unifyDataHeading);
    await t.expect(this.unifyDataHeading.exists).ok();
  }
}