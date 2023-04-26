<template>
  <main
    class="age-calc-main-container"
    aria-label="A calculator that converts your birthdate to years, months, and days.">
    <header>
      <h1>Birthday Calculator</h1>
      <div class="theme-picker-container">
          <ThemePicker></ThemePicker>
      </div>
    </header>
    <div>
      <section class="calculator" aria-label="The age calculator application.">
        <form 
          class="age-calc-section"
          aria-label="The birthday entry form."
          novalidate
          @submit.prevent="handleSubmit">
          <div class="age-calc-grid-container">
            <BasicInput
              controlName="birthDateDays"
              errorMessage="Invalid day"
              autoComplete="bday-day"
              friendlyName="DAY"
              typeValue="tel"
              patternValue="^[0-9]*$"
              isRequired
              placeHolder="DD"
              ref="dateEntry"
              @keyEvent=handleInputEvent
            ></BasicInput>
            <BasicInput
              controlName="birthDateMonth"
              errorMessage="Invalid month"
              autoComplete="bday-month"
              typeValue="tel"
              friendlyName="MONTH"
              patternValue="(?:0[1-9]|1[012])"
              isRequired
              placeHolder="MM"
              ref="monthsEntry"
              @keyEvent=handleInputEvent
            ></BasicInput>
            <BasicInput
              controlName="birthDateYear"
              errorMessage="Invalid year"
              autoComplete="bday-year"
              friendlyName="YEAR"
              typeValue="tel"
              patternValue="(?:19|20)\d\d"
              isRequired
              placeHolder="YYYY"
              ref="yearsEntry"
              @keyEvent=handleInputEvent
            ></BasicInput>
          </div>
          <div class="form-divider">
            <hr class="dividing-line">
              <div class="button-focus-wrap"
                  :class="{buttonFocused: inFocus}">
              </div>
              <button
                @focusin=focusIn(true)
                @focusout=focusIn(false)
                @click=handleSubmit
                title="Press to calculate your age.">
                <div class="calculate-icon"
                  :class="{focused: inFocus}"></div>
              </button>
          </div>
        </form>
        <section class="calculations" aria-label="The result of the calculation.">
          <section class="calculation" aria-label="The years calculation">
            <h2><span>{{ yearsCalculation }}</span> years</h2>
          </section>
          <section class="calculation" aria-label="The months calculation">
            <h2><span>{{ monthsCalculation }}</span> months</h2>
          </section>
          <section class="calculation" aria-label="The days calculation">
            <h2><span>{{ daysCalculation }}</span> days</h2>
          </section>
          <section
            class="calculation"
            style="display: none"
            aria-label="The complete calculation"
            aria-live="assertive"
            aria-hidden="false">{{ finalCalculation }}
          </section>
        </section>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
  ref,
} from 'vue';

import ThemePicker from './components/ThemePicker.vue';
import BasicInput from './components/BasicInput.vue';

const yearsCalculation = ref("--");
const daysCalculation = ref("--");
const monthsCalculation = ref("--");
const finalCalculation = ref("");

const inFocus = ref(false);

const dateEntry = ref();
const yearsEntry = ref();
const monthsEntry = ref();
const elements = [dateEntry, yearsEntry, monthsEntry];

let days = NaN;
let months = NaN;
let years = NaN;


/**
 * Calculate the age in years, months, and days.
 * 
 * DISCLAIMER: This is an AI generated function. It was produced by GPT 3.5
 * using prompt engineering.
 * 
 * @param {number} month - The month of the birthdate.
 * @param {number} day   - The day of the birthdate.
 * @param {number} year  - The year of the birthdate.
 * 
 * @returns {object} - An object containing the age in years, months, and days.
 */
function calculateAge(month: number, day: number, year: number): any {
  const currentDate: any = new Date();
  const birthDate: any = new Date(year, month - 1, day);

  const diffInMilliseconds = currentDate - birthDate;

  const diffInYears = diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25;
  const diffInMonths = (diffInYears - Math.floor(diffInYears)) * 12;
  const diffInDays = Math.floor((diffInMonths - Math.floor(diffInMonths)) * 30.44);

  return {
    years: Math.floor(diffInYears),
    months: Math.floor(diffInMonths),
    days: diffInDays
  };
}

/**
 * Focus in on the input field.
 * 
 * @param {boolean} focused - Boolean indicating whether the input is focused.
 */
function focusIn(focused: boolean) {
  inFocus.value = focused;
}

/**
 * Handle a single input event for one of the input fields in the calculator.
 * 
 * @param {any} value - The value of the input field. 
 */
 function handleInputEvent(value: any) {
  const name = value.name;
  const numberValue = parseInt(value.value);

  if (name == 'birthDateDays') {
    days = numberValue;
  } else if (name == 'birthDateMonth') {
    months = numberValue;
  } else if (name == 'birthDateYear') {
    years = numberValue;
  }
}

/**
 * Handle the form submit event. Display the age in years, months, and days.
 * Additionally, populate the span that will be read to those with screen readers.
 */
