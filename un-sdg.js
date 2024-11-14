/**
 * Copyright 2024 GerritBandison
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
export class unSdg extends I18NMixin(DDDSuper(LitElement)) {

  static get tag() {
    return "un-sdg";
  }

  // sets default variables
  constructor() {
    super();
    this.goal = "circle";
    this.width = "254px";
    this.height = "254px";
    this.label = "";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.src = "";
    this.goalLink="";
  }

  // sets variable types
  static get properties() {
    return {
      goal: { type: String, reflect: true },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String, reflect: true },
      fetchPriority: { type: String, reflect: true },
      src: {type: String},
      goalLink: {type:String},
      colorOnly: { type: Boolean, reflect: true, attribute: 'color-only' },
    };
  }

  // sets styles including CSS properties
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --un-sdg-goal-1: #e5243b;
          --un-sdg-goal-2: #DDA63A;
          --un-sdg-goal-3: #4C9F38;
          --un-sdg-goal-4: #C5192D;
          --un-sdg-goal-5: #FF3A21;
          --un-sdg-goal-6: #26BDE2;
          --un-sdg-goal-7: #FCC30B;
          --un-sdg-goal-8: #A21942;
          --un-sdg-goal-9: #FD6925;
          --un-sdg-goal-10: #DD1367;
          --un-sdg-goal-11: #FD9D24;
          --un-sdg-goal-12: #BF8B2E;
          --un-sdg-goal-13: #3F7E44;
          --un-sdg-goal-14: #0A97D9;
          --un-sdg-goal-15: #56C02B;
          --un-sdg-goal-16: #00689D;
          --un-sdg-goal-17: #19486A;

          display: block;
          width: var(--un-sdg-width, 254px);
          padding: 0;
          height: var(--un-sdg-height, 254px);
        }
        .svg-wrapper {
          width: 100%;
          height: 100%;
          background-color: var(--un-sdg-goal-color);
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
          
        }
      `
    ];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('goal')) {
      this.updateGoalColor();
      this.updateAlt()
      this.updateImg();
    }
  }
  updateImg() {
    const src = {
      '1': '/lib/goal-1.svg',
      '2': './lib/goal-2.svg',
      '3': './lib/goal-3.svg',
      '4': './lib/goal-4.svg',
      '5': './lib/goal-5.svg',
      '6': './lib/goal-6.svg',
      '7': './lib/goal-7.svg',
      '8': './lib/goal-8.svg',
      '9': './lib/goal-9.svg',
      '10': './lib/goal-10.svg',
      '11': './lib/goal-11.svg',
      '12': './lib/goal-12.svg',
      '13': './lib/goal-13.svg',
      '14': './lib/goal-14.svg',
      '15': './lib/goal-15.svg',
      '16': './lib/goal-16.svg',
      '17': './lib/goal-17.svg',  
      'all': './lib/all.svg',
      'circle':'./lib/circle.png',
      
      // Add all the goal image paths here...
    };
    this.src = src[this.goal] || './images/default.svg'; // Fallback to a default image
  }
  updateGoalColor() {
    const goalNumber = parseInt(this.goal);
    if (goalNumber >= 1 && goalNumber <= 17) {
      this.style.setProperty('--un-sdg-goal-color', `var(--un-sdg-goal-${goalNumber})`);
    } else {
      this.style.setProperty('--un-sdg-goal-color', 'transparent');
    }
  }
  updateAlt() {
    if (!this.label) {
      const goals = {
        'circle': 'Sustainable Development Goals logo',
        'all': 'All 17 Sustainable Development Goals',
        '1': 'Goal 1: No Poverty',
        '2': 'Goal 2: Zero Hunger',
        '3': 'Goal 3: Good Health and Well-being',
        '4': 'Goal 4: Quality Education',
        '5': 'Goal 5: Gender Equality',
        '6': 'Goal 6: Clean Water and Sanitation',
        '7': 'Goal 7: Affordable and Clean Energy',
        '8': 'Goal 8: Decent Work and Economic Growth',
        '9': 'Goal 9: Industry, Innovation and Infrastructure',
        '10': 'Goal 10: Reduced Inequalities',
        '11': 'Goal 11: Sustainable Cities and Communities',
        '12': 'Goal 12: Responsible Consumption and Production',
        '13': 'Goal 13: Climate Action',
        '14': 'Goal 14: Life Below Water',
        '15': 'Goal 15: Life on Land',
        '16': 'Goal 16: Peace, Justice and Strong Institutions',
        '17': 'Goal 17: Partnerships for the Goals'
      };
      this.label = goals[this.goal] || `Sustainable Development Goal ${this.goal}`;
    }
  }

  render() {
 
    // Sets the image source according to what number the goal is
    let imgSrc = new URL(`../lib/goal-${this.goal}/.svg`, import.meta.url).href;
    // If the goal is all, set it to the all svg
    if (this.goal === 'all') {
      imgSrc = new URL(`../lib/goal-${this.goal}/.svg`, import.meta.url).href;
    }
    // If the goal is circle, set it to the circle image
    else if (this.goal === 'circle') {
      imgSrc = new URL(`../un-sdg/lib/${this.goal}.png`, import.meta.url).href;
    }

  const goalLinks = {
    '1': 'https://www.un.org/sustainabledevelopment/poverty/',
    '2': 'https://www.un.org/sustainabledevelopment/hunger/',
    '3': 'https://www.un.org/sustainabledevelopment/health/',
    '4': 'https://www.un.org/sustainabledevelopment/education/',
    '5': 'https://www.un.org/sustainabledevelopment/gender-equality/',
    '6': 'https://www.un.org/sustainabledevelopment/water-and-sanitation/',
    '7': 'https://www.un.org/sustainabledevelopment/energy/',
    '8': 'https://www.un.org/sustainabledevelopment/economic-growth/',
    '9': 'https://www.un.org/sustainabledevelopment/infrastructure-industrialization/',
    '10': 'https://www.un.org/sustainabledevelopment/inequality/',
    '11': 'https://www.un.org/sustainabledevelopment/cities/',
    '12': 'https://www.un.org/sustainabledevelopment/sustainable-consumption-production/',
    '13': 'https://www.un.org/sustainabledevelopment/climate-change/',
    '14': 'https://www.un.org/sustainabledevelopment/oceans/',
    '15': 'https://www.un.org/sustainabledevelopment/biodiversity/',
    '16': 'https://www.un.org/sustainabledevelopment/peace-justice/',
    '17': 'https://www.un.org/sustainabledevelopment/globalpartnerships/',
    'all': 'https://www.un.org/sustainabledevelopment/sustainable-development-goals/'
  };
  
  // Fallback to a default URL in case the goal is not mapped
  const goalLink = goalLinks[this.goal] || 'https://www.un.org/sustainabledevelopment/';

    return html`
      <style>
        :host {
          --un-sdg-width: ${this.width};
          --un-sdg-height: ${this.height};
        }
      </style>
      <div class="svg-wrapper">
        ${!this.colorOnly ? html`
          <a href="${goalLink}" target="_blank" rel="noopener"></a>
          <img 
            src="${this.src}"
            alt="${this.label}"
            loading="${this.loading === 'lazy' ? 'lazy' : 'eager'}"
            fetchpriority="${this.fetchPriority}"
          />
        ` : ''}
      </div>
    `;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);


