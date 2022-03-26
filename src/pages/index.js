import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const features = [
  {
    num: 1,
    title: "初学者指南",
    iconName: "baby",
    description: <>学习基础建议从这开始。</>,
    link: "beginner",
  },
  {
    num: 2,
    title: "学习路径",
    iconName: "school",
    description: <>一步步深入学习我们的策略。</>,
    link: "learning-path",
  },
  {
    num: 3,
    title: "参考文档",
    iconName: "list-ul",
    description: <>查阅约定的具体内容。</>,
    link: "reference",
  },
];

function Feature({ num, title, iconName, description, link }) {
  const iconStyles = `fa fa-${iconName} fa-stack-1x fa-inverse`;
  const circleStyles = `fa fa-circle fa-stack-2x accent${num}`;
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {iconStyles && (
        <div className="text--center">
          <br />
          <a href={useBaseUrl(`docs/${link}`)}>
            <span className="fa-stack fa-3x">
              <i className={circleStyles}></i>
              <i className={iconStyles}></i>
            </span>
          </a>
          <br />
          <br />
        </div>
      )}
      <h3 className="text--center">
        <a href={useBaseUrl(`docs/${link}`)}>{title}</a>
      </h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Home"
      description="Strategies for Hanabi, a cooperative card game of logic and reasoning"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl("img/hyphenated-circle.png")} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            一款需要逻辑和推理的合作卡牌游戏——
            <a
              href="https://boardgamegeek.com/boardgame/98778/hanabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              花火
            </a>
            的游戏策略。
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/about")}
            >
              学习更多
            </Link>
          </div>
          <br></br>
          <p className="hero__subtitle">
            本约定由
            <a
              href="https://github.com/hanabi/hanabi.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              H-group玩家群组
            </a>
            编写。
          </p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
