<template>
    <label class="Toggle" for="toggle">
        Theme
        <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="Toggle__input"
            v-model="toggle"
            @change=handleCheckChange />
        <span class="Toggle__display" hidden>
            <svg
            aria-hidden="true"
            focusable="false"
            class="Toggle__icon Toggle__icon--checkmark"
            width="18"
            height="14"
            viewBox="0 0 122.88 122.88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"
                    fill="currentcolor"
                    stroke="currentcolor"
                />
            </svg>
                <svg
                aria-hidden="true"
                focusable="false"
                class="Toggle__icon Toggle__icon--cross"
                width="13"
                height="13"
                viewBox="0 0 122.88 122.89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z"
                    fill="currentcolor"
                />
            </svg>
        </span>
    </label>
</template>

<script lang="ts" setup>
import {
    onMounted,
    ref
} from 'vue';

import {
    detectColorScheme,
    loadPreferredTheme,
    setPreferredTheme
} from '@/scripts/theme';

const toggle = ref("false");
const preferredTheme = ref(detectColorScheme());

/**
 * When this component is mounted, the preferred theme is loaded. This
 * process involves loading the preferred theme from memory, in localStorage,
 * and applying it to the theme switcher.
 */
onMounted(() => {
    const decision = (preferredTheme.value === "dark").toString();
    loadPreferredTheme(preferredTheme.value);
    toggle.value = decision;
})

/**
 * When the theme switcher is clicked, the preferred theme is set to either
 * light or dark.
 * 
 * @param {Event} e - The event that triggered this function.
 */
function handleCheckChange(e: Event): void {
    const field: any = e.target;
    const value = field.checked;

    if (value) {
        setPreferredTheme("dark");
        loadPreferredTheme("dark");
    } else {
        setPreferredTheme("light");
        loadPreferredTheme("light");
    }
}
</script>

<style scoped>
.Toggle {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  gap: 1ch;
  color: var(--text-color);
  font-size: clamp(0.75rem, 0.393rem + 0.952vw, 1.25rem);
}
.Toggle__display {
  --offset: 0.25em;
  --diameter: clamp(1.25rem, 0.857rem + 1.048vw, 1.8rem);

  display: inline-flex;
  align-items: center;
  justify-content: space-around; 

  width: calc(var(--diameter) * 2 + var(--offset) * 2);
  height: calc(var(--diameter) + var(--offset) * 2);
  box-sizing: content-box;

  border: 0.1em solid var(--theme-picker-border-color);

  position: relative;
  border-radius: 100vw;
  background-color: #fbfbfb;

  transition: transform 250ms;
  cursor: pointer;
}

.Toggle__display::before {
  content: '';

  width: var(--diameter);
  height: var(--diameter);
  border-radius: 50%;

  box-sizing: border-box;
  border: 0.1 solid rgb(0 0 0 / 0.2);

  position: absolute;
  z-index: 2;
  top: 50%;
  left: var(--offset);
  transform: translate(0, -50%);

  background-color: #3c3c3c;
  transition: inherit;
}

.Toggle__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
}

.Toggle__input:focus + .Toggle__display {
  outline: 1px dotted #212121;
  outline: 1px auto var(--focus-color);
}

.Toggle__input:focus:not(:focus-visible) + .Toggle__display {
  outline: 0;
}

.Toggle__input:checked + .Toggle__display {
  background-color: #1c1c1c;
  border: 0.1em solid var(--theme-picker-border-color);
}

.Toggle__display::before:checked {
    background-color: #1a1a1a;
}
.Toggle__input:checked + .Toggle__display::before {
  transform: translate(100%, -50%);
  background-color: #fefefe;
}

.Toggle__input:disabled + .Toggle__display {
  opacity: 0.6;
  filter: grayscale(40%);
  cursor: not-allowed;
}

.Toggle__icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  color: inherit;
  fill: currentcolor;
  vertical-align: middle;
}

[dir='rtl'] .Toggle__display::before {
  left: auto;
  right: var(--offset);
}

.Toggle__icon--cross {
  color: #2e2e2e;
  font-size: 85%;
}

.Toggle__icon--checkmark {
  color: #ffffff;
}

[dir='rtl'] .Toggle__input:checked + .Toggle__display::before {
  transform: translate(-100%, -50%);
}

@media (prefers-reduced-motion: reduce) {
  .Toggle__display {
    transition-duration: 0ms;
  }
}

@media (max-width: 375px) {
  label {
    color: rgba(0, 0, 0, 0) !important;
  }

  .Toggle__display {
    --offset: 0.25em;
    --diameter: clamp(1rem, 0.589rem + 2.857vw, 1.25rem);
  }
}
</style>