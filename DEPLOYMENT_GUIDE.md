# 快速部署指南

## 🚀 方法一：直接拖拽到Netlify（最简单）

### 步骤1：准备文件
确保以下文件在同一文件夹中：
- `index.html` - 主页面
- `groupA.html` - Group A测试页面  
- `groupB.html` - Group B测试页面
- `README.md` - 说明文档
- `netlify.toml` - 配置文件

### 步骤2：部署到Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账户
3. 在主页找到 "Want to deploy a new site without connecting to Git?"
4. 点击 "Browse to upload" 或直接拖拽整个文件夹
5. 等待部署完成（通常1-2分钟）

### 步骤3：配置表单处理
1. 部署完成后，进入站点管理页面
2. 点击 "Forms" 标签
3. 启用表单处理功能
4. 设置邮件通知（可选）

## 🔧 方法二：通过GitHub部署

### 步骤1：上传到GitHub
1. 访问 [https://github.com/123DSlin/0929html](https://github.com/123DSlin/0929html)
2. 点击 "uploading an existing file"
3. 拖拽所有文件到页面
4. 填写提交信息："Initial commit: User study pages"
5. 点击 "Commit changes"

### 步骤2：连接Netlify
1. 在Netlify点击 "New site from Git"
2. 选择 "GitHub"
3. 授权访问GitHub
4. 选择仓库 `123DSlin/0929html`
5. 设置部署选项：
   - Build command: 留空
   - Publish directory: 留空
6. 点击 "Deploy site"

## 📊 数据收集配置

### 自动数据收集
- 所有测试结果会自动保存到Netlify Forms
- 在Netlify控制台查看提交数据
- 支持导出为CSV格式

### 收集的数据包括：
- 测试时间戳
- 用户组别（A/B）
- 答题时间和得分
- 用户答案详情
- 问卷调查反馈

## 🔄 更新流程

### 自动更新（GitHub方式）
1. 修改本地文件
2. 推送到GitHub
3. Netlify自动重新部署

### 手动更新（拖拽方式）
1. 修改文件
2. 重新拖拽到Netlify
3. 或使用Netlify CLI

## 🌐 自定义域名（可选）

1. 在Netlify站点设置中
2. 点击 "Domain settings"
3. 添加自定义域名
4. 配置DNS记录

## 📈 监控和分析

### 访问统计
- 在Netlify Analytics查看访问数据
- 监控表单提交情况
- 性能分析

### 数据导出
1. 进入 "Forms" 页面
2. 选择 "user-study-results" 表单
3. 点击 "Export entries" 下载CSV

## 🛡️ 安全设置

- 所有数据通过HTTPS传输
- 表单数据加密存储
- 可设置访问密码保护

## 💰 费用说明

- **完全免费**
- 免费版支持100个表单提交/月
- 100GB带宽/月
- 适合用户研究项目

## 🆘 故障排除

### 常见问题：
1. **表单提交失败**：检查网络连接
2. **页面加载慢**：检查文件大小
3. **数据未收集**：确认Netlify Forms已启用

### 技术支持：
- 检查浏览器控制台错误
- 查看Netlify部署日志
- 确认所有文件已正确上传

