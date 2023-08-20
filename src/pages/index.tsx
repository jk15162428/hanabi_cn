import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles["heroBanner"])}>
      <div className="container">
        <img src={useBaseUrl("img/logo.png")} width="200em" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          一款需要逻辑和推理的合作卡牌游戏——{" "}
          <a
            href="https://boardgamegeek.com/boardgame/98778/hanabi"
            target="_blank"
            rel="noopener noreferrer"
          >
            花火
          </a>
          的游戏策略。
        </p>
        <div className={styles["buttons"]}>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles["getStarted"],
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
          编写，由中文社区进行翻译。
        </p>
        <br></br>
        <p className="hero__subtitle">
          若您有兴趣帮助H-group约定中文化，可加入
          <a
            href="https://discord.gg/BvW4sDxrQx"
            target="_blank"
            rel="noopener noreferrer"
          >
            H-group中文Discord群组
          </a>
          。
        </p>
      </div>
    </header>
  );
}

function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="一款需要逻辑和推理的合作卡牌游戏——花火的游戏策略。"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
