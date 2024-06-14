import { Question } from "survey-core";
import { ElementFactory } from "survey-core";
import { SurveyQuestionElementBase } from "survey-react-ui";
import { Serializer } from "survey-core";
import { createElement } from "react";
import { ReactQuestionFactory } from "survey-react-ui";
import { localization } from "survey-creator-core";
import { SvgRegistry } from "survey-core"
import ReactDOMServer from "react-dom/server";

const CUSTOM_TYPE = "dummy-picker";

// Model
export class QuestionDummyPickerModel extends Question {
    getType() {
        return CUSTOM_TYPE;
    }
    // Custom getter / setter
    get dummyPickerType() {
        return this.getPropertyValue("dummyPickerType");
    }
    set dummyPickerType(val) {
        this.setPropertyValue("dummyPickerType", val);
    }
}

ElementFactory.Instance.registerElement(CUSTOM_TYPE, (name) => {
    return new QuestionDummyPickerModel(name);
});

// Question
export class SurveyQuestionDummyPicker extends SurveyQuestionElementBase {
    constructor(props: any) {
        super(props);
        this.state = { value: this.question.value };
    }
    get question() {
        return this.questionBase;
    }
    get value() {
        return this.question.value;
    }
    get type() {
        return this.question.dummyPickerType;
    }

    handleChange(event: any) {
        this.question.value = event.target.value;
        this.setState({ value: event.target.value });
    }

    handleRandomClick() {
        const randomValue = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
        this.question.value = randomValue;
        this.setState({ value: randomValue });
    }

    renderDummyPicker(type: string) {
        switch (type) {
            case "Random": {
                return (
                    <div className="flex items-center space-x-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => this.handleRandomClick()}
                        >
                            Generate Random Value
                        </button>
                        <span className="text-lg">{this.state.value}</span>
                    </div>
                );
            }
            case "Slider": {
                return (
                    <div className="flex items-center space-x-2">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={this.state.value || 0}
                            onChange={(e) => this.handleChange(e)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <span className="text-lg">{this.state.value}</span>
                    </div>
                );
            }
            default:
                return (<div>Unknown type</div>)
        }
    }

    renderElement() {
        return (
            <div>
                {this.renderDummyPicker(this.type)}
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion(CUSTOM_TYPE, (props) => {
    return createElement(SurveyQuestionDummyPicker, props);
});

// Serialzier
Serializer.addClass(
    CUSTOM_TYPE,
    [{
        name: "dummyPickerType",
        default: "Slider",
        choices: ["Slider", "Random"],
        category: "general",
        visibleIndex: 2 // Place after the Name and Title
    }],
    function () {
        return new QuestionDummyPickerModel("");
    },
    "question"
);

// Captions
const locale = localization.getLocale("");
locale.qt[CUSTOM_TYPE] = "Dummy Picker";
locale.pe.dummyPickerType = "Dummy picker type";

// Icons
const icon = (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="20" height="4" rx="2" ry="2"></rect>
        <line x1="4" y1="12" x2="8" y2="12"></line>
        <line x1="16" y1="12" x2="20" y2="12"></line>
        <line x1="12" y1="6" x2="12" y2="18"></line>
        <circle cx="12" cy="12" r="1.5"></circle>
        <polyline points="9 20 12 16 15 20"></polyline>
        <polyline points="15 4 12 8 9 4"></polyline>
    </svg>
);

const svg = ReactDOMServer.renderToString(icon);
SvgRegistry.registerIconFromSvg(CUSTOM_TYPE, svg);



