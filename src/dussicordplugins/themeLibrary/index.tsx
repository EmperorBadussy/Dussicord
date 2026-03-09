/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ColorPaletteIcon } from "@components/Icons";
import SettingsPlugin from "@plugins/_core/settings";
import { DussicordDevs } from "@utils/constants";
import { removeFromArray } from "@utils/misc";
import definePlugin from "@utils/types";
import { SettingsRouter } from "@webpack/common";

import { settings } from "./utils/settings";

export default definePlugin({
    name: "ThemeLibrary",
    description: "A library of themes for Vencord.",
    authors: [DussicordDevs.Fafa],
    settings,
    toolboxActions: {
        "Open Theme Library": () => {
            SettingsRouter.openUserSettings("dussicord_theme_library_panel");
        },
    },

    start() {
        SettingsPlugin.customEntries.push({
            key: "dussicord_theme_library",
            title: "Theme Library",
            Component: require("./components/ThemeTab").default,
            Icon: ColorPaletteIcon
        });

        SettingsPlugin.settingsSectionMap.push(["DussicordThemeLibrary", "dussicord_theme_library"]);
    },

    stop() {
        removeFromArray(SettingsPlugin.customEntries, e => e.key === "dussicord_theme_library");
        removeFromArray(SettingsPlugin.settingsSectionMap, entry => entry[1] === "dussicord_theme_library");
    },
});
