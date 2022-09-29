// @ts-ignore

import {nav_en} from "./nav_en";
import {nav_zh} from "./nav_zh";
import {defineConfig} from "vuepress/config";
// @ts-ignore
export = defineConfig((ctx) => ({
    base:"/lancet-docs/",
    title: "Lancet-docs",
    description: "lancet（柳叶刀）是一个全面、高效、可复用的go语言工具函数库。 lancet受到了java apache common包和lodash.js的启发。",
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
            title: 'Lancet文档',
            description: 'lancet（柳叶刀）是一个全面、高效、可复用的go语言工具函数库。 lancet受到了java apache common包和lodash.js的启发。'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Lancet-docs',
            description: 'Lancet is a comprehensive, efficient, and reusable util function library of go. Inspired by the java apache common package and lodash.js.'
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
    },
    plugins:[['vuepress-plugin-code-copy', true]]
}));
