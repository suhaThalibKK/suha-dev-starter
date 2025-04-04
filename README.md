# 🚀 **@suha.thalib/code-shield**  


### **Zero-Config Code Quality Toolkit for Modern Projects**  

[![npm version](https://img.shields.io/badge/Version-1.0.8-blue)](https://www.npmjs.com/package/@suha.thalib/code-shield)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# 🔥 **Bye-Bye Config Headaches!**  
## ⚡ Quick Start

```bash
npx @suha.thalib/code-shield@latest
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


## 🚀 Get Started in 10 Seconds

Run in any JS project root:

```bash
npx @suha.thalib/code-shield@latest
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
1. Run `npx @suha.thalib/code-shield@latest`  
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
