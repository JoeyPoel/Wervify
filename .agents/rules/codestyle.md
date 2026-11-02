# Standing Codestyle & Repo Invariants

1. **Skills First**: Before starting ANY task in this repository, load and read the relevant skills in `.agents/skills/` and follow their guidelines strictly.
2. **Zero Hardcoded Values in UI Components**:
   - **Colors**: Never hardcode a hex color, rgb value, or raw styling hex in a component. All colors originate from `src/config/theme.ts` and are exposed as semantic Tailwind utilities (e.g., `bg-wervify-cobalt`, `border-wervify-marine/60`, `text-wervify-ice/80`).
   - **Strings**: Never hardcode user-facing copy or labels in any component or template. All user-facing strings must reside in `src/constants/strings.ts` (or structured dataset files such as `packages.ts`, `cases.ts`, `faq.ts` importing or mirroring the strings registry).
3. **Claims Policy**:
   - Never invent or fabricate statistics, client names, reviews, prices, or guarantees.
   - Any provisional stat, client name, quote, or metric must use a clearly identified `PLACEHOLDER_` prefix in strings data.
4. **Resilient Backends**:
   - Serverless functions in `api/` must handle missing environment variables (database connection, SMTP/Resend API keys) gracefully without throwing uncaught exceptions or crashing.
5. **Quality Verification**:
   - Run `npm test` and `npm run build` before declaring any task complete.
