<template>
    <div>
        <label
            :class="{invalid: isError}"
            :for=controlName>{{ friendlyName }}
        </label>

        <div class="input-relative-container">
            <div class="focus-wrap"
                :class="{invalidInput: isError, inputFocused: isFocused}">
            </div>
            <input
                    @focusin=handleFocus(true)
                    @focusout=handleFocus(false)
                    @blur=handleInvalidBlur
                    @keyup=sendKeyEvent
                    ref="inputElement"
                    :type=typeValue
                    :id=controlName
                    :name=controlName
                    :autocomplete="autoComplete ? autoComplete : 'off'"
                    :pattern="patternValue ? patternValue : undefined"
                    :required="isRequired ? true : false"
                    :placeholder="placeHolder ? placeHolder : undefined"
                />
        </div>

        <span
            :id="controlName + '-validation'"
            :class="{invalidText: isError}"
            class="error-message"
            aria-live="assertive"
            aria-hidden="false">{{ currentMessage }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import {
    ref,
    defineProps,
    defineEmits,
    defineExpose
} from 'vue';

const isError = ref(false);
const isFocused = ref(false);
const currentMessage = ref("");
const ariaHidden = ref(true);
const emit = defineEmits(['keyEvent']);

const props = defineProps({
    controlName: String,
    errorMessage: {
        type: String,
        default: "Please fill out this field."
    },
    autoComplete: {
        type: String,
        default: undefined
    },
    typeValue: String,
    patternValue: String,
    friendlyName: String,
    isRequired: {
        type: Boolean,
        default: false,
    },
    placeHolder: {
        type: String,
        default: undefined
    },
    validateOnBlur: {
        type: Boolean,
        default: false
    },
})

currentMessage.value = "";
const inputElement = ref();

/**
 * Handle a single invalid field. Report to the user the error message.
 * 
 * NOTE: This method refers to the ERRORS object to retrieve the corresponding
 * error message given the field name.
 * 
 * @param {Function} additionalValidation - Additional validations to apply to this input.
 */
function handleInvalid(additionalValidation?: Function): boolean {
    const field = inputElement.value;

    if (field) {
        field.setCustomValidity("");
    
        let valid = (() => {
            if (additionalValidation)
                return field.checkValidity() && additionalValidation();
            return field.checkValidity();
        })();
        
        ariaHidden.value = !valid;
        currentMessage.value = !valid ? props.errorMessage : "";
        isError.value = !valid;

        if (!valid)
            field.setCustomValidity(props.errorMessage);
    
        return valid;
    }

    return false;
}

/**
 * Track the focus state of the input element in order to hide and show the focus
 * ring.
 * 
 * NOTE: The addition of the focus ring is specifically tailored to the Safari browser.
 * During testing, I noticed an issue where, when using `outline`, the focus ring would
 * not match the border radius of the input element. This shouldn't cause any sort of
 * accessibility issues.
 * 
 * @param {boolean} focused - Whether the input element is focused.
 */
function handleFocus(focused: boolean): void {
    isFocused.value = focused;
}

/**
 * Handle a single invalid field. Report to the user the error message.
 * 
 * NOTE: This method refers to the ERRORS object to retrieve the corresponding
 * error message given the field name.
 */
function handleInvalidBlur(): void {
    if (props.validateOnBlur)
        handleInvalid(inputElement.value);
}

/**
 * Send a key event to the field.
 * 
 * @param {Event} e - The event that triggered this error.
 * 
 */
 function sendKeyEvent(e: any) {
    const field: any = e.target;
    const inputValue = field.value;
    const numbersOnly = inputValue.replace(/\D/g, '');

    field.value = numbersOnly;

    emit("keyEvent", {
        name: props.controlName,
        value: field.value
    });
}

defineExpose({
    handleInvalid,
    controlName: props.controlName
})
</script>
<style scoped>
* {
    font-size: 1.3rem;
    line-height: 1.2;
}

div {
    margin: 0;
    padding-inline-end: 0.2rem;
}

label {
    position: relative;
    display: inline-block;
    margin-inline-start: 0.25rem;
    margin-block-end: clamp(0.5rem, 0.286rem + 0.571vw, 0.8rem);
    font-size: clamp(0.75rem, 0.579rem + 0.746vw, 1.25rem);
    color: var(--text-color);
    width: 100%;
}

.focus-wrap {
    margin: 0;
    padding: 0;
    inset-inline-start: -0.15rem;
    inset-block-start: -0.05rem;
    border: 4px solid var(--focus-color);
    width: clamp(5.6rem, 3.457rem + 5.714vw, 8.6rem);
    height: 2.85rem;
    border-radius: 11px;
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.invalid:after {
    content: "!";
    background-color: var(--error-color);
    border-radius: 100%;
    font-size: 0.875rem;
    text-align: center;
    padding-left: 7.25px;
    padding-right: 7.25px;
    padding-top: 2px;
    padding-bottom: 1.5px;
    color: white;
    position: absolute;
    left: clamp(4.5rem, 2.357rem + 5.714vw, 7.5rem);
    bottom: 10%;
    opacity: 1;
    transition: color 0.5s;
}

input {
    border: 1px solid var(--input-border-color);
    width: clamp(5.85rem, 3.779rem + 5.524vw, 8.75rem);
    background-color: var(--input-background-color);
    border-radius: 8px;
    height: 3.25rem;
    padding: 15px;
    box-sizing: border-box;
    font-family: var(--app-font-family);
    font-size: clamp(1rem, 0.821rem + 0.476vw, 1.25rem);
    color: var(--text-color);
    outline: none;
}

input:focus {
    border: 1px solid var(--focus-color);
    border-radius: 8px;
}

.inputFocused {
    opacity: 1;
    border: 4px solid var(--focus-color) !important;
}

.input-relative-container {
    position: relative;
}

.invalid {
    transition: color 0.5s;
    color: var(--error-color);
    border-radius: 8px;
}

.invalidInput {
    border: 4px solid var(--error-color);
    opacity: 1;
}

.invalidText {
    opacity: 1;
    transform: translate(0, 0);
}

span {
    display: block;
    margin-block-start: 0.8rem;
    margin-inline-start: 0.25rem;
    margin-block-end: 0.15rem;
    font-size: clamp(0.65rem, 0.507rem + 0.381vw, 0.85rem);
    color: var(--error-color);
    min-height: 1rem;
    transform: translate(-50%, 0);
    transition: opacity 0.5s, transform 0.5s, color 0.5s;
    opacity: 0;
}

@media (max-width: 880px) {
    .error-message {
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    span {
        transition: none;
    }

    .invalid:after {
        transition: 0s;
    }

    .invalid {
        transition: 0s;
    }
}

@media (max-width: 375px) {
    .focus-wrap {
        inset-inline-start: -0.10rem;
        inset-block-start: -0.08rem;
        width: clamp(3.25rem, 0.621rem + 18.286vw, 4.85rem);
        height: clamp(1.95rem, 0.225rem + 12vw, 3rem);
    }

    input {
        width: clamp(3.35rem, 0.229rem + 21.714vw, 5.25rem);
        height: clamp(2.25rem, 0.607rem + 11.429vw, 3.25rem);
        font-size: clamp(0.45rem, -0.536rem + 6.857vw, 1.05rem);
    }

    .invalid:after {
        opacity: 0;
    }

    .error-message {
        height: 10px;
    }
}
</style>