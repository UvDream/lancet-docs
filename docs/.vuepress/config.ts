// @ts-ignore

import {nav_en} from "./nav_en";
import {nav_zh} from "./nav_zh";
import {defineConfig} from "vuepress/config";
export = defineConfig((ctx) => ({
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
    plugins: [
    ]
}));
