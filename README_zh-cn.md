<br/> <br/>

<div align="center">
  <img src="https://github.com/tenianon/shimmer-theme/blob/main/icon.png?raw=true" alt="图标" width="240" />
  <br/> <br/>
</div>

## 代码效果图

<div align="center">
  <img src="https://github.com/tenianon/shimmer-theme/blob/main/screenshot.png?raw=true" alt="代码效果图" />
</div>

## 安装

#### 方式一

安装完成后，按下 `ctrl + shift + p` 显示所有命令弹窗，在输入框输入 `颜色主题` 或 `Color Theme` ，在结果栏中查找选项 `首选项: 颜色(Preferences: Color Theme)` ，按下回车，在颜色主题列表中选择 `Shimmer Theme` 开头的名称主题

#### 方式二

点击 `管理 -> 主题 -> 颜色主题`，颜色主题列表弹窗中选择 `Shimmer Theme` 开头的名称主题

## 修改配色

点击 `管理 -> 设置 -> 打开设置(Json) -> 打开设置(ui)[标签栏右边的图标列]` ，在 `setting.json` 文件里追加以下内容

```json
// setting.json
{
  ...
  "workbench.colorCustomizations": {
    "[Shimmer Theme Dark Melancholy]": {
      "button.background": "#fff",
      "editor.background": "#fff",
      // 你的其他配色
    }
  }
}
```

查看 [主题颜色文档](https://code.visualstudio.com/api/references/theme-color)

## 配色规则

该主题使用 [Adobe Color Accessibility Tools](https://color.adobe.com/zh/create/color-contrast-analyzer) WCAG 2.1 等级(**AA**)进行搭配且符合配色等级要求
