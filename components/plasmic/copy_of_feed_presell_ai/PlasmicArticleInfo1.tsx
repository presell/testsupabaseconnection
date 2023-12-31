// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oxby7mL3tramyYPU9d77Uw
// Component: PhFu1ex84_-Q

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: vjeAXjQ_02/codeComponent
import NavArticle1 from "../../NavArticle1"; // plasmic-import: 201yVou04ILU/component
import BodyArticle1 from "../../BodyArticle1"; // plasmic-import: 7kZ0eP42r4Ge/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import { useScreenVariants as useScreenVariantscylgZgvvaF7G } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CYLGZgvvaF7G/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_offer_theme_1_component_css from "../offer_theme_1_component/plasmic_offer_theme_1_component.module.css"; // plasmic-import: 8JEXBqjqN3wJGHTHZ9qf9H/projectcss
import projectcss from "./plasmic_copy_of_feed_presell_ai.module.css"; // plasmic-import: oxby7mL3tramyYPU9d77Uw/projectcss
import sty from "./PlasmicArticleInfo1.module.css"; // plasmic-import: PhFu1ex84_-Q/css

createPlasmicElementProxy;

export type PlasmicArticleInfo1__VariantMembers = {};
export type PlasmicArticleInfo1__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticleInfo1__VariantsArgs;
export const PlasmicArticleInfo1__VariantProps = new Array<VariantPropType>();

export type PlasmicArticleInfo1__ArgsType = {};
type ArgPropType = keyof PlasmicArticleInfo1__ArgsType;
export const PlasmicArticleInfo1__ArgProps = new Array<ArgPropType>();

export type PlasmicArticleInfo1__OverridesType = {
  root?: p.Flex<"div">;
  httpRestApiFetcher?: p.Flex<typeof DataFetcher>;
  pageMetadataOverride?: p.Flex<typeof PlasmicHead>;
  bodyArticle1?: p.Flex<typeof BodyArticle1>;
  head?: p.Flex<typeof PlasmicHead>;
  embedHtml?: p.Flex<typeof Embed>;
};

export interface DefaultArticleInfo1Props {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicArticleInfo1__RenderFunc(props: {
  variants: PlasmicArticleInfo1__VariantsArgs;
  args: PlasmicArticleInfo1__ArgsType;
  overrides: PlasmicArticleInfo1__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscylgZgvvaF7G()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_offer_theme_1_component_css.plasmic_tokens,
            sty.root
          )}
          id={(() => {
            try {
              return $ctx.params.slug;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        >
          <DataFetcher
            data-plasmic-name={"httpRestApiFetcher"}
            data-plasmic-override={overrides.httpRestApiFetcher}
            className={classNames("__wab_instance", sty.httpRestApiFetcher)}
            dataName={"fetchDyanamicData" as const}
            errorDisplay={
              <ph.DataCtxReader>
                {$ctx => "Error fetching data"}
              </ph.DataCtxReader>
            }
            headers={{
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer keyVDvhyVSx5Ntbl3"
            }}
            loadingDisplay={null}
            method={"GET" as const}
            noLayout={false}
            url={(() => {
              try {
                return (
                  "https://api.airtable.com/v0/appmM1mMqcDvugXhY/PlasmicCMS?filterByFormula=slug=" +
                  "'" +
                  $ctx.params.slug +
                  "'"
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "https://api.airtable.com/v0/appmM1mMqcDvugXhY/PlasmicCMS?filterByFormula=slug=";
                }
                throw e;
              }
            })()}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  <PlasmicHead
                    data-plasmic-name={"pageMetadataOverride"}
                    data-plasmic-override={overrides.pageMetadataOverride}
                    className={classNames(
                      "__wab_instance",
                      sty.pageMetadataOverride
                    )}
                    description={(() => {
                      try {
                        return $ctx.fetchDyanamicData.records[0].fields[
                          "Step 1 SEO Description"
                        ];
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    title={(() => {
                      try {
                        return $ctx.fetchDyanamicData.records[0].fields[
                          "Step 1 SEO Title"
                        ];
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />

                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <NavArticle1
                      className={classNames(
                        "__wab_instance",
                        sty.navArticle1__h5BZx
                      )}
                    />
                  ) : null}
                  <BodyArticle1
                    data-plasmic-name={"bodyArticle1"}
                    data-plasmic-override={overrides.bodyArticle1}
                    className={classNames("__wab_instance", sty.bodyArticle1)}
                  />

                  <NavArticle1
                    className={classNames(
                      "__wab_instance",
                      sty.navArticle1__dlZke
                    )}
                  />

                  <PlasmicHead
                    data-plasmic-name={"head"}
                    data-plasmic-override={overrides.head}
                    className={classNames("__wab_instance", sty.head)}
                    description={(() => {
                      try {
                        return $ctx.fetchDyanamicData.fields.paragraph1;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    image={(() => {
                      try {
                        return undefined;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    title={(() => {
                      try {
                        return $ctx.fetchDyanamicData.fields.heroHeadline;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />

                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={(() => {
                      try {
                        return $ctx.fetchDyanamicData.records[0].fields[
                          "scripts (from Brands)"
                        ][0];
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />
                </React.Fragment>
              )}
            </ph.DataCtxReader>
          </DataFetcher>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpRestApiFetcher",
    "pageMetadataOverride",
    "bodyArticle1",
    "head",
    "embedHtml"
  ],
  httpRestApiFetcher: [
    "httpRestApiFetcher",
    "pageMetadataOverride",
    "bodyArticle1",
    "head",
    "embedHtml"
  ],
  pageMetadataOverride: ["pageMetadataOverride"],
  bodyArticle1: ["bodyArticle1"],
  head: ["head"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpRestApiFetcher: typeof DataFetcher;
  pageMetadataOverride: typeof PlasmicHead;
  bodyArticle1: typeof BodyArticle1;
  head: typeof PlasmicHead;
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleInfo1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleInfo1__VariantsArgs;
    args?: PlasmicArticleInfo1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArticleInfo1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArticleInfo1__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicArticleInfo1__ArgProps,
          internalVariantPropNames: PlasmicArticleInfo1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArticleInfo1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArticleInfo1";
  } else {
    func.displayName = `PlasmicArticleInfo1.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleInfo1 = Object.assign(
  // Top-level PlasmicArticleInfo1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    bodyArticle1: makeNodeComponent("bodyArticle1"),
    head: makeNodeComponent("head"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicArticleInfo1
    internalVariantProps: PlasmicArticleInfo1__VariantProps,
    internalArgProps: PlasmicArticleInfo1__ArgProps,

    // Key-value metadata
    metadata: { title: "Meet The Newest Flavor Diffuser" },

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicArticleInfo1;
/* prettier-ignore-end */
