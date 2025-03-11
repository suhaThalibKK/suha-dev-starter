# 🚀 **@suha/code-shield**  
### **Zero-Config ESLint + Prettier + Husky Starter Kit**  

[![npm version](https://img.shields.io/badge/Version-1.0.0-blue)](https://www.npmjs.com/package/@suha/dev-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# 🔥 **Bye-Bye Config Headaches!**  

```bash
npx @suha/code-shield
```

### _One Command to Rule All Code Quality_  

**Tired of...**  
🔧 **Endless setup** for new projects?  
🤬 **Style debates** wasting PR time?  
🚨 **"Oops" commits** slipping through?  


## 💔 _We've All Been There..._

| Developer Frustration 😤         |    Solution 💡                                                                 |
|----------------------------------|---------------------------------------------------------------------------------|
| 🚨 **"Why does CI keep failing?!"** | 🐶 **Husky Guard**: Blocks bad commits *before* they reach CI/CD                |
| 💥 **"My IDE formatting broke everything!"** | 🎨 **Prettier Magic**: Auto-format on save (no more manual cleanup)             |
| 😱 **"Who committed this broken code?!"** | 🛡️ **ESLint Shield**: Catches errors pre-commit                                 |
| 🥊 **"Tabs vs spaces debate round 47..."** | ✨ **Prettier Peace Treaty**: Auto-formats code - team debates = extinct        |

<sub>▼ Click to expand why this matters ▼</sub>

<details>
<summary>💡 Why This Matters</summary>

1. **Save 3-5 hours/week** on code reviews arguing about style  
2. **Reduce CI failures** by 80%+ with pre-commit checks  
3. **Onboard new devs faster** with consistent standards  
</details>

## 🛠 What You Get in 30 Seconds

- ✅ ESLint - Catch bugs before runtime
- ✅ Prettier - Auto-format on save (no more manual cleanup)
- ✅ Husky - Guard commits like a watchdog 🐶
- ✅ **Universal** - Works out of the box with: <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs" height="20"> <img src="https://img.shields.io/badge/React-20232A?logo=react" height="20">  <img src="https://img.shields.io/badge/Vue-4FC08D?logo=vuedotjs" height="20">  

**Zero extra config needed** for these frameworks! 🎉


## 🛠 Framework Compatibility

| Framework | Needs Extra Config? | Recommended to Include? |  
|-----------|---------------------|-------------------------|  
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react) | ❌ No | ✅ Yes |  
| ![Vue](https://img.shields.io/badge/-Vue-4FC08D?logo=vuedotjs) | ❌ No | ✅ Yes |  
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs) | ❌ No | ✅ Yes |  
| ![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular) | ✅ Yes | ❌ No |  


> ℹ️ **Angular Users**: While possible to use, it requires [additional setup](FAQ.md#angular-configuration).  
> Our defaults are optimized for React/Vue/Node projects.


## 🚀 Get Started in 10 Seconds

Run in any JS/TS project root:

```bash
npx @suha/code-shield
```

 ## Commit like a pro:
 
```bash
git add .
git commit -m "feat: add magic"  # Husky auto-fixes + checks!
```
## 🚀 Benefits You Get Immediately

### 🎉 What Happens Next?

 **✅ Auto-Fix Mode:** Husky runs ESLint & Prettier to fix issues automatically

  **🛡️ Quality Gate:** Commits get blocked only if unfixable errors remain

  **⚡ Instant Feedback:** See results in your terminal in 2-3 seconds

### 🌟 What This Gives You


| Feature               | Superpower                                  | Saves You From                          |
|-----------------------|---------------------------------------------|------------------------------------------|
| 🐞 **Bug Ninja**      | Finds undefined vars before runtime         | "Why is this broken?!" debugging         |
| 🎨 **Style Sorcerer** | Auto-formats code on save                   | Manual indentation wars                  |
| 🐶 **Commit Watchdog**| Blocks bad pushes pre-CI                    | Embarrassing build failure emails        |
| ⚡ **Flash Linter**   | Only checks changed files                   | Waiting 10min for full repo linting      |

 
## ❓ FAQ

**Q: Does this work with TypeScript?**  
A: Yes! Just install [`@typescript-eslint/parser`](https://npmjs.com/package/@typescript-eslint/parser) separately.

**Q: Can I use this with Angular projects?**  
A: Absolutely! Just follow these steps:  
1. Run `npx @suha/code-shield`  
2. Install Angular-specific dependencies:  
   ```bash
   npm install --save-dev @angular-eslint/eslint-plugin @typescript-eslint/parser
   ```
Extend Angular rules in your .eslintrc.json:
   
 ```bash
    {
      "extends": ["plugin:@angular-eslint/recommended"]
    }
```
[Detailed Angular setup guide →](https://github.com/angular-eslint/angular-eslint)

**Q: Can I override the default configs?**

A: Of course! Your rules always take precedence:
  - Edit [`.eslintrc.json`](https://eslint.org/docs/latest/use/configure/) for custom rules
  - Modify [`.prettierrc`](https://prettier.io/docs/options.html) for personal formatting

**Q: How do I disable a rule temporarily?**

A: Add comments above the code:
 ```bash
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unusedVar = 'test';
```
---
## 👥 Contribute & Connect

### Found a bug? Want to improve something?  
1. [🔱 Fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)  
2. [🛠 Create a PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)  
3. **Become a hero** 🦸  

---

### Let's Connect! 

**Made with ❤️ by [Suha Thalib K K](https://suhathalibkk.github.io/suha-thalib-resume/)**  

 [![Gmail](https://img.shields.io/badge/Gmail-%23D14836?style=flat&logo=gmail&logoColor=white)](mailto:suha.thalib@gmail.com)  [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suhathalib/)  [![GitHub](https://img.shields.io/badge/GitHub-%23181717?style=flat&logo=github&logoColor=white)](https://github.com/suhaThalibKK)

*Your feedback fuels more awesome tools!* 🚀
