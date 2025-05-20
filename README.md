<br/> <br/>

<div align="center">

![icon.png](https://i.postimg.cc/13dVCSNm/icon.png)

<br/>

<div style="display: flex; justify-content: center; align-items: center">
  <div style="display: grid; gap: 4px; grid-template-columns: repeat(6, 1fr)">
    <div style="width: 20px; height: 20px; background-color: #755ade;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #c28455;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #ba9959;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #bf8286;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #1aa38f;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #6ca371;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #62a193;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #389fad;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #c27cb3;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #a980cd;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #7c89f0;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #689fc8;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #4495eb;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #d97189;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #80a341;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #149eca;border-radius:4px;"></div>
    <div style="width: 20px; height: 20px; background-color: #5aab81;border-radius:4px;"></div>
  </div>

</div>

<br/> <br/>

  <h1>Shimmer Theme README</h1>
  <br/>

[English Docs]
[中文文档](https://github.com/tenianon/shimmer-theme/blob/main/README_zh-cn.md)

</div>

## Effects

#### Dark Melancholy

<div align="center">

![shimmer-theme-dark-melancholy.png](https://i.postimg.cc/x1qHKMX3/Pix-Pin-2025-05-21-05-06-31.png)

</div>

#### Dark Melancholy Block

<div align="center">

![shimmer-theme-dark-melancholy.png](https://i.postimg.cc/B651qCz4/Pix-Pin-2025-05-21-05-08-09.png)

</div>

#### Dark Neutral

<div align="center">

![shimmer-theme-dark-neutral.png](https://i.postimg.cc/wTNY3bVX/Pix-Pin-2025-05-21-05-14-24.png)

</div>

#### Dark Neutral Block

<div align="center">

![shimmer-theme-dark-neutral.png](https://i.postimg.cc/ydCZ4GvL/Pix-Pin-2025-05-21-05-08-46.png)

</div>

## Recommend

It is recommended to turn off **Bracket Pair Coloring** when using this theme, Open `Manage → Settings` → Search for `bracket pair` → Uncheck Controls whether bracket pair colorization is enabled or not.

## Using

#### Method 1

After the installation is complete, press `ctrl + shift + p` to display all command pop-ups, enter `Color Theme` in the input box, find the option `Preferences: Color Theme` in the result bar, press Enter, and select the theme with the name starting with `Shimmer Theme` in the color theme list.

#### Method 2

Open `Manage` -> `Themes` -> `Color Theme`, and select the theme that starts with `Shimmer Theme` in the color theme list pop-up window.

## Modify color scheme

Open `Manage` -> `Settings` -> `Open Settings(Json)` -> `Open Settings (UI)` **[icon column on the right side of the tab bar]** and add the following content to the `setting.json` file

#### Example

```json
// setting.json
{
  ...
  "workbench.colorCustomizations": {
    // Current theme name
   "[Shimmer Theme Dark Melancholy]": {
     // Change primary color
     "button.background": "#ff00ff",
     "button.foreground": "#ff00ff",
     "button.hoverBackground": "#ff00ff",
     "inputOption.activeBackground": "#ff00ff",
     "inputOption.activeForeground": "#ff00ff",
     "badge.foreground": "#ff00ff",
     "badge.background": "#ff00ff",
     "progressBar.background": "#ff00ff",
     "activityBar.foreground": "#ff00ff",
     "activityBarBadge.background": "#ff00ff",
     "activityBarBadge.foreground": "#ff00ff",
     "activityBarTop.foreground": "#ff00ff",
     "activityBarTop.activeBorder": "#ff00ff",
     "tab.activeBorderTop": "#ff00ff",
     "editorSuggestWidget.focusHighlightForeground": "#ff00ff",
     "editorSuggestWidget.highlightForeground": "#ff00ff",
     "peekViewTitleLabel.foreground": "#ff00ff",
     "panel.background": "#ff00ff",
     "panel.dropBorder": "#ff00ff",
     "panelTitle.activeBorder": "#ff00ff",
     "panelTitle.activeForeground": "#ff00ff",
     "statusBarItem.remoteHoverForeground": "#ff00ff",
     "breadcrumb.focusForeground": "#ff00ff"
     // other color scheme
   }
  }
}
```

View [Theme Color Doc](https://code.visualstudio.com/api/references/theme-color)

## Color matching rules

This theme is matched using [Adobe Color Accessibility Tools](https://color.adobe.com/en/create/color-contrast-analyzer) WCAG 2.1 level (**AA**) and meets color matching level requirements
