// @ts-ignore

import {nav_en} from "./nav_en";
import {nav_zh} from "./nav_zh";
import {defineConfig} from "vuepress/config";
// @ts-ignore
export = defineConfig((ctx) => ({
    base:"/lancet-docs/",
    title: "Lancet-docs",
    description: "Lancet 文档",
    configureWebpack: {
        resolve: {
            alias: {
                "@/": "./",
            },
        },
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Lancet-docs',
            description: 'Lancet-docs'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Lancet-docs',
            description: 'Lancet-docs'
        }
    },
    themeConfig: {
        logo: "/logo.png",
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        //     // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
        //     appId: '<APP_ID>',
        // },
        locales: {
            "/": {
                selectText: "选择语言",
                label: "简体中文",
                editLinkText: "在 GitHub 上编辑此页",
                nav: nav_zh,
            },
            "/en/": {
                selectText: "Languages",
                label: "English",
                editLinkText: "Edit this page on GitHub",
                nav: nav_en,
            },
        },
    }
}));
