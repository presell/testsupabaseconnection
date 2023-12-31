// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oxby7mL3tramyYPU9d77Uw
// Component: K9N9h_V9VXXi

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_offer_theme_1_component_css from "../offer_theme_1_component/plasmic_offer_theme_1_component.module.css"; // plasmic-import: 8JEXBqjqN3wJGHTHZ9qf9H/projectcss
import projectcss from "./plasmic_copy_of_feed_presell_ai.module.css"; // plasmic-import: oxby7mL3tramyYPU9d77Uw/projectcss
import sty from "./PlasmicCollection1Cta.module.css"; // plasmic-import: K9N9h_V9VXXi/css

createPlasmicElementProxy;

export type PlasmicCollection1Cta__VariantMembers = {};
export type PlasmicCollection1Cta__VariantsArgs = {};
type VariantPropType = keyof PlasmicCollection1Cta__VariantsArgs;
export const PlasmicCollection1Cta__VariantProps = new Array<VariantPropType>();

export type PlasmicCollection1Cta__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCollection1Cta__ArgsType;
export const PlasmicCollection1Cta__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicCollection1Cta__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCollection1CtaProps {
  children?: React.ReactNode;
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

function PlasmicCollection1Cta__RenderFunc(props: {
  variants: PlasmicCollection1Cta__VariantsArgs;
  args: PlasmicCollection1Cta__ArgsType;
  overrides: PlasmicCollection1Cta__OverridesType;
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

  return (
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
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oGe0V
            )}
          >
            {"SHOP NOW"}
          </div>
        ),
        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollection1Cta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollection1Cta__VariantsArgs;
    args?: PlasmicCollection1Cta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollection1Cta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCollection1Cta__ArgsType,
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
          internalArgPropNames: PlasmicCollection1Cta__ArgProps,
          internalVariantPropNames: PlasmicCollection1Cta__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCollection1Cta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCollection1Cta";
  } else {
    func.displayName = `PlasmicCollection1Cta.${nodeName}`;
  }
  return func;
}

export const PlasmicCollection1Cta = Object.assign(
  // Top-level PlasmicCollection1Cta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCollection1Cta
    internalVariantProps: PlasmicCollection1Cta__VariantProps,
    internalArgProps: PlasmicCollection1Cta__ArgProps
  }
);

export default PlasmicCollection1Cta;
/* prettier-ignore-end */