function handleSubmit(): void {
  let error = false;

  if (isNaN(years)) {
    yearsEntry.value.handleInvalid(() => false);
    error = true;
  }

  if (isNaN(months)) {
    monthsEntry.value.handleInvalid(() => false);
    error = true;
  }

  if (isNaN(days)) {
    dateEntry.value.handleInvalid(() => false);
    error = true;
  }

  if (error) {
    return;
  }

  let valid: any = isValidDate(years, months, days);
  let values = calculateAge(months, days, years);

  let status = elements.map((item: any) => {
    return item.value.handleInvalid(() => valid[item.value.controlName])
  });

  if (status.every(value => value)) {
    yearsCalculation.value = values.years.toString();
    daysCalculation.value = values.days.toString()
    monthsCalculation.value = values.months.toString();

    finalCalculation.value = `
      You have been alive for ${values.years} years,
      ${values.months} months,
      and ${values.days}`;
  }
}

/**
 * Check to see if the birthdate provided is valid.
 * 
 * DISCLAIMER: This is an AI generated function. It was produced by GPT 3.5
 * using prompt engineering.
 * 
 * @param {number} year - The year of the birthdate. 
 * @param {number} month - The month of the birthdate.
 * @param {number} day - The day of the birthdate.
 * 
 * @returns {object} - An object containing booleans indicating the validity of each parameter.
 */
 function isValidDate(year: number, month: number, day: number): {
  birthDateYear: boolean,
  birthDateMonth: boolean,
  birthDateDays: boolean
} {
  let date = new Date(year, month - 1, day);
  let daysInMonth = new Date(year, month, 0).getDate();

  let daysValidation = () => date.getDate() == day;
  let monthsValidation = () => date.getMonth() == month - 1;
  let yearValidation = () => date.getFullYear() == year;

  if (days > daysInMonth)
    date = new Date(year, month - 1, daysInMonth - 5);

  return {
    birthDateYear: yearValidation(),
    birthDateMonth: monthsValidation(),
    birthDateDays: daysValidation()
  };
}
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: url("assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  src: url("assets/fonts/Poppins-Italic.ttf");
}

@font-face {
  font-family: "Poppins";
  font-weight: bold;
  src: url("assets/fonts/Poppins-Bold.ttf");
}

@font-face {
  font-family: "Poppins";
  font-weight: bold;
  font-style: italic;
  src: url("assets/fonts/Poppins-BoldItalic.ttf");
}

@font-face {
  font-family: "Poppins";
  font-weight: bolder;
  src: url("assets/fonts/Poppins-ExtraBold.ttf");
}

@font-face {
  font-family: "Poppins";
  font-weight: bolder;
  font-style: italic;
  src: url("assets/fonts/Poppins-ExtraBoldItalic.ttf");
}

[data-theme="light"] {
  --page-color: hsl(0, 0%, 89%);
  --focus-color: hsl(210, 99%, 45%);
  --results-color: hsl(259, 100%, 65%);
  --text-color: hsl(0, 0%, 7%);
  --icon-color: hsl(0, 0%, 100%);
  --icon-focus-color: hsl(0, 100%, 99%);
  --heading-color: hsl(0, 0%, 0%);
  --label-text-color: hsl(0, 0%, 7%);
  --widget-color: hsl(0, 0%, 100%);
  --results-font-weight: bold;
  --results-font-style: italic;
  --dividing-line-color: hsl(0, 0%, 73%);
  --widget-box-shadow-color: hsl(0, 0%, 71%);
  --app-font-family: "Poppins";
  --error-color: hsl(0, 97%, 34%);
  --button-focus-color: hsl(0, 0%, 0%);
  --font-clamp: clamp(2.5rem, 1.303rem + 5.219vw, 6rem);
  --dividing-line-clamp: clamp(0.2rem, -0.091rem + 1.267vw, 1.05rem);
  --input-border-color: hsl(0, 0%, 45%);
  --input-background-color: rgb(255, 255, 255);
  --theme-picker-border-color: hsl(0, 0%, 20%);
}

[data-theme="dark"] {
  --page-color: hsl(0, 0%, 22%);
  --focus-color: hsl(207, 100%, 50%);
  --results-color: hsl(259, 100%, 65%);
  --text-color: hsl(0, 0%, 100%);
  --icon-color: hsl(0, 0%, 100%);
  --icon-focus-color: #000000;
  --heading-color: hsl(0, 0%, 100%);
  --label-text-color: hsl(0, 0%, 7%);
  --widget-color: hsl(0, 0%, 7%);
  --results-font-weight: bold;
  --results-font-style: italic;
  --dividing-line-color: hsl(0, 0%, 73%);
  --widget-box-shadow-color: hsl(0, 0%, 31%);
  --app-font-family: "Poppins";
  --error-color: hsl(28, 98%, 50%);
  --button-focus-color: hsl(0, 0%, 100%);
  --font-clamp: clamp(2.5rem, 1.303rem + 5.219vw, 6rem);
  --dividing-line-clamp: clamp(0.2rem, -0.091rem + 1.267vw, 1.05rem);
  --input-border-color: hsl(0, 0%, 88%);
  --input-background-color: hsl(0, 1%, 26%);
  --theme-picker-border-color: hsl(0, 0%, 100%);
}

