import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Grid from "@mui/material/Grid";
import styles from './index.module.css';
import HomeCallouts from '@site/src/components/sections';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="the people's currency!">
      <HomepageHeader />
      <main>
        <Grid container justifyContent="center" sx={{ paddingBottom: 8, paddingTop: 15 }} spacing={3}>
          <Grid item xs={12}>
            <HomeCallouts />
          </Grid>
        </Grid>
        
      </main>
    </Layout>
  );
}
