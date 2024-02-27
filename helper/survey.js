const LOGO_URL =
  "http://localhost:10003/wp-content/uploads/2023/02/logo-sm.svg";

const IMAGE_URL = "https://membfeat.omnistreak.net/wp-content/uploads/2024/02/";

const surveyItemsQuestion1 = [
  {
    id: "driver",
    name: "Driver",
    imageSrc: `${IMAGE_URL}ball-drive.png`,
  },
  {
    id: "chipping",
    name: "Chipping",
    imageSrc: `${IMAGE_URL}ball-chipping.png`,
  },
  {
    id: "fairway-woods",
    name: "Fariway Woods",
    imageSrc: `${IMAGE_URL}ball-fairway-woods.png`,
  },
  {
    id: "bunker-play",
    name: "Bunker Play",
    imageSrc: `${IMAGE_URL}ball-bunker-play.png`,
  },
  {
    id: "irons",
    name: "Irons",
    imageSrc: `${IMAGE_URL}ball-irons.png`,
  },
  {
    id: "putting",
    name: "Putting",
    imageSrc: `${IMAGE_URL}ball-putting.png`,
  },
  {
    id: "wedges",
    name: "Wedges",
    imageSrc: `${IMAGE_URL}ball-wedges.png`,
  },
];

const surveyItemsQuestion3 = [
  {
    id: "below-70",
    name: "Below 70",
  },
  {
    id: "70-79",
    name: "70-79",
  },
  {
    id: "80-89",
    name: "80-89",
  },
  {
    id: "90-99",
    name: "90-99",
  },
  {
    id: "100-109",
    name: "100-109",
  },
  {
    id: "110-120",
    name: "110-120",
  },
  {
    id: "120+",
    name: "120+",
  },
];

const folowUpDrive = [
  {
    id: "straight-shot",
    name: "Straight Shot",
    imageSrc: `${IMAGE_URL}ball-straight-shot.png`,
  },
  {
    id: "right",
    name: "Right",
    imageSrc: `${IMAGE_URL}ball-right.png`,
  },
  {
    id: "left",
    name: "Left",
    imageSrc: `${IMAGE_URL}ball-left.png`,
  },
];

const folowUpIrons = [
  {
    id: "fat-shots",
    name: "Fat Shots",
    imageSrc: `${IMAGE_URL}ball-fat.png`,
  },
  {
    id: "thin-shots",
    name: "Thin Shots",
    imageSrc: `${IMAGE_URL}ball-thin.png`,
  },
  {
    id: "fat-and-thin-shots",
    name: "Fat & Thin Shots",
    imageSrc: `${IMAGE_URL}ball-fat-thin.png`,
  },
];

const folowUpWedges = [
  {
    id: "fat-shots",
    name: "Fat Shots",
    imageSrc: `${IMAGE_URL}ball-fat.png`,
  },
  {
    id: "thin-shots",
    name: "Thin Shots",
    imageSrc: `${IMAGE_URL}ball-thin.png`,
  },
  {
    id: "distance-control",
    name: "Distance Control",
    imageSrc: `${IMAGE_URL}ball-distance-control.png`,
  },
  {
    id: "fat-and-thin-shots",
    name: "Fat & Thin Shots",
    imageSrc: `${IMAGE_URL}ball-fat-thin.png`,
  },
];

const folowUpChipping = [
  {
    id: "fat-shots",
    name: "Fat Shots",
    imageSrc: `${IMAGE_URL}ball-fat.png`,
  },
  {
    id: "thin-shots",
    name: "Thin Shots",
    imageSrc: `${IMAGE_URL}ball-thin.png`,
  },
  {
    id: "fat-and-thin-shots",
    name: "Fat & Thin Shots",
    imageSrc: `${IMAGE_URL}ball-fat-thin.png`,
  },
];

const folowUpPutting = [
  {
    id: "short-putts",
    name: "Short Putts",
    imageSrc:
      "http://localhost:10003/wp-content/uploads/2024/02/ball-short-putts.png",
  },
  {
    id: "lag-putting",
    name: "Lag Putting",
    imageSrc:
      "http://localhost:10003/wp-content/uploads/2024/02/ball-lag-putting.png",
  },
  {
    id: "direction-control",
    name: "Direction Control",
    imageSrc:
      "http://localhost:10003/wp-content/uploads/2024/02/ball-direction-control.png",
  },
];

