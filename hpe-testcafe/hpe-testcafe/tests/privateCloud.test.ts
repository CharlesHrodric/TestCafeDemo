import { ClientFunction, t } from 'testcafe';
import PrivateCloudPage from '../pages/PrivateCloudPage';
import GreenLakePage from '../pages/GreenLakePage';

/**
 * Tests for the HPE Private Cloud solutions page. Each test exercises a
 * distinct user journey to demonstrate TestCafe functionality without
 * triggering any purchase or signup workflows.
 */
fixture`HPE Private Cloud Solutions`
  .page`https://www.hpe.com/us/en/private-cloud-solutions.html`;

/**
 * Retrieves the current browser URL. When verifying cross‑page navigation,
 * use this to assert that the user has landed on the expected page.
 */
const getLocation = ClientFunction(() => document.location.href);

test('Verify Private Cloud heading is present', async () => {
  const privateCloud = new PrivateCloudPage();
  await privateCloud.verifyHeader();
});

test('Navigate to HPE GreenLake from Private Cloud page', async () => {
  const privateCloud = new PrivateCloudPage();
  await privateCloud.goToGreenLake();

  // When the new page loads, create the corresponding page object and
  // verify its hero copy. Relying on the page object ensures the test
  // remains robust should the target page structure change.
  const greenLake = new GreenLakePage();
  await greenLake.verifyHeroCopy();

  // Confirm that the URL contains the expected path segment.
  await t.expect(getLocation()).contains('/greenlake.html');
});

test('Navigate to GreenLake Intelligence from Private Cloud page', async () => {
  const privateCloud = new PrivateCloudPage();
  await privateCloud.goToGreenLakeIntelligence();

  // Expect the URL to change to the intelligence overview. Using a
  // substring match keeps the test resilient to locale or parameter
  // variations in the URL.
  await t.expect(getLocation()).contains('/greenlake/intelligence.html');
});