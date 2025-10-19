# Network Verification User Study

这是一个网络验证工具的用户研究网页，支持A/B测试和数据收集。

## 文件结构

```
├── index.html          # 主页面，用户选择测试组
├── groupA.html         # Group A 测试页面
├── groupB.html         # Group B 测试页面
└── README.md           # 说明文档
```

## 功能特点

- **A/B测试支持**：两个不同的测试组
- **数据收集**：自动收集测试结果和用户反馈
- **进度跟踪**：实时显示测试进度
- **计时功能**：记录每个问题的答题时间
- **响应式设计**：支持各种设备

## 部署方案

### 方案一：Netlify（推荐）

#### 步骤1：准备GitHub仓库
1. 在GitHub上创建新仓库
2. 将所有文件上传到仓库

#### 步骤2：部署到Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账户
3. 点击 "New site from Git"
4. 连接GitHub仓库
5. 设置部署选项：
   - Build command: 留空
   - Publish directory: 留空（根目录）
6. 点击 "Deploy site"

#### 步骤3：配置表单处理
1. 在Netlify控制台，进入 "Forms" 页面
2. 启用表单处理功能
3. 设置邮件通知（可选）

#### 步骤4：自定义域名（可选）
1. 在 "Domain settings" 中添加自定义域名
2. 配置DNS记录

### 方案二：Vercel

#### 步骤1：安装Vercel CLI
```bash
npm i -g vercel
```

#### 步骤2：部署
```bash
cd /path/to/your/project
vercel
```

#### 步骤3：配置环境变量
在Vercel控制台设置必要的环境变量

### 方案三：GitHub Pages

#### 步骤1：启用GitHub Pages
1. 在GitHub仓库设置中
2. 找到 "Pages" 部分
3. 选择 "Deploy from a branch"
4. 选择主分支
5. 保存设置

## 数据收集

### Netlify Forms
- 自动收集所有表单提交
- 在Netlify控制台查看数据
- 支持导出为CSV格式
- 可设置邮件通知

### 收集的数据包括：
- 测试时间戳
- 用户组别（A/B）
- 答题时间
- 得分情况
- 用户答案
- 问卷调查反馈

## 更新流程

### 自动更新（推荐）
1. 修改本地文件
2. 推送到GitHub
3. Netlify/Vercel自动重新部署

### 手动更新
1. 在托管平台控制台
2. 触发重新部署

## 监控和分析

### Netlify Analytics
- 访问统计
- 表单提交统计
- 性能监控

### 数据导出
1. 进入Netlify Forms页面
2. 选择表单
3. 点击 "Export" 下载CSV

## 安全考虑

- 所有数据通过HTTPS传输
- 表单数据加密存储
- 符合GDPR要求
- 可设置访问密码保护

## 技术支持

如有问题，请检查：
1. 浏览器控制台错误
2. 网络连接
3. 表单提交状态
4. 托管平台日志

## 费用说明

- **Netlify**：免费版支持100GB带宽/月，100个表单提交/月
- **Vercel**：免费版支持100GB带宽/月
- **GitHub Pages**：完全免费

对于用户研究项目，免费额度通常足够使用。
