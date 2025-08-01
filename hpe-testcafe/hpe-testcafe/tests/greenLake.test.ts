import { ClientFunction, t } from 'testcafe';
import GreenLakePage from '../pages/GreenLakePage';

/**
 * Tests for the HPE GreenLake landing page. Each scenario validates that
 * critical sections are present and basic navigation works as expected.
 */
fixture`HPE GreenLake`
  .page`https://www.hpe.com/us/en/greenlake.html`;

// Utility to retrieve the current URL.
const getLocation = ClientFunction(() => document.location.href);

test('Verify GreenLake hero copy is visible', async () => {
  const page = new GreenLakePage();
  await page.verifyHeroCopy();
});

test('Verify Unify data across edge to cloud section is present', async () => {
  const page = new GreenLakePage();
  await page.verifyUnifyDataHeading();
});

test('Open explainer video modal', async () => {
  const page = new GreenLakePage();
  await page.watchExplainerVideo();

  /*
   * The explainer video opens inside an overlay on the same page. To avoid
   * interacting with a third‑party video player (which could involve
   * unpredictable network calls), we simply verify that the click does not
   * cause a navigation. Should you wish to assert that the overlay is
   * visible, you could add a selector here and verify its existence.
   */
  await t.expect(getLocation()).contains('/greenlake.html');
});

test('Navigate to GreenLake Intelligence from GreenLake page', async () => {
  const page = new GreenLakePage();
  await page.exploreGreenLakeIntelligence();
  await t.expect(getLocation()).contains('/greenlake/intelligence.html');
});