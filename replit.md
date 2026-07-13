# هاشم الروابدة — Portfolio

موقع بورتفوليو شخصي عربي بالكامل (RTL)، بتصميم عصري وحركات Framer Motion، يعرض المهارات والمشاريع والخبرات، ويتيح للزائر ربط حساب Google لتخصيص الاسم والصورة المعروضة على الموقع تلقائياً.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — واجهة الموقع (React + Vite)
- `pnpm --filter @workspace/api-server run dev` — خادم API (يحمل بروكسي Clerk فقط حالياً، لا قاعدة بيانات)
- `pnpm run typecheck` — فحص الأنواع لكل الحزم

## Stack

- pnpm workspaces, React + Vite, TailwindCSS v4, Framer Motion, React Icons
- Auth: Clerk (Replit-managed) — Google SSO + email/password
- لا قاعدة بيانات مستخدمة؛ الموقع بالكامل عرض واجهة أمامية بدون بيانات خلفية

## Where things live

- `artifacts/portfolio` — الموقع (كل الأقسام في `src/components/sections/`)
- `artifacts/portfolio/src/components/auth/` — بوابة الربط بجوجل (`link-account-gate.tsx`)، مزامنة الهوية (`clerk-identity-sync.tsx`)، مظهر Clerk (`clerk-appearance.ts`)
- `artifacts/portfolio/src/components/site-name-provider.tsx` — الاسم المعروض على الموقع (قابل للتعديل يدوياً أو تلقائياً عبر Clerk)
- `artifacts/portfolio/src/components/profile-photo-provider.tsx` — الصورة الشخصية المعروضة (رفع يدوي أو تلقائي عبر Clerk)
- `artifacts/api-server/src/middlewares/clerkProxyMiddleware.ts` — بروكسي Clerk للإنتاج

## Architecture decisions

- الاسم والصورة الرئيسية على الموقع يديرهما Context مشترك (`SiteNameProvider` / `ProfilePhotoProvider`) محفوظ في `localStorage`، بدلاً من الحالة المحلية بكل مكوّن — يسمح بالتحديث من أي مصدر (تعديل يدوي، رفع صورة، أو تسجيل دخول Google).
- بوابة ربط الحساب (`LinkAccountGate`) تظهر مرة واحدة لكل جلسة قبل الصفحة الرئيسية، لكنها **لا تحجب** الزوار — دائماً يوجد خيار "متابعة كزائر" لأن الصفحة الرئيسية يجب أن تبقى متاحة للزوار غير المسجلين.
- فيسبوك غير مدعوم كموفر تسجيل دخول من Clerk (فقط Google, GitHub, Apple, X)، والعمر غير متاح من بيانات حساب Google/Facebook القياسية — تم الاتفاق مع المستخدم على تجاهل هاتين النقطتين (Google فقط، بدون عمر).

## Product

- بورتفوليو بالعربية بالكامل: Hero, Skills, Values, About, Projects, Experience, Education, Contact, Footer
- منتقي لون التمييز (accent color) + وضع ليلي/نهاري، محفوظان في `localStorage`
- الاسم والصورة الرئيسية قابلان للتخصيص: يدوياً (قلم تعديل / رفع صورة) أو تلقائياً عبر ربط حساب Google
- نص متغير (typewriter) يعرض الأدوار المهنية تحت الصورة الرئيسية

## User preferences

- كل المحتوى الظاهر للمستخدم بالعربية بالكامل، باستثناء أسماء التقنيات والعلامات التجارية القياسية (React, TypeScript, GitHub, إلخ) التي تبقى بلغتها الأصلية.
- الاسم المعروض على الموقع قابل للتعديل من قبل الزائر (ليس ثابتاً في الكود).

## Gotchas

- `resume.pdf` في `public/` هو ملف نصي عادي بامتداد `.pdf` وليس PDF حقيقي — يحتاج استبدال لاحقاً إذا كان زر "تحميل السيرة الذاتية" سيُستخدم فعلياً.
- Clerk يعمل بمفاتيح تطوير (`pk_test`) في بيئة التطوير — هذا متوقع ولا يجب "تصحيحه"؛ يتم التبديل تلقائياً لمفاتيح الإنتاج عند النشر.
