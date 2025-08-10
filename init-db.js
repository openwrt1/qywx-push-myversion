// 初始化 SQLite 数据库
// 创建配置表结构

const path = require('path');
const Database = require('./src/core/Database'); // 根据你的项目结构调整路径

(async () => {
    // 设置数据库文件路径
    const dbPath = path.resolve(__dirname, './database/notifier.db');
    const db = new Database(dbPath);

    try {
        console.log('🚀 开始初始化数据库...');
        await db.init(); // 初始化连接并创建表
        console.log('✅ 数据库初始化完成');
    } catch (err) {
        console.error('❌ 初始化失败:', err.message);
    } finally {
        db.close(); // 关闭数据库连接
    }
})();
