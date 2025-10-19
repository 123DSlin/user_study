#!/usr/bin/env node

/**
 * Netlify表单验证脚本
 * 用于检查HTML文件是否包含正确的Netlify表单配置
 * 
 * 使用方法: node validate-netlify-form.js [文件路径]
 * 例如: node validate-netlify-form.js groupA.html
 */

const fs = require('fs');
const path = require('path');

// 必需的Netlify表单配置
const REQUIRED_CONFIG = {
    formName: 'user-study-results',
    netlifyAttributes: ['netlify', 'netlify-honeypot="bot-field"'],
    requiredFields: [
        'form-name',
        'timestamp', 
        'userGroup',
        'language',
        'totalTime',
        'score',
        'totalQuestions',
        'questionTimes',
        'answers',
        'surveyQ1',
        'surveyQ2',
        'susTotalScore',
        'susScores',
        'bot-field'
    ],
    requiredFunction: 'submitToNetlify'
};

function validateNetlifyForm(filePath) {
    console.log(`🔍 验证文件: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
        console.error(`❌ 文件不存在: ${filePath}`);
        return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const errors = [];
    const warnings = [];
    
    // 检查表单是否存在
    const formRegex = new RegExp(`<form[^>]*name="${REQUIRED_CONFIG.formName}"[^>]*>`, 'i');
    if (!formRegex.test(content)) {
        errors.push(`缺少表单: name="${REQUIRED_CONFIG.formName}"`);
    }
    
    // 检查Netlify属性
    REQUIRED_CONFIG.netlifyAttributes.forEach(attr => {
        if (!content.includes(attr)) {
            errors.push(`缺少Netlify属性: ${attr}`);
        }
    });
    
    // 检查必需的隐藏字段
    REQUIRED_CONFIG.requiredFields.forEach(field => {
        const fieldRegex = new RegExp(`<input[^>]*name="${field}"[^>]*>`, 'i');
        if (!fieldRegex.test(content)) {
            errors.push(`缺少隐藏字段: ${field}`);
        }
    });
    
    // 检查提交函数
    if (!content.includes(REQUIRED_CONFIG.requiredFunction)) {
        errors.push(`缺少提交函数: ${REQUIRED_CONFIG.requiredFunction}`);
    }
    
    // 检查用户组设置
    const userGroupRegex = /let userGroup = ['"]([AB])['"]/;
    const userGroupMatch = content.match(userGroupRegex);
    if (!userGroupMatch) {
        errors.push('缺少用户组设置: let userGroup = "A" 或 "B"');
    } else {
        console.log(`✅ 用户组设置: ${userGroupMatch[1]}`);
    }
    
    // 检查EmailJS脚本（可选）
    if (!content.includes('@emailjs/browser')) {
        warnings.push('缺少EmailJS脚本（可选）');
    }
    
    // 输出结果
    if (errors.length === 0) {
        console.log('✅ 所有Netlify表单配置检查通过！');
        if (warnings.length > 0) {
            console.log('⚠️  警告:');
            warnings.forEach(warning => console.log(`   - ${warning}`));
        }
        return true;
    } else {
        console.log('❌ 发现以下问题:');
        errors.forEach(error => console.log(`   - ${error}`));
        return false;
    }
}

// 主函数
function main() {
    const filePath = process.argv[2];
    
    if (!filePath) {
        console.log('使用方法: node validate-netlify-form.js [文件路径]');
        console.log('例如: node validate-netlify-form.js groupA.html');
        process.exit(1);
    }
    
    const isValid = validateNetlifyForm(filePath);
    process.exit(isValid ? 0 : 1);
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = { validateNetlifyForm, REQUIRED_CONFIG };
