<br/> <br/>

<div align="center">
  <img src="https://note.youdao.com/yws/public/resource/25072aa57ee3e21410b358a2e6a22bb3/xmlnote/WEBRESOURCE722bf759275b628a3cabc37d5533f0a7/3" alt="Icon" width="240"/>
  <br/> <br/>
  <h1>Shimmer Theme README</h1>
</div>

## Effects

<div align="center">
  <img src="https://note.youdao.com/yws/public/resource/25072aa57ee3e21410b358a2e6a22bb3/xmlnote/WEBRESOURCE9d36ee5a74de1a27bf9a253080d3f55a/5" alt="Effects" />
</div>

## Install

#### Method 1

After the installation is complete, press `ctrl + shift + p` to display all command pop-ups, enter `Color Theme` in the input box, find the option `Preferences: Color Theme` in the result bar, press Enter, and select the theme with the name starting with `Shimmer Theme` in the color theme list.

#### Method 2

Click `Manage -> Themes -> Color Theme`, and select the theme that starts with `Shimmer Theme` in the color theme list pop-up window.

## Modify color scheme

Click `Manage -> Settings -> Open Settings(Json) -> Open Settings (UI) [icon column on the right side of the tab bar]` and add the following content to the `setting.json` file

```json
// setting.json
{
  ...
  "workbench.colorCustomizations": {
    "[Shimmer Theme Dark Melancholy]": {
      "button.background": "#fff",
      "editor.background": "#fff",
      // your other color scheme
    }
  }
}
```

View [Theme Color Doc](https://code.visualstudio.com/api/references/theme-color)

## Color matching rules

This theme is matched using [Adobe Color Accessibility Tools](https://color.adobe.com/en/create/color-contrast-analyzer) WCAG 2.1 level (**AA**) and meets color matching level requirements
