# Automation Framework made with TS + Playwright

The goal of this project was to put into practice my knowledge using this amazing tool for automation testing.

<!---
*Do you want to create a framework based on this project? Check this [branch](https://github.com/ArCiGo/TS-Automation-Framework/tree/master)!*
--->

## The project 💻

The **SWAG Labs/Sauce Demo** store, from **Sauce Labs**, was automated using *TS + Playwright*. It generates an HTML report for passed and failed tests. Also, this project has **GitHub Action**s.

## Tools ⚙️

* *Playwright v1.28.1*.
* *GitHub Actions*.

## Main project structure 🗂️

```bash
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── SLCartPage.ts
│   ├── SLCheckoutCompletePage.ts
│   ├── SLCheckoutInformationPage.ts
│   ├── SLCheckoutOverviewPage.ts
│   ├── SLLoginPage.ts
│   └── SLProductPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── logout.spec.ts
│   └── shoppingCart.spec.ts
├── .env.template
├── package.json
└── playwright.config.ts
```

## Setup 🛠️

The following steps can be executed using a terminal (I use [hyper](https://hyper.is/)), or using the terminal provided by VS Code.

1. Clone the repo on your computer at any path you want.-

```bash
> git clone https://github.com/ArCiGo/TS-Playwright-Automation-Framework.git

> git checkout AutomationFrameworkSample_TS
```

2. In the path you cloned the repo, open the project folder and install the packages.-

```bash
> cd TS-Automation-Framework

> npm i
```

3. Before to execute the tests, you need to create a *.env* file at root level. There is a *.env.template* file with the structure that should follow your *.env* file. Just delete the *.template* suffix and fill with the values you want to use.

## Run the tests ⚡

```bash
# If you want to just only run the tests, execute the following command:
> npm run execute:tests
# If you want to see a report of your executed tests, execute the following command:
> npm run execute:report

# If you want to execute the both commands above:
> npm run playwright:all
```

When you execute the command to see the report, a new folder is generated at root level (**playwright-report**). This folder contains the report for the executed tests.

![UI Report Sample](./Image01.png)
![UI Report Sample](./Image02.png)