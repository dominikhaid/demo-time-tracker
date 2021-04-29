/**
 * Regex Validation rules
 * @param {String|Number} val
 * @returns boolean
 */
const val_email = val =>
  /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(val);
const val_password = val =>
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(val);
const val_password_special = val => /(.*[^\w\d\s:])/gm.test(val);
const val_password_length = val =>
  /^(?=.*)(?=.*[^\s:])([^\s]){8,16}$/gm.test(val);
const val_password_digit = val => /(.*\d.*)$/gm.test(val);
const val_password_case = val => /([A-Z].*[a-z]|[a-z].*[A-Z])/gm.test(val);
const val_zip = val => /^(?:[1-9]|0(?!0{4}))\d{4}(?:[-\s]\d{4})?$/gm.test(val);
const val_required = val => val.replace(/\s*/gm, '') !== '';
const val_phone = val =>
  /(\+\d{1})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s-.]?\d{4}/gm.test(val);

/**
 * @desc form field validation object
 * @param {Bool} state
 * @param {String} msg
 * @returns object
 */
const check_field = (state, msg) => {
  return {
    state: state,
    msg: msg,
  };
};

/**
 * @desc validate input field
 * @param {String} type
 * @param {String} value
 * @param {Array} rules
 * @param {Bool} required
 * @returns validation object {state: bool,msg: string}
 */
export const validateField = ({type, value, rules, required}) => {
  let check = true;
  if (!type) return false;

  switch (type) {
    case 'email':
      check = check_field(
        val_email(value),
        'Please type in a valid email address!',
      );
      break;
    case 'password':
      check = {state: false, type: 'password', msg: {}};
      check.msg.length = check_field(
        val_password_length(value),
        'Between 8-16 characters',
      );
      check.msg.case = check_field(
        val_password_case(value),
        'One upper and one lower case character',
      );
      check.msg.digit = check_field(val_password_digit(value), 'One digit');
      check.msg.special = check_field(
        val_password_special(value),
        'One special character',
      );
      check.msg.full = check_field(
        val_password(value),
        'Your passwort must be between 8-16 character long and contain one uppercase and one lowercase chracter at least one number and one sepcial character!',
      );

      if (check.msg.full.state)
        check = {state: true, msg: 'Password is vaild!', type: 'password'};
      break;
    case 'text':
      if (required === true)
        check = check_field(
          val_required(value),
          'This field must be filled out!',
        );
      if (typeof rules === 'string') {
        check = check_field(val_zip(value), 'Please type in a valid zip code!');
      }
      //TODO WE NEED REGEX VALIDATION HERE
      if (!rules && !required && required === false)
        check = check_field(true, 'This field has no validation!');
      break;
    case 'tel':
      if (required)
        check = check_field(
          val_phone(value),
          'Please type in a valid phone number!',
        );
      if (!required || required === false)
        check = check_field(true, 'This field has no validation!');
      break;
    default:
      if (required === true)
        check = check_field(
          val_required(value),
          'This field must be filled out!',
        );
      if (!required || required === false)
        check = check_field(true, 'This field has no validation!');
      break;
  }

  return check;
};

/**
 * @desc validate form
 * @param {String} name form name
 * @returns array
 */
export const validateFrom = name => {
  let formFields = document.querySelectorAll(`form[name="${name}"] input`);
  let formtest = true;
  let fieldValues = [];
  let compare = true;

  formFields.forEach((e, index) => {
    let test = validateField({
      value: e.value,
      type: e.type,
      required: e.required,
    });

    if (e.type === 'password') {
      if (compare === true) compare = e.value;
      if (e.value !== compare) compare = false;
      if (
        (compare === false && formFields[index + 1].value === e.value) ||
        (compare === false && formFields[index - 1].value === e.value)
      )
        compare = true;
      if (!compare) test.msg = 'Your passwords are not matching!';
      if (!compare) test.state = false;
    }

    if (e.getAttribute('data-value') !== '')
      fieldValues.push({
        state: true,
        msg: false,
        name: `remembered_${e.id}`,
        value: e.getAttribute('data-value'),
      });

    if (!test.state) formtest = false;

    fieldValues.push({
      state: test.state,
      msg:
        typeof test.msg !== 'string'
          ? test.msg[Object.keys(test.msg)[Object.keys(test.msg).length - 1]]
              .msg
          : test.msg,
      name: e.id,
      value: e.value,
    });
  });

  if (!compare || !formtest) return {state: false, data: fieldValues};
  return {state: true, data: fieldValues};
};

/**
 * @desc display form errors
 * @param {String} name form name
 * @param {Array} fields [{state:bool,msg:string,name:id}]
 * @returns true
 */
export const remapErrors = (name, fields) => {
  if (!document.querySelector(`form[name="${name}"]`)) return false;

  fields.forEach(field => {
    if (field.state) return false;

    let formField = document.querySelector(
      `form[name="${name}"] #${field.name}`,
    );

    let oldValErrors = formField.parentElement.querySelector(
      'span.form-validation-error',
    );

    if (!formField) return false;

    if (oldValErrors)
      [...oldValErrors.children].forEach(e => oldValErrors.removeChild(e));

    if (!oldValErrors) {
      oldValErrors = document.createElement('SPAN');
      oldValErrors.classList.add('form-validation-error');
      formField.parentElement.appendChild(oldValErrors);
    }

    let error = document.createElement('P');
    error.innerHTML = field.msg;
    error.classList.add('text-red-dark');
    oldValErrors.appendChild(error);
  });
  return true;
};
