// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oxby7mL3tramyYPU9d77Uw
// Component: 201yVou04ILU

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

import { useScreenVariants as useScreenVariantscylgZgvvaF7G } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CYLGZgvvaF7G/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_offer_theme_1_component_css from "../offer_theme_1_component/plasmic_offer_theme_1_component.module.css"; // plasmic-import: 8JEXBqjqN3wJGHTHZ9qf9H/projectcss
import projectcss from "./plasmic_copy_of_feed_presell_ai.module.css"; // plasmic-import: oxby7mL3tramyYPU9d77Uw/projectcss
import sty from "./PlasmicNavArticle1.module.css"; // plasmic-import: 201yVou04ILU/css

createPlasmicElementProxy;

export type PlasmicNavArticle1__VariantMembers = {};
export type PlasmicNavArticle1__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavArticle1__VariantsArgs;
export const PlasmicNavArticle1__VariantProps = new Array<VariantPropType>();

export type PlasmicNavArticle1__ArgsType = {};
type ArgPropType = keyof PlasmicNavArticle1__ArgsType;
export const PlasmicNavArticle1__ArgProps = new Array<ArgPropType>();

export type PlasmicNavArticle1__OverridesType = {
  article1Nav?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  text?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultNavArticle1Props {
  className?: string;
}

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

function PlasmicNavArticle1__RenderFunc(props: {
  variants: PlasmicNavArticle1__VariantsArgs;
  args: PlasmicNavArticle1__ArgsType;
  overrides: PlasmicNavArticle1__OverridesType;
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
    (hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
      <div
        data-plasmic-name={"article1Nav"}
        data-plasmic-override={overrides.article1Nav}
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
          sty.article1Nav
        )}
      >
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__iIgWb)}>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  <React.Fragment>
                    {$ctx.fetchDyanamicData.records[0].fields.aSlogan}
                  </React.Fragment>
                </div>
              </div>
            ) : null}
            <div className={classNames(projectcss.all, sty.column__ghdj9)}>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__sMj0M
                )}
                component={Link}
                href={(() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields[
                      "Step 2 URL"
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
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"125px" as const}
                  loading={"eager" as const}
                  src={(() => {
                    try {
                      return $ctx.fetchDyanamicData.records[0].fields.logo[0]
                        .url;
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
              </p.PlasmicLink>
            </div>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__crrNy)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__zm55C
                  )}
                  component={Link}
                  href={(() => {
                    try {
                      return $ctx.fetchDyanamicData.records[0].fields[
                        "Step 2 URL"
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
                  platform={"nextjs"}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $ctx.fetchDyanamicData.records[0].fields.aCTA;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "CLAIM FREE PODS";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </p.PlasmicLink>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  article1Nav: ["article1Nav", "columns", "text", "img"],
  columns: ["columns", "text", "img"],
  text: ["text"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  article1Nav: "div";
  columns: "div";
  text: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavArticle1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavArticle1__VariantsArgs;
    args?: PlasmicNavArticle1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavArticle1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavArticle1__ArgsType,
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
          internalArgPropNames: PlasmicNavArticle1__ArgProps,
          internalVariantPropNames: PlasmicNavArticle1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavArticle1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "article1Nav") {
    func.displayName = "PlasmicNavArticle1";
  } else {
    func.displayName = `PlasmicNavArticle1.${nodeName}`;
  }
  return func;
}

export const PlasmicNavArticle1 = Object.assign(
  // Top-level PlasmicNavArticle1 renders the root element
  makeNodeComponent("article1Nav"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNavArticle1
    internalVariantProps: PlasmicNavArticle1__VariantProps,
    internalArgProps: PlasmicNavArticle1__ArgProps
  }
);

export default PlasmicNavArticle1;
/* prettier-ignore-end */
