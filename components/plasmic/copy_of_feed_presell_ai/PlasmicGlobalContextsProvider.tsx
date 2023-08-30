// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oxby7mL3tramyYPU9d77Uw

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent
import { WordpressProvider } from "@plasmicpkgs/plasmic-wordpress"; // plasmic-import: ABVULPU3AuC/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: DmrLLHGTjGTE/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;

  wordpressProviderProps?: Partial<
    Omit<React.ComponentProps<typeof WordpressProvider>, "children">
  >;

  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    cmsCredentialsProviderProps,
    wordpressProviderProps,
    antdConfigProviderProps
  } = props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : ("i2rUMXNMBuVqQk5M3WJBgc" as const)
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : ("ycOrPup8UTOxaXu0g74PHO3UKjZEWr2yRWpfswFe8EVf2uwBT5I6BYCqcdcEB8SabwLGy8BiHeKsWBrRMAQ" as const)
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : ("https://data.plasmic.app" as const)
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : ("Default" as const)
      }
    >
      <WordpressProvider
        {...wordpressProviderProps}
        wordpressUrl={
          wordpressProviderProps && "wordpressUrl" in wordpressProviderProps
            ? wordpressProviderProps.wordpressUrl!
            : ("https://techcrunch.com/" as const)
        }
      >
        <AntdConfigProvider
          {...antdConfigProviderProps}
          borderRadius={
            antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
              ? antdConfigProviderProps.borderRadius!
              : (6 as const)
          }
          colorBgBase={
            antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
              ? antdConfigProviderProps.colorBgBase!
              : ("#ffffff" as const)
          }
          colorError={
            antdConfigProviderProps && "colorError" in antdConfigProviderProps
              ? antdConfigProviderProps.colorError!
              : ("#ff4d4f" as const)
          }
          colorInfo={
            antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
              ? antdConfigProviderProps.colorInfo!
              : ("#1677ff" as const)
          }
          colorPrimary={
            antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
              ? antdConfigProviderProps.colorPrimary!
              : ("#1677ff" as const)
          }
          colorSuccess={
            antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
              ? antdConfigProviderProps.colorSuccess!
              : ("#52c41a" as const)
          }
          colorWarning={
            antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
              ? antdConfigProviderProps.colorWarning!
              : ("#faad14" as const)
          }
          controlHeight={
            antdConfigProviderProps &&
            "controlHeight" in antdConfigProviderProps
              ? antdConfigProviderProps.controlHeight!
              : (32 as const)
          }
          defaultDark={
            antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
              ? antdConfigProviderProps.defaultDark!
              : false
          }
          lineWidth={
            antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
              ? antdConfigProviderProps.lineWidth!
              : (1 as const)
          }
          sizeStep={
            antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
              ? antdConfigProviderProps.sizeStep!
              : (4 as const)
          }
          sizeUnit={
            antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
              ? antdConfigProviderProps.sizeUnit!
              : (4 as const)
          }
          themeStyles={
            antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
              ? antdConfigProviderProps.themeStyles!
              : true
              ? {
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#535353",
                  letterSpacing: "normal"
                }
              : undefined
          }
          wireframe={
            antdConfigProviderProps && "wireframe" in antdConfigProviderProps
              ? antdConfigProviderProps.wireframe!
              : false
          }
        >
          {children}
        </AntdConfigProvider>
      </WordpressProvider>
    </CmsCredentialsProvider>
  );
}
