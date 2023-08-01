import React from 'react';
import styles from './home-callouts.module.css';
import Container from "@site/src/components/container";
import useBaseUrl from '@docusaurus/useBaseUrl';
import CalloutBoxClickable from '@site/src/components/callout-box-clickable';

export default function HomeCallouts() {
    const callouts = [
        {
            title: '🌐 Introduction and Ecosystem',
            subtitle: 'Get to know the basics and the idea behind the people\’s currency.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/ecredits_ecosystem'),
        },
        {
            title: '😎 Consumers',
            subtitle: 'Learn how to start using eCredits for shopping and other daily transactions.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/consumers'),
        },
        {
            title: '🏪 Merchants',
            subtitle: 'Improve your customers’ experience by accepting cryptocurrencies such as eCredits.  ',
            urlText: 'Read more',
            url: useBaseUrl('/docs/merchants'),
        },
        {
            title: '💼 Ambassadors',
            subtitle: 'Engage your network and onboard new merchants into the eCredits network.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/ambassadors'),
        },
        {
            title: '⛏️ Validators',
            subtitle: 'Learn how to earn eCredits by supporting the network and validating blocks.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/validators'),
        },
        {
            title: '🔥 Developers',
            subtitle: 'Get to know the basics and specifics of developing for eCredits.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/developers'),
        },
        {
            title: '🔗 Blockchain 101',
            subtitle: 'Learn everything you need to know about blockchain.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/blockchain101'),
        },
        {
            title: '🛡️ Security',
            subtitle: 'Learn all about crypto security - and see why and how eCredits is secure.',
            urlText: 'Read more',
            url: useBaseUrl('/docs/security'),
        },
        {
            title: '🛠️ Tools',
            subtitle: 'Explore the various tools and wallets available for eCredits!',
            urlText: 'Read more',
            url: useBaseUrl('/docs/tools'),
        },
    ]
    return (
        <Container>
            <div className={styles.homeCallouts}>
                {callouts.map((callout, i) => (
                    <div key={i} className={styles.homeCallouts__item}>
                        <CalloutBoxClickable title={callout.title} subtitle={callout.subtitle} url={callout.url} urlText={callout.urlText} icon={callout.icon}/>
                    </div>
                ))}
            </div>
        </Container>
    );
}