#app {
  background-color: var(--page-color);
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

body  {
  font-family: var(--app-font-family), Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--page-color);
  margin: 0;
  padding: 0;
}

.age-calc-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 0.25fr);
  column-gap: 0.25rem;
}

.calculation {
  font-size: 4rem;
}

.calculation > h2 {
  margin: 0;
  padding: 0;
  font-weight: var(--results-font-weight);
  font-style: var(--results-font-style);
  font-size: var(--font-clamp);
  color: var(--text-color);
}

.calculation > h2 > span {
  color: var(--results-color);
  font-weight: var(--results-font-weight);
  font-style: var(--results-font-style);
}

.calculations {
  padding-block-end: 2rem;
  padding-block-start: 2rem;
  line-height: var(--font-clamp);
}

.calculator {
  /* Changed from 4.143 to 6.143 */
  width: clamp(22rem, 6.143rem + 47.619vw, 47rem);
  box-shadow: 1px 1px 15px var(--widget-box-shadow-color);
  background: var(--widget-color);
  padding-block-start: 3rem;
  padding-inline-start: clamp(1.5rem, 0.429rem + 2.857vw, 3rem);
  padding-inline-end: clamp(1.5rem, 0.429rem + 2.857vw, 3rem);
  padding-block-end: 1rem;
  border-radius: 10px;
  border-end-end-radius: 30%;
  box-sizing: border-box;
}

.dividing-line {
  height: 1px;
  border: none;
  background-color: var(--dividing-line-color);
  margin-block-start: var(--dividing-line-clamp);
  margin-block-end: var(--dividing-line-clamp);
  width: 100%;
}

.calculate-icon {
  position: absolute;
  inset-inline-end: 25%;
  inset-block-start: 25%;
  width: 50%;
  height: 50%;
  mask: url("assets/images/icon-arrow.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  background: var(--icon-color);
  z-index: 2;
}

.focused {
  background: var(--icon-focus-color);
}

.form-divider {
  position: relative;
  width: clamp(16rem, 0.643rem + 40.952vw, 37.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 100%;
}

.form-divider > .button-focus-wrap {
  position: absolute;
  padding: clamp(1.5rem, 0.786rem + 1.905vw, 2.5rem);
  pointer-events: none;
  border: 5px solid var(--focus-color);
  inset-inline-end: -4px;
  border-radius: 100%;
  opacity: 0;
}

.form-divider > .buttonFocused {
  opacity: 1;
}

.form-divider > button {
  position: relative;
  border-radius: 100%;
  padding: clamp(1.5rem, 0.786rem + 1.905vw, 2.5rem);
  border: none;
  background-color: var(--results-color);
}

.form-divider > button:focus {
  outline: none;
  border: 1px solid var(--focus-color);
  background-color: var(--button-focus-color);
}

header {
  position: relative;
}

h1 {
  color: var(--heading-color);
  font-size: clamp(1.25rem, 0.536rem + 1.905vw, 2.25rem);
  margin-bottom: 0.35rem;
  margin-inline-start: 0.25rem;
}

.theme-picker-container {
  position: absolute;
  inset-block-start: clamp(-0.25rem, -0.679rem + 1.143vw, 0.35rem);
  inset-inline-end: 0.5rem;
}

@media (max-width: 530px) {
  .dividing-line {
    position: absolute;
  }

  .form-divider > .button-focus-wrap {
    inset-inline-end: 40.5%;
  }
}

@media (max-width: 375px) {
  [data-theme="light"], [data-theme="dark"] {
    --font-clamp: clamp(1.5rem, -0.143rem + 11.429vw, 2.5rem);
  }

  .calculations {
    padding-block-end: clamp(0.95rem, 0.457rem + 3.429vw, 1.25rem);
    padding-block-start: 2rem;
  }

  .calculator {
    width: clamp(14rem, 4.143rem + 68.571vw, 20rem);
  }

  .form-divider > button {
    position: relative;
    border-radius: 100%;
    padding: clamp(1.15rem, 0.575rem + 4vw, 1.5rem);
    border: none;
    background-color: var(--results-color);
  }

  h1 {
    font-size: clamp(0.85rem, 0.193rem + 4.571vw, 1.25rem);
  }
  
  .form-divider {
    position: relative;
    height: 0;
    width: 100%;
  }

  .form-divider > button:focus {
    border: 3px solid var(--focus-color);
  }

  .form-divider > .button-focus-wrap {
    opacity: 0;
  }

  .theme-picker-container {
    position: absolute;
    inset-block-start: clamp(-0.25rem, -0.679rem + 1.143vw, 0.35rem);
    inset-inline-end: 0.3rem;
  }
}
</style>
