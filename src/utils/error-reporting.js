/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

import { isDevelopment } from "devtools-config";
import Raven from "raven-js";

export default function setupErrorReporting() {
  if (isDevelopment()) {
    // return;
  }
  const raven = Raven.config(
    "https://5c59e6e8dab14982a79f1dc64834f539@sentry.io/272759"
  ).install();
  console.log(raven);
  window.raven = raven;

  return raven;
}
