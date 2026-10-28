/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

import './styles/app.scss';
import 'bootstrap/js/dist/collapse';
const Cookies = require('js-cookie');

import './programs';

document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelectorAll('.btn-admissions').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.btn-admissions').forEach((el) => {
                el.classList.remove('active');
                el.setAttribute('aria-pressed', 'false');
            });
            document.querySelectorAll('.admissions-checklist').forEach((el) => {
                el.classList.add('d-none');
            });
            document.querySelectorAll('.persona').forEach((el) => {
                el.classList.add('d-none');
            });

            e.currentTarget.classList.add('active');
            e.currentTarget.setAttribute('aria-pressed', 'true');

            document.querySelector('#' + e.currentTarget.dataset.checklist).classList.remove('d-none');
            document.querySelector('#' + e.currentTarget.dataset.checklist + '-persona').classList.remove('d-none');
        });

        const studentTypeHash = window.location.hash;

        const studentType = Cookies.get('student_type');

        if (studentTypeHash) {
            if ('#' + el.dataset.checklist === studentTypeHash) {
                el.click();
            }
        } else if (studentType) {
            if (el.dataset.checklist === studentType) {
                el.click();
            }
        }
    });

    document.querySelectorAll('.question-reset').forEach((el) => {
        el.addEventListener('click', (e) => {
            const questionBox = el.closest('.question-box');

            questionBox.querySelector('.question').classList.remove('d-none');
            questionBox.querySelectorAll('.result').forEach((el) => {
                el.classList.add('d-none');
            });
            questionBox.querySelectorAll('input').forEach((el) => {
                el.checked = false;
            });
            questionBox.querySelector('.question-reset').classList.add('d-none');
            questionBox.querySelector('input[type=radio]').focus();
        });
    });
    document.querySelectorAll('.question form').forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const questionBox = form.closest('.question-box');
            const answer = new FormData(form).get('answer');
            if (!answer) {
                form.querySelector('input[type=radio]').focus();
                return;
            }

            const result = questionBox.querySelector('#' + answer);
            questionBox.querySelector('.question').classList.add('d-none');
            result.classList.remove('d-none');
            result.setAttribute('tabindex', '-1');
            questionBox.querySelector('.question-reset').classList.remove('d-none');
            result.focus();
        });
    });

    document.querySelectorAll('#toggle-extra-admissions-deadlines').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            el.classList.add('d-none');
            document.querySelector('#extra-admissions-deadlines').classList.remove('d-none');
        });
    });

    document.querySelectorAll('#i_want').forEach((el) => {
        el.addEventListener('change', (e) => {
            const result = e.currentTarget.value;

            if (result === 'want-1') {
                Cookies.set('want', 'want-1');
                Cookies.set('student_type', 'first-time');
            }
            if (result === 'want-2') {
                Cookies.set('want', 'want-2');
                Cookies.set('student_type', 'non-degree');
                Cookies.set('programs', 'early-college');
            }
            if (result === 'want-3') {
                Cookies.set('want', 'want-3');
                Cookies.set('student_type', 'transfer');
            }
            if (result === 'want-4') {
                Cookies.set('want', 'want-4');
                Cookies.set('student_type', 're-entry');
            }
            if (result === 'want-5') {
                Cookies.set('want', 'want-5');
                Cookies.set('student_type', 'transient');
            }
            if (result === 'want-6') {
                Cookies.set('want', 'want-6');
                Cookies.set('student_type', 'international');
            }
            if (result === 'want-7') {
                Cookies.set('want', 'want-7');
                Cookies.set('student_type', 'non-degree');
            }
            if (result === 'want-8') {
                Cookies.set('want', 'want-8');
                Cookies.set('student_type', 'cont-ed');
            }
            if (result === 'want-9') {
                Cookies.set('want', 'want-9');
                Cookies.set('student_type', 'transfer');
            }
            if (result === 'want-10') {
                Cookies.set('want', 'want-10');
                Cookies.set('student_type', 'dual');
            }

            document.querySelectorAll('#want-result div').forEach((el) => {
                el.classList.add('d-none');
            });

            document.querySelector('#' + result).classList.remove('d-none');
        });

        const want = Cookies.get('want');
        if (want) {
            el.value = want;
            el.dispatchEvent(new Event('change'));
        }
    });
});
