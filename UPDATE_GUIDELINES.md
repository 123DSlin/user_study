# HTML文件更新指南 - Netlify表单兼容性

## 🚨 重要提醒
每次更新 `groupA.html` 或 `groupB.html` 时，必须确保以下Netlify表单配置保持不变。

## 📋 必须保留的关键配置

### 1. HTML表单结构（在<body>开始后）
```html
<form name="user-study-results" netlify netlify-honeypot="bot-field" style="display: none;">
    <input type="hidden" name="form-name" value="user-study-results">
    <input type="hidden" name="timestamp">
    <input type="hidden" name="userGroup">
    <input type="hidden" name="language">
    <input type="hidden" name="totalTime">
    <input type="hidden" name="score">
    <input type="hidden" name="totalQuestions">
    <input type="hidden" name="questionTimes">
    <input type="hidden" name="answers">
    <input type="hidden" name="surveyQ1">
    <input type="hidden" name="surveyQ2">
    <input type="hidden" name="bot-field">
</form>
```

### 2. JavaScript表单提交函数
必须包含 `submitToNetlify(testData)` 函数，使用以下代码：
```javascript
function submitToNetlify(testData) {
    const formData = new FormData();
    formData.append('form-name', 'user-study-results');
    formData.append('timestamp', testData.timestamp);
    formData.append('userGroup', testData.userGroup);
    formData.append('language', testData.language);
    formData.append('totalTime', testData.totalTime || '0');
    formData.append('score', testData.score || '0');
    formData.append('totalQuestions', testData.totalQuestions || '0');
    formData.append('questionTimes', JSON.stringify(testData.questionTimes || []));
    formData.append('answers', JSON.stringify(testData.answers || []));
    formData.append('surveyQ1', testData.survey.question1 || '');
    formData.append('surveyQ2', testData.survey.question2 || '');
    formData.append('bot-field', '');
    
    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('数据已成功提交到Netlify Forms');
            showSurveySuccess();
            setTimeout(() => {
                showSurveyComplete(testData);
            }, 2000);
        } else {
            console.error('提交失败:', response.status);
            showSurveyError();
            setTimeout(() => {
                showSurveyComplete(testData);
            }, 3000);
        }
    })
    .catch(error => {
        console.error('提交错误:', error);
        showSurveyComplete(testData);
    });
}
```

### 3. 用户组配置
确保以下配置正确：
- Group A: `let userGroup = 'A';`
- Group B: `let userGroup = 'B';`

## 🔄 更新流程建议

### 方法1：使用模板文件
1. 复制 `netlify-form-template.html` 中的表单代码
2. 粘贴到新HTML文件的正确位置
3. 确保JavaScript函数完整

### 方法2：验证检查清单
更新后检查以下项目：
- [ ] 表单名称是 `user-study-results`
- [ ] 包含 `netlify` 和 `netlify-honeypot="bot-field"` 属性
- [ ] 所有隐藏字段都存在
- [ ] `submitToNetlify` 函数完整
- [ ] 用户组设置正确（A或B）

### 方法3：自动化验证脚本
可以创建一个简单的验证脚本来检查表单配置。

## ⚠️ 常见错误
1. **忘记添加表单**: 新HTML文件缺少Netlify表单
2. **修改表单名称**: 改变了 `user-study-results` 名称
3. **缺少honeypot**: 忘记 `bot-field` 字段
4. **JavaScript错误**: 表单提交函数不完整
5. **用户组错误**: Group A/B 设置错误

## 🧪 测试建议
1. 本地测试表单提交
2. 检查浏览器控制台是否有错误
3. 验证Netlify后台是否收到数据
4. 测试两个用户组的配置

## 📞 需要帮助？
如果更新过程中遇到问题，请参考：
- `netlify-form-template.html` - 完整模板
- 当前工作的 `groupA.html` 和 `groupB.html` - 参考实现
