import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class unSdg extends I18NMixin(DDDSuper(LitElement)) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.goal = "circle"; // Default goal
    this.width = "254px";
    this.height = "254px";
    this.label = "";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.src = "";
    this.goalLink = "";
  }

  static get properties() {
    return {
      goal: { type: String, reflect: true },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String, reflect: true },
      fetchPriority: { type: String, reflect: true },
      src: { type: String },
      goalLink: { type: String },
      colorOnly: { type: Boolean, reflect: true, attribute: 'color-only' },
    };
  }

  static get styles() {
    return css`
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
        height: var(--un-sdg-height, 254px);
      }
      .svg-wrapper {
        width: 100%;
        height: 100%;
        background-color: var(--un-sdg-goal-color, transparent);
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    `;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('goal')) {
      this.updateGoalColor();
      this.updateAlt();
      this.updateImg();
    }
  }

  // Dynamically constructs the path to the SVG image based on the goal
  getImageUrl(name) {
    return `https://raw.githubusercontent.com/Gerritbandison/un-sdg/refs/heads/main/lib/${name}`;
  }

  // Updates the `src` property based on the current goal
  updateImg() {
    const goalFiles = {
      '1': 'goal-1.svg',
      '2': 'goal-2.svg',
      '3': 'goal-3.svg',
      '4': 'goal-4.svg',
      '5': 'goal-5.svg',
      '6': 'goal-6.svg',
      '7': 'goal-7.svg',
      '8': 'goal-8.svg',
      '9': 'goal-9.svg',
      '10': 'goal-10.svg',
      '11': 'goal-11.svg',
      '12': 'goal-12.svg',
      '13': 'goal-13.svg',
      '14': 'goal-14.svg',
      '15': 'goal-15.svg',
      '16': 'goal-16.svg',
      '17': 'goal-17.svg',
      'all': 'all.svg',
      'circle': 'circle.png'
    };
    this.src = this.getImageUrl(goalFiles[this.goal] || 'default.svg');
  }
  // Updates the background color based on the selected goal
  updateGoalColor() {
    const goalNumber = parseInt(this.goal);
    if (goalNumber >= 1 && goalNumber <= 17) {
      this.style.setProperty('--un-sdg-goal-color', `var(--un-sdg-goal-${goalNumber})`);
    } else {
      this.style.setProperty('--un-sdg-goal-color', 'transparent');
    }
  }

  // Updates the `alt` attribute text based on the selected goal
  updateAlt() {
    const goalDescriptions = {
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
    this.label = goalDescriptions[this.goal] || `Sustainable Development Goal ${this.goal}`;
  }

  render() {
    // Defines links for each goal to the official UN website
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
    const goalLink = goalLinks[this.goal] || 'https://www.un.org/sustainabledevelopment/';

    return html`
      <div class="svg-wrapper">
        ${!this.colorOnly ? html`
          <a href="${goalLink}" target="_blank" rel="noopener">
            <img 
              src="${this.src}"
              alt="${this.label}"
              loading="${this.loading === 'lazy' ? 'lazy' : 'eager'}"
              fetchpriority="${this.fetchPriority}"
            />
          </a>
        ` : ''}
      </div>
    `;
  }
}

customElements.define(unSdg.tag, unSdg);