function showOnboardingPopup() {
  let currentQuestion = 0;

  generatePopup(currentQuestion);

  function generatePopup(currentQuestion, answer) {
    const questions = getQuestions(answer);
    const surveyItemsHTML = questions[currentQuestion].items
      .map((item) =>
        createSurveyItemHTML(
          item,
          questions[currentQuestion].isCheckboxButton,
          currentQuestion
        )
      )
      .join("");
    const popup = createSurveyPopup(
      currentQuestion,
      questions,
      surveyItemsHTML
    );

    const form = document.getElementById(`surveyForm${currentQuestion}`);
    const submitButton = document.querySelector(
      `.submit-button${currentQuestion}`
    );

    initializeFormEvents(form, submitButton, currentQuestion, questions, popup);
    addClickHandlingToContainerItems(
      form,
      submitButton,
      questions[currentQuestion].maximumChoices,
      currentQuestion
    );
  }

  function addClickHandlingToContainerItems(
    form,
    submitButton,
    maximumChoice,
    currentQuestion
  ) {
    document.addEventListener("click", function (e) {
      if (e.target.matches('input[type="checkbox"]')) {
        setTimeout(() => {
          updateButtonState(form, submitButton, maximumChoice);
        }, 0);
      } else {
        const containerItem = e.target.closest(
          `#container-item-${currentQuestion}`
        );
        if (!containerItem) return;

        const checkbox = containerItem.querySelector('input[type="checkbox"]');
        if (!checkbox) return;

        const checkedCheckboxesCount = form.querySelectorAll(
          'input[type="checkbox"]:checked'
        ).length;

        if (checkbox.checked) {
          checkbox.checked = false;
        } else if (checkedCheckboxesCount < maximumChoice) {
          checkbox.checked = true;
        } else {
          e.preventDefault();
          return;
        }

        updateButtonState(form, submitButton, maximumChoice);
        e.preventDefault();
      }
    });
  }
  function getQuestions(answer) {
    return [
      {
        title: "What Part of Your Game Are You Most Interested in Improving?",
        items: surveyItemsQuestion1,
        maximumChoices: 2,
        itemContainerClass: "survey-items-container",
        isCheckboxButton: false,
      },
      generateDynamicQuestion(answer, "survey-items-container"),
      {
        title: "What is Your Average Score?",
        items: surveyItemsQuestion3,
        maximumChoices: surveyItemsQuestion3.length,
        itemContainerClass: "survey-items-container-average-score",
        isCheckboxButton: true,
      },
    ];
  }

  function createSurveyPopup(currentQuestion, questions, surveyItemsHTML) {
    return pgPopup({
      close: false,
      class: "pg-popup-welcome-survey",
      closeOnClick: false,
      content: generatePopupContent(
        currentQuestion,
        questions,
        surveyItemsHTML
      ),
    });
  }

  function generatePopupContent(currentQuestion, questions, surveyItemsHTML) {
    const question = questions[currentQuestion];
    const isMultipleChoice =
      question.isCheckboxButton && currentQuestion > 0
        ? `<div class="multiple-choice-text">*Multiple Choice</div>`
        : "";

    return `
      <div class="container-wrapper">
        <div class="logo-container"><img src=${LOGO_URL} alt="" /></div>
        <div class="survey-title fw-500 fs-30 lh-36 text-center">${
          question.title
        }</div>
        <div class="multiple-choice-text">${
          isMultipleChoice ? "*Multiple Choice" : ""
        }</div>
        <form id="surveyForm${currentQuestion}" class="survey-container">
          <div class="${question.itemContainerClass}">${surveyItemsHTML}</div>
        </form>
        <div class="button-wrapper">
          <button type="submit" form="surveyForm${currentQuestion}" class="submit-button${currentQuestion} button">
            ${currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    `;
  }

  function initializeFormEvents(
    form,
    submitButton,
    currentQuestion,
    questions,
    popup
  ) {
    form.addEventListener("change", () =>
      updateButtonState(
        form,
        submitButton,
        questions[currentQuestion].maximumChoices
      )
    );
    submitButton.disabled = true;
    submitButton.addEventListener("click", (event) =>
      handleSubmitButton(event, currentQuestion, questions, popup)
    );
  }

  function handleSubmitButton(event, currentQuestion, questions, popup) {
    event.preventDefault();
    const form = document.getElementById(`surveyForm${currentQuestion}`);
    const selectedOptions = form.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const selectedValues = Array.from(selectedOptions).map(
      (option) => option.value
    );

    sendMixpanelEvent(`Survey Question ${currentQuestion + 1}`, {
      Answer: selectedValues.join(","),
    });

    popup.close();
    if (currentQuestion < questions.length - 1) {
      generatePopup(currentQuestion + 1, selectedValues[0]);
    } else {
      ajax.post("pg/surveyrdone", {}, function () {});
    }
  }

  function generateDynamicQuestion(answer, itemContainerClass) {
    if (answer) answer = answer.trim();

    const questionDetails = {
      Driver: {
        title: "What is the starting direction of your ball flight?",
        items: folowUpDrive,
      },
      Irons: {
        title: "What is Your Typical Miss?",
        items: folowUpIrons,
      },
      Wedges: {
        title: "What's your biggest issue with your 30-100 yard wedge shots?",
        items: folowUpWedges,
      },
      Chipping: {
        title: "When you hit a poor chip what typically happens?",
        items: folowUpChipping,
      },
      Putting: {
        title: "What's your number one challenge with putting?",
        items: folowUpPutting,
      },
    };

    const defaultQuestion = {
      title: "What is the starting direction of your ball flight?",
      items: folowUpDrive,
    };
    const { title, items } = questionDetails[answer] || defaultQuestion;
    return {
      title,
      items,
      maximumChoices: answer === "Chipping" ? items.length : 1,
      itemContainerClass,
      isCheckboxButton: answer === "Chipping" ? true : false,
    };
  }

  function updateButtonState(form, submitButton, maximumChoices) {
    const checkboxes = form.querySelectorAll(
      `input[name="gameImprovementSelection"]`
    );
    const checkedCheckboxes = Array.from(checkboxes).filter(
      (checkbox) => checkbox.checked
    );

    submitButton.disabled = checkedCheckboxes.length === 0;
    checkboxes.forEach((checkbox) => {
      checkbox.disabled =
        checkedCheckboxes.length >= maximumChoices && !checkbox.checked;
    });
  }

  function createSurveyItemHTML(item, isCheckboxButton, currentQuestion) {
    const imageContainerHTML = item.imageSrc
      ? `
      <div class="image-container">
        <img width="100%" height="100%" src="${item.imageSrc}" alt="${item.name}">
      </div>
    `
      : "";

    return `
      <div class="${
        isCheckboxButton ? "survey-item" : "survey-item-radio-button"
      }">
        <div class="container-item" id="${
          "container-item-" + currentQuestion
        }"}">
          <input  type="checkbox" id="${
            item.id
          }" name="gameImprovementSelection" value="${item.name} ">
          ${imageContainerHTML}
          <div class="text">
            <p>${item.name}</p>
          </div>
        </div>
      </div>
    `;
  }

  function sendMixpanelEvent(eventName, eventData) {
    if (window.mixpanel && typeof window.mixpanel.track === "function") {
      eventData = {
        Platform: "Web",
        ...eventData,
      };
      window.mixpanel.track(eventName, eventData);
    } else {
      console.error("Mixpanel is not properly initialized.");
    }
  }
}



  // function addClickHandlingToContainerItems(
  //   form,
  //   submitButton,
  //   maximumChoice,
  //   currentQuestion
  // ) {
  //   let selectedCheckboxes = [];
  //   document.addEventListener("click", function (e) {
  //     if (e.target.matches('input[type="checkbox"]')) {
  //       const checkbox = e.target;
  //       const checkedCheckboxesCount = form.querySelectorAll(
  //         'input[type="checkbox"]:checked'
  //       ).length;
  //       if (!checkbox.checked) {
  //         const index = selectedCheckboxes.indexOf(checkbox);
  //         if (index !== -1) {
  //           selectedCheckboxes.splice(index, 1);
  //         }
  //       } else {
  //         if (checkedCheckboxesCount < maximumChoice + 1) {
  //           selectedCheckboxes.push(checkbox);
  //         } else if (selectedCheckboxes.length > 0) {
  //           selectedCheckboxes[0].checked = false;
  //           selectedCheckboxes.shift();
  //           selectedCheckboxes.push(checkbox);
  //         }
  //       }
  //       setTimeout(() => {
  //         updateButtonState(form, submitButton, maximumChoice, currentQuestion);
  //       }, 0);
  //     } else {
  //       const containerItem = e.target.closest(
  //         `#container-item-${currentQuestion}`
  //       );
  //       if (!containerItem) return;

  //       const checkbox = containerItem.querySelector('input[type="checkbox"]');
  //       if (!checkbox) return;
  //       const checkedCheckboxesCount = form.querySelectorAll(
  //         'input[type="checkbox"]:checked'
  //       ).length;

  //       if (checkbox.checked) {
  //         const index = selectedCheckboxes.indexOf(checkbox);
  //         if (index !== -1) {
  //           selectedCheckboxes.splice(index, 1);
  //           checkbox.checked = false;
  //         }
  //       } else {
  //         if (checkedCheckboxesCount < maximumChoice) {
  //           selectedCheckboxes.push(checkbox);
  //           checkbox.checked = true;
  //         } else if (selectedCheckboxes.length > 0) {
  //           selectedCheckboxes[0].checked = false;
  //           selectedCheckboxes.shift();
  //           selectedCheckboxes.push(checkbox);
  //           checkbox.checked = true;
  //         }
  //       }
  //       setTimeout(() => {
  //         updateButtonState(form, submitButton, maximumChoice, currentQuestion);
  //       }, 0);
  //       e.preventDefault();
  //     }
  //   });
  // }