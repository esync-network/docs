/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  eCreditsEcosystem: [{type: 'autogenerated', dirName: 'ecredits_ecosystem'}],
  consumers: [{type: 'autogenerated', dirName: 'consumers'}],
  merchants: [{type: 'autogenerated', dirName: 'merchants'}],
  ambassadors: [{type: 'autogenerated', dirName: 'ambassadors'}],
  validators: [{type: 'autogenerated', dirName: 'validators'}],
  developers: [{type: 'autogenerated', dirName: 'developers'}],
  blockchain101: [{type: 'autogenerated', dirName: 'blockchain101'}],
  security: [{type: 'autogenerated', dirName: 'security'}],
  tools: [{type: 'autogenerated', dirName: 'tools'}],

  // But you can create a sidebar manually
  
  //eCreditsEcosystem: [
  //  'ecredits_ecosystem/index',
  //  'ecredits_ecosystem/thesce',
  //  'ecredits_ecosystem/ecredits_blockchain'
  //],
};

module.exports = sidebars;