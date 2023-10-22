const formValues: { [key: string]: string | boolean } = {
  id_study_level: "2",
  name: "khaled",
  email: "khaled@gmail.com",
  password: "anwar",
  id_civility: "",
  checked: false,
};

function checkFormValuesValidity(
  formValues: { [key: string]: string | boolean },
  optionalValuesArr?: string[]
): boolean {
  for (const key in formValues) {
    if (formValues.hasOwnProperty(key)) {
      // Check if the key is optional 
      if (
        optionalValuesArr &&
        optionalValuesArr.includes(key) &&
        (formValues[key] === "" || formValues[key] === false)
      ) {
        console.log(`its okay the key ${key} is optional`)
      }else if (formValues[key] === "" || formValues[key] === false) {
        console.log(`the key ${key} is required !`)
        return false;
      }
    }
  }
  return true;
}

console.log(checkFormValuesValidity(formValues, ["checked","id_civility"])); //the key id_civility is required ! --> false
