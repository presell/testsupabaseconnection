// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/copy_of_feed_presell_ai/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/copy_of_feed_presell_ai/PlasmicGlobalVariant__Screen";
import { ExperimentContext } from "../components/plasmic/copy_of_feed_presell_ai/PlasmicGlobalVariant__Experiment";
import { PlasmicOffer2 } from "../components/plasmic/copy_of_feed_presell_ai/PlasmicOffer2";
import { useRouter } from "next/router";

function Offer2() {
  // Use PlasmicOffer2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicOffer2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicOffer2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ExperimentContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <ph.PageParamsProvider
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicOffer2 />
        </ph.PageParamsProvider>
      </GlobalContextsProvider>
    </ExperimentContext.Provider>
  );
}

export default Offer2;
