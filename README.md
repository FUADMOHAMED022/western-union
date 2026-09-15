# Western Union - Integrated Digital System

## 🌍 نظام ويسترن يونيون المتكامل

نظام متكامل يجمع بين:
- 💰 **نظام التحويل المالي** (Western Union Transfer System)
- ✅ **نظام إدارة المهام** (To-Do List Application)
- 🕐 **ساعة رقمية متقدمة** (Digital Clock with Time Zones)

---

## 🎯 المميزات الرئيسية

### 1️⃣ نظام Western Union (التحويل المالي)
- ✔️ إدارة عمليات التحويل المالي الدولية
- ✔️ إدارة المستخدمين والحسابات البنكية
- ✔️ نظام الأمان والتشفير المتقدم
- ✔️ تتبع المعاملات والفواتير
- ✔️ دعم العملات المتعددة
- ✔️ تقارير مفصلة للمعاملات

### 2️⃣ نظام To-Do List (قائمة المهام)
- ✔️ إضافة وحذف وتعديل المهام
- ✔️ تخزين محلي (Local Storage)
- ✔️ تحديد الأولويات والمواعيد النهائية
- ✔️ تصنيف المهام بالفئات
- ✔️ مزامنة مع حساب المستخدم
- ✔️ إشعارات تذكيرية

### 3️⃣ ساعة رقمية (Digital Clock)
- ✔️ عرض الوقت الحالي بدقة
- ✔️ دعم المناطق الزمنية العالمية
- ✔️ تحويل الساعة بين المناطق المختلفة
- ✔️ عرض التاريخ والوقت
- ✔️ تزامن عالمي للوقت

---

## 🏗️ البنية الهندسية للمشروع

```
western-union/
│
├── 📁 frontend/
│   ├── 📁 components/
│   │   ├── 📁 Clock/
│   │   │   ├── DigitalClock.jsx
│   │   │   ├── TimeZoneSelector.jsx
│   │   │   └── Clock.css
│   │   │
│   │   ├── 📁 TransferForm/
│   │   │   ├── TransferForm.jsx
│   │   │   ├── CurrencyConverter.jsx
│   │   │   └── TransferForm.css
│   │   │
│   │   ├── 📁 TodoList/
│   │   │   ├── TodoList.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   ├── AddTodo.jsx
│   │   │   └── TodoList.css
│   │   │
│   │   └── 📁 Dashboard/
│   │       ├── Dashboard.jsx
│   │       └── Dashboard.css
│   │
│   ├── 📁 pages/
│   │   ├── Home.jsx
│   │   ├── Transfer.jsx
│   │   ├── Tasks.jsx
│   │   └── Settings.jsx
│   │
│   ├── 📁 services/
│   │   ├── api.js
│   │   ├── localStorage.js
│   │   └── sync.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── 📁 backend/
│   ├── 📁 api/
│   │   ├── 📁 routes/
│   │   │   ├── auth.js
│   │   │   ├── transfer.js
│   │   │   ├── users.js
│   │   │   ├── tasks.js
│   │   │   └── sync.js
│   │   │
│   │   ├── 📁 controllers/
│   │   │   ├── authController.js
│   │   │   ├── transferController.js
│   │   │   ├── userController.js
│   │   │   └── taskController.js
│   │   │
│   │   └── 📁 middleware/
│   │       ├── auth.js
│   │       ├── validation.js
│   │       └── errorHandler.js
│   │
│   ├── 📁 models/
│   │   ├── User.js
│   │   ├── Transfer.js
│   │   ├── Account.js
│   │   ├── Task.js
│   │   └── Transaction.js
│   │
│   ├── 📁 services/
│   │   ├── authService.js
│   │   ├── transferService.js
│   │   ├── encryptionService.js
│   │   ├── taskService.js
│   │   └── syncService.js
│   │
│   ├── 📁 config/
│   │   ├── database.js
│   │   ├── security.js
│   │   └── environment.js
│   │
│   └── server.js
│
├── 📁 database/
│   ├── 📁 schema/
│   │   ├── users.sql
│   │   ├── transfers.sql
│   │   ├── accounts.sql
│   │   ├── tasks.sql
│   │   └── transactions.sql
│   │
│   └── 📁 migrations/
│       └── init.sql
│
├── 📁 config/
│   ├── sync-config.js
│   ├── app-config.js
│   └── timezone-config.js
│
├── 📁 public/
│   ├── index.html
│   └── assets/
│
└── 📁 docs/
    ├── API.md
    ├── ARCHITECTURE.md
    └── SETUP.md
```

---

## 🛠️ التقنيات المستخدمة

| الفئة | التقنية |
|------|--------|
| **Frontend** | React.js / Vue.js |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB / PostgreSQL |
| **Storage** | Local Storage + Cloud Sync |
| **Security** | JWT, AES Encryption |
| **API** | RESTful API |
| **Authentication** | OAuth 2.0 |

---

## 📦 التثبيت والإعداد

### المتطلبات
- Node.js v16+
- npm أو yarn
- MongoDB/PostgreSQL

### خطوات التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/FUADMOHAMED022/western-union.git
cd western-union

# تثبيت المكتبات
npm install

# إعداد متغيرات البيئة
cp .env.example .env

# تشغيل الخادم
npm start
```

---

## 🔗 الربط والتزامن بين الأنظمة

### 1. تزامن البيانات المركزي
```javascript
// sync-config.js - إعدادات التزامن
const syncConfig = {
  interval: 5000, // كل 5 ثواني
  modules: ['transfer', 'tasks', 'clock'],
  endpoints: {
    sync: '/api/sync',
    status: '/api/sync/status'
  }
};
```

### 2. الربط بين الأنظمة
- **Western Union ↔ Tasks**: ربط المهام بالمعاملات المالية
- **Clock ↔ Transfers**: تسجيل الوقت الدقيق للعمليات
- **Local Storage ↔ Cloud**: مزامنة البيانات المحلية مع السحابة

---

## 📊 الحالة الحالية

| النظام | الحالة | النسبة |
|--------|-------|--------|
| Western Union System | 🚀 قيد الإنجاز | 30% |
| To-Do List | 🚀 قيد الإنجاز | 25% |
| Digital Clock | 🚀 قيد الإنجاز | 20% |
| التكامل والربط | 📋 المخطط | 0% |

---

## 📝 الخطوات التالية

1. ✅ إنشاء هيكل المشروع الأساسي
2. ✅ بناء واجهات المستخدم
3. ✅ تطوير الخدمات الخلفية
4. ✅ إعداد قاعدة البيانات
5. ✅ تطبيق نظام الأمان
6. ✅ اختبار التكامل والتزامن
7. ✅ نشر المشروع

---

## 👨‍💻 المطور

**FUADMOHAMED022**

---

## 📄 الترخيص

MIT License - جميع الحقوق محفوظة

---

## 🤝 المساهمة

نرحب بجميع المساهمات! يرجى فتح Pull Request

---

**آخر تحديث**: 2026-09-15
